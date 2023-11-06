"use client";
import Shell from "@/components/shell";
import StudentNavbar from "@/components/layouts/student-navbar";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const StudentHomePage = () => {
  return (
    <div>
      <Shell HeaderNavbar={<StudentNavbar />} />
      {/* remove this on the final layout of student home */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          signOut();
          redirect("/student");
        }}
      >
        Sign out
      </button>
    </div>
  );
};

export default StudentHomePage;
