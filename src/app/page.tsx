import { caller } from "~/trpc/server";
import { LogoutBtn } from "./logout";
import { requireAuth } from "~/lib/auth.utils";
export default async function Home() {
  await requireAuth();
  const users = await caller.getUsers();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-5">
      protected page
      <div>{JSON.stringify(users, null, 2)}</div>
      <LogoutBtn />
    </div>
  );
}
