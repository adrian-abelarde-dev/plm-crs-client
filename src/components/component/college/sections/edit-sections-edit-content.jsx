import CollegeSectionsEditIndividual from './edit-content-edit-indiv';
import CollegeSectionsEditMultiple from './edit-content-edit-multiple';

function CollegeSectionsEditIndivOrMultiple({
  editIndivMultipleSections,
  selectedSections,
}) {
  if (editIndivMultipleSections === 1) {
    return <CollegeSectionsEditIndividual />;
  } else if (editIndivMultipleSections > 1) {
    return <CollegeSectionsEditMultiple selectedSections={selectedSections} />;
  }
}

export default CollegeSectionsEditIndivOrMultiple;
