"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useTRPC } from "~/trpc/client";
import { LogoutBtn } from "./logout";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";
export default function Home() {
  const trpc = useTRPC();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());

  const testAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: ({ message }) => {
        toast.success(message);
      },
    }),
  );

  const create = useMutation(
    trpc.createWorkflow.mutationOptions({
      onSuccess: ({ message }) => {
        toast.success(message);
      },
    }),
  );

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-5">
      protected page
      <div>{JSON.stringify(data, null, 2)}</div>
      <Button onClick={() => testAi.mutate()} disabled={testAi.isPending}>
        Test AI
      </Button>
      <Button onClick={() => create.mutate()} disabled={create.isPending}>
        Create Workflow
      </Button>
      <LogoutBtn />
    </div>
  );
}
