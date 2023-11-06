"use client";
import Shell from "@/components/shell";
import StudentNavbar from "@/components/layouts/student-navbar";
import React from "react";

const StudentGradesPage = () => {
  return (
    <div>
      <Shell HeaderNavbar={<StudentNavbar />} />
    </div>
  );
};

export default StudentGradesPage;
