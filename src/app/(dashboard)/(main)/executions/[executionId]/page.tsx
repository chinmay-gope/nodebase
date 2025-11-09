import { requireAuth } from "~/lib/auth.utils";

interface Props {
  params: Promise<{
    executionId: string;
  }>;
}
const WorkflowPage = async ({ params }: Props) => {
  await requireAuth();
  const { executionId } = await params;
  return <div>executionId: {executionId}</div>;
};

export default WorkflowPage;
