import { Header } from "../components/common/Header";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />

      <div className="max-w-screen-xl mx-auto px-14 mt-36">{children}</div>
    </>
  );
};
