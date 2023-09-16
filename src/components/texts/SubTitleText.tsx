export default function SubTitleText({
  children,
  align = "left",
  className = "",
}: {
  children: any;
  align?: "left" | "right" | "center";
  className?: string;
}) {
  return (
    <h6
      className={`text-primary max-w-4xl font-visby text-base font-medium leading-7 md:text-xl ${
        align === "right" ? "text-right" : align === "center" ? "text-center" : "text-left"
      } ${className}`}
    >
      {children}
    </h6>
  );
}
