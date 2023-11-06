"use client";
import Shell from "@/components/Shell";
import StudentNavbar from "@/components/StudentNavbar";
import React from "react";

const StudentInformationPage = () => {
  return (
    <div>
      <Shell HeaderNavbar={<StudentNavbar />} />
    </div>
  );
};

export default StudentInformationPage;
