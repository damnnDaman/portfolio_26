import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  showGithubLink?: boolean;
}

export default function MainLayout({
  children,
  showGithubLink = false,
}: MainLayoutProps) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-6xl mx-auto">
      <Header />
      <main className="w-full">{children}</main>
      {/* <Footer showGithubLink={showGithubLink} /> */}
    </div>
  );
}

