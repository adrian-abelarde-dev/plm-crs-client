"use client";
import Shell from "@/components/Shell";
import StudentNavbar from "@/components/StudentNavbar";
import React from "react";
import { MicrosoftButton } from "@/components/component/microsoft-button";
import { signIn, useSession } from "next-auth/react";
import StudentLogin from "./StudentLogin";

const page = () => {
  return (
    <>
      <StudentLogin />
    </>
  );
};

export default page;
