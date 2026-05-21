import { Footer } from "@/components/layout/footer";
import { MobileContactBar } from "@/components/layout/mobile-contact-bar";
import { Navbar } from "@/components/layout/navbar";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
