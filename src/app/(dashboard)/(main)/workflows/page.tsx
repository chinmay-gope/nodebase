import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import {
  WorkflowsContainer,
  WorkflowsList,
} from "~/features/workflows/components/workflow";
import { prefetchWorkflows } from "~/features/workflows/server/prefetch";
import { requireAuth } from "~/lib/auth.utils";
import { HydrateClient } from "~/trpc/server";

const WorkflowPage = async () => {
  await requireAuth();

  prefetchWorkflows();

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
