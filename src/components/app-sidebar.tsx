"use client";

import { CreditCardIcon, LogOutIcon, StarIcon } from "lucide-react";
<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
=======
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
<<<<<<< HEAD
import { menu_items } from "~/config/constants";
import { useHasActiveSubscription } from "~/features/subscriptions/hooks/use-subscription";
=======
import { MENU_ITEMS } from "~/config/constants";
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
import { authClient } from "~/lib/auth.client";

export const AppSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
<<<<<<< HEAD
  const { hasActiveSubscription, isLoading } = useHasActiveSubscription();
=======
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="gap-x-4 h-10 px-4">
            <Link href={"/"} prefetch>
              <Image
                src={"/images/logo.svg"}
                alt="Nodebase"
                height={35}
                width={35}
              />
              <span className="font-semibold text-sm">Nodebase</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarHeader>
      <SidebarContent>
<<<<<<< HEAD
        {menu_items.map((group) => (
=======
        {MENU_ITEMS.map((group) => (
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
          <SidebarGroup key={group.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={
                        item.url === "/"
                          ? pathname === "/"
                          : pathname.startsWith(item.url)
                      }
                      asChild
                      className="gap-x-4 h-10 px-4"
                    >
                      <Link href={item.url} prefetch>
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
<<<<<<< HEAD
        {!hasActiveSubscription && !isLoading && (
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={"Upgrade to Pro"}
              className="gap-x-4 h-10 px-4"
              onClick={() => authClient.checkout({ slug: "Nodebase-Pro" })}
            >
              <StarIcon className="size-4" />
              <span>Upgrade to Pro</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )}
=======
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip={"Upgrade to Pro"}
            className="gap-x-4 h-10 px-4"
            onClick={() => {}}
          >
            <StarIcon className="size-4" />
            <span>Upgrade to Pro</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip={"Billing Portal"}
            className="gap-x-4 h-10 px-4"
<<<<<<< HEAD
            onClick={() => authClient.customer.portal()}
=======
            onClick={() => {}}
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
          >
            <CreditCardIcon className="size-4" />
            <span>Billing Portal</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip={"Sign out"}
            className="gap-x-4 h-10 px-4"
            onClick={() =>
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/login");
                  },
                },
              })
            }
          >
            <LogOutIcon className="size-4" />
            <span>Sign out</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
};
