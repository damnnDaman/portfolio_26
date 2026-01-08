import Image from "next/image";
import { SocialLink } from "@/types/socialLink";

interface SocialButtonProps extends SocialLink {
  classNameOverride?: string;
  styleOverride?: React.CSSProperties;
}

export default function SocialButton({
  icon,
  text,
  href,
  onClick,
  ariaLabel,
  classNameOverride,
  styleOverride,
}: SocialButtonProps) {
  const baseClasses =
    "group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/15 bg-white text-black shadow-[0_6px_16px_-12px_rgba(0,0,0,0.35)] transition-all duration-200 ease-out";
  const hoverClasses =
    "hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_22px_-14px_rgba(0,0,0,0.35)] hover:bg-black hover:text-white hover:border-black";
  const iconClasses = "h-5 w-5 transition duration-200 group-hover:invert";
  const tooltipClasses =
    "pointer-events-none absolute left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap rounded-full bg-black text-white text-xs font-semibold px-3 py-1 shadow-[0_10px_24px_-14px_rgba(0,0,0,0.45)] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200";

  const content = (
    <>
      <Image
        src={icon}
        alt=""
        width={20}
        height={20}
        className={iconClasses}
        aria-hidden="true"
      />
      <span className={tooltipClasses} role="tooltip">
        {text}
      </span>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        aria-label={ariaLabel}
        className={`${baseClasses} ${hoverClasses} cursor-pointer ${classNameOverride || ""}`}
        style={styleOverride}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <a
        aria-label={ariaLabel}
        className={`${baseClasses} ${hoverClasses} ${classNameOverride || ""}`}
        style={styleOverride}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return null;
}

