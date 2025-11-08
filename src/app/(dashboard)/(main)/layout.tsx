import { AppHeader } from "~/components/app-header";

<<<<<<< HEAD
const Layout = ({ children }: { children: React.ReactNode }) => {
=======
const MainLayout = ({ children }: { children: React.ReactNode }) => {
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
  return (
    <>
      <AppHeader />
      <main className="flex-1">{children}</main>
    </>
  );
};

<<<<<<< HEAD
export default Layout;
=======
export default MainLayout;
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
