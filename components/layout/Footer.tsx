import Image from "next/image";

interface FooterProps {
  showGithubLink?: boolean;
}

export default function Footer({ showGithubLink = false }: FooterProps) {
  return (
    <footer className="text-center text-gray-500">
      {showGithubLink && (
        <a
          className="flex items-center gap-2 justify-center hover:underline hover:underline-offset-4"
          href="https://github.com/maraliwayway/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Mara's GitHub profile"
        >
          <Image
            src="/icons/github.png"
            alt="Black GitHub icon"
            width={15}
            height={15}
            className="w-5 h-5"
            aria-hidden="true"
          />
          View Website Code
        </a>
      )}
    </footer>
  );
}

