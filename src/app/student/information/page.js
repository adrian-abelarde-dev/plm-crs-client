import Shell from "@/components/shell";
import StudentNavbar from "@/components/layouts/student-navbar";
import React from "react";

const StudentInformationPage = () => {
  return (
    <div>
      <Shell HeaderNavbar={<StudentNavbar />} />
    </div>
  );
};

export default StudentInformationPage;
