import { requireAuth } from "~/lib/auth.utils";

const WorkflowPage = async () => {
  await requireAuth();
  return <div>CredsPage</div>;
};

export default WorkflowPage;
