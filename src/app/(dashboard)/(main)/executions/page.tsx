import { requireAuth } from "~/lib/auth.utils";

const WorkflowPage = async () => {
  await requireAuth();
  return <div>Excutions page</div>;
};

export default WorkflowPage;
