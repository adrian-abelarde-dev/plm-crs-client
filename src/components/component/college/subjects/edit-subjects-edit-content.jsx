import React from 'react';

import CollegeSubjectsEditIndividual from './college-subjects-edit-indiv';
import CollegeSubjectsEditMultiple from './college-subjects-edit-multiple';

function CollegeSubjectsEditIndivOrMultiple({
  editIndivMultipleSubjects,
  selectedSubjects,
}) {
  if (editIndivMultipleSubjects === 1) {
    return (
      <CollegeSubjectsEditIndividual selectedSubjects={selectedSubjects} />
    );
  } else if (editIndivMultipleSubjects > 1) {
    return <CollegeSubjectsEditMultiple selectedSubjects={selectedSubjects} />;
  }
}

export default CollegeSubjectsEditIndivOrMultiple;
