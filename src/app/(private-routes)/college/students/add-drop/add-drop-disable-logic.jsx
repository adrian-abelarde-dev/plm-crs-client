const currentAysem = '20231';

function DisableAddDrop(selectedStudent, rowSelection) {
  const regular = selectedStudent[0]?.regCode === 'Regular';
  /*the student is already enrolled or enlisted */
  const enlistedAndEnrolled =
    selectedStudent?.filter(
      (student) =>
        (student.regCode === 'Irregular' &&
          student.enrollmentStatus === 'Enlisted') ||
        student.enrollmentStatus === 'Enrolled',
    ).length > 0;

  const outdatedAysem =
    selectedStudent.filter((student) => student.aySem === currentAysem).length <
    selectedStudent.length;

  return (
    Object.keys(rowSelection).length === 0 ||
    Object.keys(rowSelection).length > 1 ||
    regular ||
    enlistedAndEnrolled ||
    outdatedAysem
  );
}
export default DisableAddDrop;
