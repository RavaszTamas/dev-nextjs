import { twMerge } from "tailwind-merge";

export default function OutlinedButton({
  children,
  variant = "filled",
  disabled = false,
  type,
  className,
}: {
  children: string;
  className?: string;
  variant?: "filled" | "transparent";
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={twMerge(
        `${
          variant === "filled" ? "bg-secondary" : "bg-transparent"
        } text-primary px-10 py-3 font-roboto text-base font-bold leading-7 md:px-14 md:py-[18px] md:text-xl ${
          variant === "filled" ? "border-0" : "border-primary border-[1px]"
        }`,
        className,
      )}
    >
      {children}
    </button>
  );
}
