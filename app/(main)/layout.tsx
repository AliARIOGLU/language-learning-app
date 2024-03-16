import { MobileHeader } from "@/components/mobile-header";
import { Sidebar } from "@/components/sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <div className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <main className="h-full max-w-[1056px] mx-auto pt-6">{children}</main>
      </div>
    </>
  );
};

export default MainLayout;
