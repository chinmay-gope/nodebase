import { RegisterForm } from "~/features/auth/components/register-form";
import { requireUnauth } from "~/lib/auth.utils";

const Login = async () => {
  await requireUnauth();
  return <RegisterForm />;
};

export default Login;
