import { SocialLink } from "@/types/socialLink";

export const socialLinks: SocialLink[] = [
  {
    text: "LinkedIn",
    icon: "/icons/linkedin.png",
    href: "https://www.linkedin.com/in/damankumar/",
    ariaLabel: "Visit Daman's LinkedIn profile",
  },
  {
    text: "GitHub",
    icon: "/icons/github.png",
    href: "https://github.com/damnnDaman",
    ariaLabel: "Visit Daman's GitHub profile",
  },
  {
    text: "Email",
    icon: "/icons/email.png",
    onClick: () => {
      navigator.clipboard
        .writeText("dkumar07@uoguelph.ca")
        .then(() => alert("Email copied to clipboard!"))
        .catch((err) => console.error("Failed to copy: ", err));
    },
    ariaLabel: "Copy Daman's email to clipboard",
  },
];

