"use client";
import { useCallback } from "react";
import { Box, CircularProgress, Paper, Snackbar, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Nft } from "@metaplex-foundation/js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import Countdown from "react-countdown";

import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { GatewayProvider } from "@civic/solana-gateway-react";
import { defaultGuardGroup, network } from "./config";

import { Minus, MultiMintButton, NumericField, Plus } from "./MultiMintButton";
import { AlertState } from "./utils";
import NftsModal from "./NftsModal";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import useCandyMachineV3 from "./hooks/useCandyMachineV3";
import { PaymentRequired } from "./hooks/types";
import Grid from "@material-ui/core/Grid";

const ConnectButton = styled(WalletMultiButton)`
  border-radius: 5px !important;
  padding: 6px 16px;
  background-color: #484cb4;
  color: #fff;
  margin: 0 auto;

  :hover {
    opacity: 0.8;
    background-color: #484cb4 !important;
    color: #fff;
  }
`;

const Card = styled(Paper)`
  display: inline-block;
  background-color: var(--countdown-background-color) !important;
  margin: 5px;
  min-width: 40px;
  padding: 24px;

  h1 {
    margin: 0px;
  }
`;

export interface MintZoneContentProps {
  candyMachineId: PublicKey;
}

const candyMachineOps = {};
const MintZoneContent = (props: MintZoneContentProps) => {
  const theme = useTheme<Theme>();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const { connection } = useConnection();
  const wallet = useWallet();
  const candyMachineV3 = useCandyMachineV3(props.candyMachineId, candyMachineOps);

  const [balance, setBalance] = useState<number>();
  const [mintedItems, setMintedItems] = useState<Nft[]>();

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const { guardLabel, guards, guardStates, prices } = useMemo(() => {
    const guardLabel = defaultGuardGroup;
    return {
      guardLabel,
      guards: candyMachineV3.guards[guardLabel] || candyMachineV3.guards.default || {},
      guardStates: candyMachineV3.guardStates[guardLabel] ||
        candyMachineV3.guardStates.default || {
          isStarted: true,
          isEnded: false,
          isLimitReached: false,
          canPayFor: 10,
          messages: [],
          isWalletWhitelisted: true,
          hasGatekeeper: false,
        },
      prices: candyMachineV3.prices[guardLabel] ||
        candyMachineV3.prices.default || {
          payment: [],
          burn: [],
          gate: [],
        },
    };
  }, [candyMachineV3.guards, candyMachineV3.guardStates, candyMachineV3.prices]);
  useEffect(() => {
    console.log({ guardLabel, guards, guardStates, prices });
  }, [guardLabel, guards, guardStates, prices]);
  useEffect(() => {
    (async () => {
      if (wallet?.publicKey) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);

  const openOnSolscan = useCallback((mint) => {
    window.open(
      `https://solscan.io/address/${mint}${
        [WalletAdapterNetwork.Devnet, WalletAdapterNetwork.Testnet].includes(network) ? `?cluster=${network}` : ""
      }`,
    );
  }, []);
  const [mintCount, setMintCount] = useState(1);

  const startMint = useCallback(async () => {
    const nftGuards: any[] = Array(mintCount)
      .fill(undefined)
      .map((_, i) => {
        return {
          burn: guards.burn?.nfts?.length
            ? {
                mint: guards.burn.nfts[i]?.mintAddress,
              }
            : undefined,
          payment: guards.payment?.nfts?.length
            ? {
                mint: guards.payment.nfts[i]?.mintAddress,
              }
            : undefined,
          gate: guards.gate?.nfts?.length
            ? {
                mint: guards.gate.nfts[i]?.mintAddress,
              }
            : undefined,
        };
      });

    console.log({ nftGuards });
    // debugger;
    candyMachineV3
      .mint(mintCount, {
        groupLabel: guardLabel,
        nftGuards,
      })
      .then((items) => {
        setMintedItems(items as any);
      })
      .catch((e) =>
        setAlertState({
          open: true,
          message: e.message,
          severity: "error",
        }),
      );
  }, [candyMachineV3.mint, guards, mintCount]);

  useEffect(() => {
    console.log({ candyMachine: candyMachineV3.candyMachine });
  }, [candyMachineV3.candyMachine]);

  const limit = useMemo(() => guardStates.canPayFor, [guardStates]);

  const totalSolCost = useMemo(
    () =>
      prices
        ? mintCount *
          (prices.payment.filter(({ kind }) => kind === "sol").reduce((a, { price }) => a + price, 0) + 0.012)
        : 0.012,
    [mintCount, prices],
  );

  const deepClone = (items: PaymentRequired[]) => items.map((item) => ({ ...item }));

  const totalTokenCosts = useMemo((): PaymentRequired[] => {
    if (!prices) return [];
    const maxPriceHash: { [k: string]: number } = {};
    const payment$burn$lenth = prices.payment.length + prices.burn.length;
    let payments = deepClone(prices.payment.concat(prices.burn).concat(prices.gate)).filter((price, index) => {
      const cacheKey = price.mint?.toString();
      if (!["token", "nft"].includes(price.kind)) return false;
      const alreadyFound = !!maxPriceHash[cacheKey];
      if (index < payment$burn$lenth) price.price *= mintCount;
      price.price = maxPriceHash[cacheKey] = Math.max(maxPriceHash[cacheKey] || 0, price.price);
      return !alreadyFound;
    });
    return payments;
  }, [mintCount, prices]);

  const totalTokenCostsString = useMemo(() => {
    return totalTokenCosts.reduce((text, price) => `${text} + ${price.price} ${price.label}`, "");
  }, [totalTokenCosts]);

  function incrementValue() {
    var numericField = document.querySelector(".mint-qty") as HTMLInputElement;
    if (numericField) {
      var value = parseInt(numericField.value);
      if (!isNaN(value) && value < Math.min(10, candyMachineV3.items.remaining)) {
        value++;
        numericField.value = "" + value;
        updateAmounts(value);
      }
    }
  }

  function decrementValue() {
    var numericField = document.querySelector(".mint-qty") as HTMLInputElement;
    if (numericField) {
      var value = parseInt(numericField.value);
      if (!isNaN(value) && value > 1) {
        value--;
        numericField.value = "" + value;
        updateAmounts(value);
      }
    }
  }

  function updateMintCount(target: any) {
    var value = parseInt(target.value);
    if (!isNaN(value)) {
      if (value > Math.min(10, candyMachineV3.items.remaining)) {
        value = Math.min(10, candyMachineV3.items.remaining);
        target.value = "" + value;
      } else if (value < 1) {
        value = 1;
        target.value = "" + value;
      }
      updateAmounts(value);
    }
  }

  function updateAmounts(qty: number) {
    setMintCount(qty);
    // setTotalCost(Math.round(qty * (price + 0.012) * 1000) / 1000); // 0.012 = approx of account creation fees
  }

  const disabled = useMemo(
    () =>
      !candyMachineV3.items.remaining ||
      candyMachineV3.status.minting ||
      !guardStates.isStarted ||
      guardStates.isEnded ||
      !!!candyMachineV3.items.remaining ||
      mintCount > limit,
    [candyMachineV3, guardStates],
  );

  const MintButton = ({ gatekeeperNetwork }: { gatekeeperNetwork?: PublicKey }) => (
    <MultiMintButton
      candyMachine={candyMachineV3.candyMachine}
      gatekeeperNetwork={gatekeeperNetwork}
      isMinting={candyMachineV3.status.minting}
      setIsMinting={() => {}}
      isActive={!!candyMachineV3.items.remaining}
      isEnded={guardStates.isEnded}
      isSoldOut={!candyMachineV3.items.remaining}
      guardStates={guardStates}
      onMint={startMint}
      prices={prices}
      disabled={disabled}
    />
  );

  return (
    <Grid className="relative" container direction="row">
      <Grid item xs={false} sm={3} />
      <Grid item xs={!wallet?.publicKey ? 12 : 9} sm={6} className="relative">
        <section className="z-top">
          <Box className="relative flex h-full flex-col justify-center">
            <Paper
              style={{
                padding: 24,
                paddingBottom: 10,
                backgroundColor: "transparent",
                borderRadius: 6,
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
              elevation={0}
            >
              <>
                {guardStates.isStarted && wallet?.publicKey && (
                  <Typography
                    variant={matches ? "h6" : "h5"}
                    align="center"
                    display="block"
                    color="primary"
                    style={{
                      marginBottom: 7,
                      color: "#fff",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      flex: 1,
                    }}
                  >
                    {guardStates.isEnded || candyMachineV3.items.remaining === 0
                      ? "Minting has Ended"
                      : "Minting is Live"}
                  </Typography>
                )}

                {guardStates.isStarted && wallet?.publicKey && (
                  <Grid container direction="row" justifyContent="center" style={{ flex: 2 }}>
                    <Grid item xs={4}>
                      <Typography
                        variant={matches ? "body2" : "h6"}
                        className="text-center uppercase text-primary"
                        style={{ fontWeight: "bold" }}
                      >
                        Price:
                      </Typography>
                      <Typography
                        variant={matches ? "body2" : "h6"}
                        className="text-center uppercase text-golden"
                        style={{ fontWeight: "bold" }}
                      >
                        ◎ {prices.payment[0]?.price}
                      </Typography>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography
                        variant={matches ? "body2" : "h6"}
                        className="text-center uppercase text-primary"
                        style={{ fontWeight: "bold" }}
                      >
                        Supply
                      </Typography>
                      <Typography
                        variant={matches ? "body2" : "h6"}
                        className="text-center uppercase text-golden"
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {candyMachineV3.items.available}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant={matches ? "body2" : "h6"}
                        className="text-center uppercase text-primary"
                        style={{ fontWeight: "bold" }}
                      >
                        Minted
                      </Typography>
                      <Typography
                        variant={matches ? "body2" : "h6"}
                        className="text-center uppercase text-golden"
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {candyMachineV3.items.redeemed}/{candyMachineV3.items.available}{" "}
                        {(guards?.mintLimit?.mintCounter?.count || guards?.mintLimit?.settings?.limit) && (
                          <>
                            ({guards?.mintLimit?.mintCounter?.count || "0"}
                            {guards?.mintLimit?.settings?.limit && <>/{guards?.mintLimit?.settings?.limit} </>}
                            by you)
                          </>
                        )}
                      </Typography>
                    </Grid>

                    {candyMachineV3.status.minting && (
                      <Grid item xs={12} container justifyContent="center">
                        <div className="hidden md:flex">
                          <CircularProgress />
                        </div>
                      </Grid>
                    )}
                    {limit === 0 && candyMachineV3.items.remaining !== 0 && (
                      <Typography variant="h4" align={"center"}>
                        You might need more SOL in order to buy at least one item (this includes possible transaction
                        fees)
                      </Typography>
                    )}
                    {candyMachineV3.items.remaining !== 0 && !candyMachineV3.status.minting && limit > 0 && (
                      <Grid item xs={false} container justifyContent={"center"}>
                        <div className="hidden w-full justify-center md:flex">
                          <Typography align={"center"} className={`font-roboto text-primary`} style={{ fontSize: 22 }}>
                            Quantity (estimated total price: {totalSolCost} SOL):
                          </Typography>
                        </div>
                        <div className="hidden w-full flex-row justify-center md:flex">
                          <Minus disabled={disabled || mintCount <= 1} onClick={() => decrementValue()}>
                            <span style={{ marginTop: "-5px !important" }}>-</span>
                          </Minus>
                          <NumericField
                            disabled={disabled}
                            type="number"
                            className="mint-qty text-primary"
                            step={1}
                            min={1}
                            max={Math.min(limit, 10)}
                            value={mintCount}
                            onChange={(e) => updateMintCount(e.target as any)}
                          />
                          <Plus disabled={disabled || limit <= mintCount} onClick={() => incrementValue()}>
                            +
                          </Plus>
                        </div>
                      </Grid>
                    )}
                  </Grid>
                )}
                {!guardStates.isStarted ? (
                  <Box className="grid h-full w-full content-center">
                    <Countdown
                      date={guards.startTime}
                      renderer={renderGoLiveDateCounter}
                      onComplete={() => {
                        candyMachineV3.refresh();
                      }}
                    />
                  </Box>
                ) : !wallet?.publicKey ? (
                  <ConnectButton>Connect Wallet</ConnectButton>
                ) : // ) : !guardStates.canPayFor ? (
                //   <h1>You cannot pay for the mint</h1>
                !guardStates.isWalletWhitelisted ? (
                  <h1>Mint is private.</h1>
                ) : (
                  <></>
                )}
                <NftsModal
                  openOnSolscan={openOnSolscan}
                  mintedItems={mintedItems || []}
                  setMintedItems={setMintedItems}
                />
              </>
            </Paper>
          </Box>
        </section>
        <Snackbar
          open={alertState.open}
          autoHideDuration={6000}
          onClose={() => setAlertState({ ...alertState, open: false })}
        >
          <Alert onClose={() => setAlertState({ ...alertState, open: false })} severity={alertState.severity}>
            {alertState.message}
          </Alert>
        </Snackbar>
      </Grid>
      <Grid item container direction="column" justifyContent="center" xs={3} className="z-top">
        {guardStates.isStarted && wallet?.publicKey && (
          <div>
            {!!candyMachineV3.items.remaining &&
            guardStates.hasGatekeeper &&
            wallet.publicKey &&
            wallet.signTransaction ? (
              <GatewayProvider
                wallet={{
                  publicKey: wallet.publicKey,
                  //@ts-ignore
                  signTransaction: wallet.signTransaction,
                }}
                gatekeeperNetwork={guards.gatekeeperNetwork}
                connection={connection}
                cluster={process.env.NEXT_PUBLIC_SOLANA_NETWORK || "devnet"}
                options={{ autoShowModal: false }}
              >
                <MintButton gatekeeperNetwork={guards.gatekeeperNetwork} />
              </GatewayProvider>
            ) : (
              <MintButton />
            )}
          </div>
        )}
      </Grid>
      {candyMachineV3.status.minting && (
        <Grid item xs={12} container justifyContent="center" className="z-top py-8">
          <div className="flex md:hidden">
            <CircularProgress size={100} color={"secondary"} className="flex md:hidden" />
          </div>
        </Grid>
      )}
      {!candyMachineV3.status.minting && !disabled && (
        <div className="z-top relative mx-auto flex w-4/5 flex-col justify-center py-8 md:hidden">
          <div className="w-full text-center text-white">
            <Typography variant="h4" className="pb-8">
              <span className="text-center">Quantity (estimated total price: {totalSolCost} SOL):</span>
            </Typography>
          </div>
          <div className="flex w-full flex-row justify-center">
            <Minus disabled={disabled || mintCount <= 1} onClick={() => decrementValue()}>
              <span style={{ marginTop: "-5px !important" }}>-</span>
            </Minus>
            <NumericField
              disabled={disabled}
              type="number"
              className="mint-qty text-black"
              step={1}
              min={1}
              max={Math.min(limit, 10)}
              value={mintCount}
              onChange={(e) => updateMintCount(e.target as any)}
            />
            <Plus disabled={disabled || limit <= mintCount} onClick={() => incrementValue()}>
              +
            </Plus>
          </div>
        </div>
      )}
    </Grid>
  );
};

export default MintZoneContent;

const renderGoLiveDateCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <>
      <div className="hidden justify-center sm:flex">
        <Card elevation={1}>
          <h1>{days}</h1>Days
        </Card>
        <Card elevation={1}>
          <h1>{hours}</h1>
          Hours
        </Card>
        <Card elevation={1}>
          <h1>{minutes}</h1>Mins
        </Card>
        <Card elevation={1}>
          <h1>{seconds}</h1>Secs
        </Card>
      </div>
      <div className="flex justify-center sm:hidden">
        <Typography variant={"h4"}>
          {days}:{hours}:{minutes}:{seconds}
        </Typography>
      </div>
    </>
  );
};
