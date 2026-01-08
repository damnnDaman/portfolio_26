import { SocialLink } from "@/types/socialLink";

export const socialLinks: SocialLink[] = [
  {
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    href: "https://www.linkedin.com/in/damankumar/",
    ariaLabel: "Visit Daman's LinkedIn profile",
  },
  {
    text: "GitHub",
    icon: "/icons/github.svg",
    href: "https://github.com/damnnDaman",
    ariaLabel: "Visit Daman's GitHub profile",
  },
  {
    text: "Instagram",
    icon: "/icons/instagram.svg",
    href: "https://www.instagram.com/",
    ariaLabel: "Visit Daman's Instagram profile",
  },
  {
    text: "Email",
    icon: "/icons/email.svg",
    onClick: () => {
      navigator.clipboard
        .writeText("dkumar07@uoguelph.ca")
        .then(() => alert("Email copied to clipboard!"))
        .catch((err) => console.error("Failed to copy: ", err));
    },
    ariaLabel: "Copy Daman's email to clipboard",
  },
];

