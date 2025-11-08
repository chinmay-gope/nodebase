import { FolderOpenIcon, HistoryIcon, KeyIcon } from "lucide-react";

<<<<<<< HEAD
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_PAGE_SIZE: 1,
  MAX_PAGE_SIZE: 100,
  MIN_PAGE_SIZE: 1,
};

export const menu_items = [
=======
export const MENU_ITEMS = [
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
  {
    title: "Main",
    items: [
      {
        title: "Workflows",
        icon: FolderOpenIcon,
        url: "/workflows",
      },
      {
        title: "Credentials",
        icon: KeyIcon,
        url: "/credentials",
      },
      {
        title: "Executions",
        icon: HistoryIcon,
        url: "/executions",
      },
    ],
  },
];
