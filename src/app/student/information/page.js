"use client";
import Shell from "@/components/Shell";
import StudentNavbar from "@/components/StudentNavbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Shell HeaderNavbar={<StudentNavbar />} />
    </div>
  );
};

export default page;
