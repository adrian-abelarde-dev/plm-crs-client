import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

// ? HeaderNavbar is a prop that will be passed to Shell to defined the header
const Shell = ({ HeaderNavbar }) => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/student");
    }
  }, [status]);

  if (status === "authenticated") {
    return (
      // ! Passed to an AppShell component to handle responsive layout in the future
      <>{HeaderNavbar}</>
    );
  }
};

export default Shell;
