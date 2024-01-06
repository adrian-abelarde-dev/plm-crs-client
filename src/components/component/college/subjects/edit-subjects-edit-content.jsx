import React from 'react';

import CollegeSubjectsEditIndividual from './edit-content-edit-indiv';
import CollegeSubjectsEditMultiple from './edit-content-edit-multiple';

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
