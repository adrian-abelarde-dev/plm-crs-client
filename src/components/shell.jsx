"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

// ? HeaderNavbar is a prop that will be passed to Shell to defined the header
// ? accessType is a prop that will be passed to Shell to defined the accessType --> "student", "faculty", etc.
const Shell = ({ HeaderNavbar, accessType }) => {
  const { data: session, status } = useSession();

  // ? Handle role based routing later.125
  // ? For now, redirect to student page if unauthenticated
  // ? For checking user access, use `session.user.role` === accessType
  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/student");
    }
  }, [status]);

  if (status === "authenticated") {
    return HeaderNavbar;
  }
};

export default Shell;
