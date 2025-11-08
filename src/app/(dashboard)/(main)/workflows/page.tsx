<<<<<<< HEAD
import type { SearchParams } from "nuqs/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  WorkflowsContainer,
  WorkflowsList,
} from "~/features/workflows/components/workflow";
import { workflowsParamsLoader } from "~/features/workflows/server/params-loader";
import { prefetchWorkflows } from "~/features/workflows/server/prefetch";
import { requireAuth } from "~/lib/auth.utils";
import { HydrateClient } from "~/trpc/server";

type Props = {
  searchParams: Promise<SearchParams>;
};

const WorkflowPage = async ({ searchParams }: Props) => {
  await requireAuth();
  const params = await workflowsParamsLoader(searchParams);

  prefetchWorkflows(params);

  return (
    <WorkflowsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<p>Error!</p>}>
          <Suspense fallback={<p>Loading...</p>}>
            <WorkflowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkflowsContainer>
  );
};

export default WorkflowPage;
=======
const Page = () => {
  return <div>Workflow Page</div>;
};

export default Page;
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
