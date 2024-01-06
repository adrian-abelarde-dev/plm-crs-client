const currentAysem = '20231';

function DisableEnlistment(selectedStudent, rowSelection) {
  /*multiple irregular students cannot be enlisted */
  const multipleIrregular =
    selectedStudent?.filter((student) => student.regCode === 'Irregular')
      .length > 1;

  /*irregular and regular student cannot be enlisted together */
  const irregularAndRegular =
    selectedStudent?.filter((student) => student.regCode === 'Irregular')
      .length > 0 &&
    selectedStudent?.filter((student) => student.regCode === 'Regular').length >
      0;

  /* only enlist students with the same block*/
  const diffProgramYearBlock =
    selectedStudent.filter(
      (student) =>
        student.program != selectedStudent[0].program ||
        student.yearLevel != selectedStudent[0].yearLevel ||
        student.block != selectedStudent[0].block,
    ).length > 0;

  const outdatedAysem =
    selectedStudent.filter((student) => student.aySem === currentAysem).length <
    selectedStudent.length;

  return (
    Object.keys(rowSelection).length === 0 ||
    multipleIrregular ||
    irregularAndRegular ||
    diffProgramYearBlock ||
    outdatedAysem
  );
}
export default DisableEnlistment;
