<<<<<<< HEAD
import { SidebarTrigger } from "./ui/sidebar";
=======
import { SidebarTrigger } from "~/components/ui/sidebar";
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515

export const AppHeader = () => {
  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 bg-background">
      <SidebarTrigger />
    </header>
  );
};
