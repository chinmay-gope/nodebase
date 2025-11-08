import { AppSidebar } from "~/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "~/components/ui/sidebar";

<<<<<<< HEAD
const Layout = ({ children }: { children: React.ReactNode }) => {
=======
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-accent/20">{children}</SidebarInset>
    </SidebarProvider>
  );
};

<<<<<<< HEAD
export default Layout;
=======
export default DashboardLayout;
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
