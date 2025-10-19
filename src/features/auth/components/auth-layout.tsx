import Image from "next/image";
import Link from "next/link";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={48}
            height={48}
            className="mx-auto"
          />
          Nodebase
        </Link>
        {children}
      </div>
    </div>
  );
};
