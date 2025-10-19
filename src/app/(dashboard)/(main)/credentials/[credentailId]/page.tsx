import { requireAuth } from "~/lib/auth.utils";

interface Props {
  params: Promise<{
    credentailId: string;
  }>;
}
const WorkflowPage = async ({ params }: Props) => {
  await requireAuth();
  const { credentailId } = await params;
  return <div>credentailId: {credentailId}</div>;
};

export default WorkflowPage;
