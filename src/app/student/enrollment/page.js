import Shell from "@/components/shell";
import StudentNavbar from "@/components/layouts/student-navbar";
import React from "react";

const StudentEnrollmentPage = () => {
  return (
    <div>
      <Shell HeaderNavbar={<StudentNavbar />} accessType={"student"} />
    </div>
  );
};

export default StudentEnrollmentPage;
