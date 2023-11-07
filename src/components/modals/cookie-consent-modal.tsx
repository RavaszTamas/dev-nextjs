import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useLocalStorage } from "usehooks-ts";

const CookieConsentModal = () => {
  const [isCookieAccepted, setIsCookieAccepted] = useLocalStorage("COOKIE-ACCEPTED", "NOT_DECIDED");

  return (
    <Dialog open={isCookieAccepted === "NOT_DECIDED"}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent hasClose={false} className="bg-white">
        <DialogHeader className="gap-4">
          <DialogTitle className="text-center font-new-alenia text-4xl">Cookie Policy</DialogTitle>
          <DialogDescription className="font-visby font-bold text-xl">
            We employ cookies and comparable technologies to enhance content personalization and deliver an improved
            user experience. By selecting &quot;accept,&quot; you are consenting to this practice, as detailed in our Cookie
            Policy.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="">
          <Button
            onClick={() => setIsCookieAccepted("NOT_ACCEPTED")}
            type="button"
            variant="ghost"
            className="flex rounded-lg pt-3 leading-3 text-primary-black"
          >
            Close
          </Button>
          <Button
            onClick={() => setIsCookieAccepted("ACCEPTED")}
            type="button"
            variant="default"
            className="flex rounded-lg pt-3"
          >
            Accept
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CookieConsentModal;
