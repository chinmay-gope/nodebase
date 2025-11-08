<<<<<<< HEAD
import { requireAuth } from "~/lib/auth.utils";

interface Props {
=======
interface PageProps {
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
  params: Promise<{
    workflowId: string;
  }>;
}
<<<<<<< HEAD

const WorkflowPage = async ({ params }: Props) => {
  await requireAuth();
  const { workflowId } = await params;
  return <div>Workflow id: {workflowId}</div>;
};

export default WorkflowPage;
=======
const Page = async ({ params }: PageProps) => {
  const { workflowId } = await params;
  return <div>Workflow Id:{workflowId}</div>;
};

export default Page;
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
