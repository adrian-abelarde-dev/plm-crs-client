import UpdateMultipleStudentDialogForm from './college-update-multiple-student-records';
import UpdateStudentDialogForm from './college-update-student-record-dialog-form';

function CollegeStudentsEditIndivOrMultiple({
  updateIndivMultipleStudents,
  selectedStudent,
}) {
  if (updateIndivMultipleStudents === 1) {
    return <UpdateStudentDialogForm selectedStudent={selectedStudent[0]} />;
  } else if (updateIndivMultipleStudents > 1) {
    return (
      <UpdateMultipleStudentDialogForm selectedStudent={selectedStudent} />
    );
  }
}

export default CollegeStudentsEditIndivOrMultiple;
