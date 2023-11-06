"use client";

import { MicrosoftButton } from "@/components/component/microsoft-button";
import { signOut, useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const StudentLogin = () => {
  const { data: session, status } = useSession();

  // check if user is logged in then redirects to student home
  useEffect(() => {
    if (status === "authenticated") {
      redirect("/student/home");
    }
  }, [status]);

  return (
    <>
      <MicrosoftButton
        microsoftSignIn={() => {
          console.log("logging in?");
          signIn();
        }}
      />
      {session?.user.email}

      {/* remove this on the final layout of student login */}
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default StudentLogin;
