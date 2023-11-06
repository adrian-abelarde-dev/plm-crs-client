import StudentNavbar from "@/components/layouts/student-navbar";
import Shell from "@/components/shell";
import React from "react";

const StudentAcountPage = () => {
  return (
    <div>
      <Shell HeaderNavbar={<StudentNavbar />} accessType={"student"} />
    </div>
  );
};

export default StudentAcountPage;
