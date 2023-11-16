import CollegeSectionsEditIndividual from './college-sections-edit-indiv';
import CollegeSectionsEditMultiple from './college-sections-edit-multiple';

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
