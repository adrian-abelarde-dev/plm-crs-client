import IrregularEnlistmentDialogForm from './irregular-enlistment';
import MultipleEnlistmentDialogForm from './multiple-enlistment';
import EnlistmentDialogForm from './regular-enlistment';

function MultipleIndivIrregRegEnlistment({ selectedStudent, enlistStudents }) {
  if (enlistStudents == 1) {
    if (selectedStudent[0].regCode == 'Regular') {
      return <EnlistmentDialogForm selectedStudent={selectedStudent} />;
    } else if (selectedStudent[0].regCode == 'Irregular') {
      return (
        <IrregularEnlistmentDialogForm selectedStudent={selectedStudent} />
      );
    }
  } else if (enlistStudents > 1) {
    return <MultipleEnlistmentDialogForm selectedStudent={selectedStudent} />;
  }
}
export default MultipleIndivIrregRegEnlistment;
