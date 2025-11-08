<<<<<<< HEAD
import { requireAuth } from "~/lib/auth.utils";

interface Props {
=======
interface PageProps {
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
  params: Promise<{
    executionId: string;
  }>;
}
<<<<<<< HEAD
const WorkflowPage = async ({ params }: Props) => {
  await requireAuth();
  const { executionId } = await params;
  return <div>executionId: {executionId}</div>;
};

export default WorkflowPage;
=======
const Page = async ({ params }: PageProps) => {
  const { executionId } = await params;
  return <div>Execution Id:{executionId}</div>;
};

export default Page;
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
