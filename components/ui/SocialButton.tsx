import Image from "next/image";
import { SocialLink } from "@/types/socialLink";

interface SocialButtonProps extends SocialLink {}

export default function SocialButton({
  icon,
  text,
  href,
  onClick,
  ariaLabel,
}: SocialButtonProps) {
  const buttonProps = {
    className:
      "flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-all duration-200",
    "aria-label": ariaLabel,
  };

  if (onClick) {
    return (
      <button
        {...buttonProps}
        onClick={onClick}
        className={`${buttonProps.className} cursor-pointer`}
        type="button"
      >
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className="w-5 h-5"
          aria-hidden="true"
        />
        {text}
      </button>
    );
  }

  if (href) {
    return (
      <a {...buttonProps} href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={icon}
          alt=""
          width={20}
          height={20}
          className="w-5 h-5"
          aria-hidden="true"
        />
        {text}
      </a>
    );
  }

  return null;
}

