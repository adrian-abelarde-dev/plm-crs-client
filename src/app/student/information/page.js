import StudentNavbar from '@/components/layouts/student-navbar';
import Shell from '@/components/shell';
import React from 'react';

const StudentInformationPage = () => {
    return (
        <div>
            <Shell HeaderNavbar={<StudentNavbar />} />
        </div>
    );
};

export default StudentInformationPage;
