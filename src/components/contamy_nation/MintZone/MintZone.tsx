import {PublicKey} from "@metaplex-foundation/js";
import MintZoneContent from "../MintZoneContent";
export default function MintZone(props: { candyMachineId:PublicKey }) {
  return (
    <section id="mint-zone" className="relative w-full">
      <MintZoneContent {...props} />
    </section>
  );
}
