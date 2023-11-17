'use client';

export const fakeCollegeSchedule = [
  {
    schedName: 'Monday 3:00 PM - 5:00 PM',
    schedSubject: 'Mathematics',
    schedSection: 'BSCE 2-4',
    schedSlots: 49,
  },
  {
    schedName: 'Tuesday 8:00 AM - 10:00 AM',
    schedSubject: 'Physics',
    schedSection: 'BSCS 1-1',
    schedSlots: 50,
  },
  {
    schedName: 'Wednesday 1:00 PM - 3:00 PM',
    schedSubject: 'Chemistry',
    schedSection: 'BSIT 3-2',
    schedSlots: 48,
  },
  {
    schedName: 'Thursday 10:00 AM - 12:00 PM',
    schedSubject: 'Biology',
    schedSection: 'BSN 2-1',
    schedSlots: 45,
  },
  {
    schedName: 'Friday 2:00 PM - 4:00 PM',
    schedSubject: 'English',
    schedSection: 'BSED 4-1',
    schedSlots: 47,
  },
  {
    schedName: 'Monday 10:00 AM - 12:00 PM',
    schedSubject: 'History',
    schedSection: 'BSE 3-1',
    schedSlots: 50,
  },
  {
    schedName: 'Tuesday 1:00 PM - 3:00 PM',
    schedSubject: 'Philosophy',
    schedSection: 'BSCS 2-2',
    schedSlots: 48,
  },
  {
    schedName: 'Wednesday 8:00 AM - 10:00 AM',
    schedSubject: 'Psychology',
    schedSection: 'BSIT 4-1',
    schedSlots: 49,
  },
  {
    schedName: 'Thursday 3:00 PM - 5:00 PM',
    schedSubject: 'Sociology',
    schedSection: 'BSN 3-2',
    schedSlots: 45,
  },
  {
    schedName: 'Friday 10:00 AM - 12:00 PM',
    schedSubject: 'Anthropology',
    schedSection: 'BSED 2-1',
    schedSlots: 47,
  },
];

export const fakeCollegeFaculty = [
  {
    facultyFName: 'John',
    facultyMName: 'Doe',
    facultyLName: 'Smith',
    facultyEmail: 'jdsmith@plm.edu.ph',
  },
  {
    facultyFName: 'Jane',
    facultyMName: 'Emily',
    facultyLName: 'Doe',
    facultyEmail: 'jedoe@plm.edu.ph',
  },
  {
    facultyFName: 'Robert',
    facultyMName: 'Alwyn',
    facultyLName: 'Johnson',
    facultyEmail: 'rajohnson@plm.edu.ph',
  },
  {
    facultyFName: 'Emily',
    facultyMName: 'Grace',
    facultyLName: 'Williams',
    facultyEmail: 'egwilliams@plm.edu.ph',
  },
];

export const fakeCollegeClassHours = [
  {
    day: 'Monday',
    timeStart: '8:00 AM',
    timeEnd: '9:30 AM',
    room: 'GV 301',
    meetingType: 'Asynchronous Online',
  },
  {
    day: 'Monday',
    timeStart: '8:00 AM',
    timeEnd: '9:30 AM',
    room: 'GV 301',
    meetingType: 'Asynchronous Online',
  },
  {
    day: 'Monday',
    timeStart: '8:00 AM',
    timeEnd: '9:30 AM',
    room: 'GV 301',
    meetingType: 'Asynchronous Online',
  },
  {
    day: 'Wednesday',
    timeStart: '8:00 AM',
    timeEnd: '9:30 AM',
    room: 'GV 301',
    meetingType: 'Asynchronous Online',
  },
  {
    day: 'Saturday',
    timeStart: '8:30 AM',
    timeEnd: '9:30 AM',
    room: 'GV 301',
    meetingType: 'Synchronous Online',
  },
  {
    day: 'Friday',
    timeStart: '8:00 AM',
    timeEnd: '9:30 AM',
    room: 'GV 301',
    meetingType: 'Face To Face',
  },
];

export const fakeCollegeClassRestrictions = [
  {
    scope: 'College',
    restriction: 'Not Sure',
  },
  {
    scope: 'College',
    restriction: 'Not Sure',
  },
  {
    scope: 'College',
    restriction: 'Not Sure',
  },
];

export const facultyNames = [
  'Jamilah S. Guallil',
  'Raymund M. Dioses',
  'Leisyl Mahusay',
  'John Ray M. Tenio',
  'Jonathan C. Morano',
];

export const collegeDepartments = [
  {
    value: 'coe',
    label: 'COE',
  },
  {
    value: 'plmbs',
    label: 'PLMBS',
  },
  {
    value: 'chass',
    label: 'CHASS',
  },
  {
    value: 'cet',
    label: 'CET',
  },
  {
    value: 'caup',
    label: 'CAUP',
  },
  {
    value: 'cs',
    label: 'CS',
  },
  {
    value: 'cn',
    label: 'CN',
  },
  {
    value: 'cpt',
    label: 'CPT',
  },
];

export const collegeSchoolYears = [
  {
    value: '20201',
    label: '2020 1st Semester',
  },
  {
    value: '20202',
    label: '2020 2nd Semester',
  },
  {
    value: '20211',
    label: '2021 1st Semester',
  },
  {
    value: '20212',
    label: '2021 2nd Semester',
  },
  {
    value: '20221',
    label: '2022 1st Semester',
  },
  {
    value: '20222',
    label: '2022 2nd Semester',
  },
];

export const collegeSection = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
];

export const collegeYearLevel = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
];

export const collegeCredits = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
];

export const collegeSlots = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' },
  { label: '8', value: '8' },
  { label: '9', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
  { label: '17', value: '17' },
  { label: '18', value: '18' },
  { label: '19', value: '19' },
  { label: '20', value: '20' },
  { label: '21', value: '21' },
  { label: '22', value: '22' },
  { label: '23', value: '23' },
  { label: '24', value: '24' },
  { label: '25', value: '25' },
  { label: '26', value: '26' },
  { label: '27', value: '27' },
  { label: '28', value: '28' },
  { label: '29', value: '29' },
  { label: '30', value: '30' },
  { label: '31', value: '31' },
  { label: '32', value: '32' },
  { label: '33', value: '33' },
  { label: '34', value: '34' },
  { label: '35', value: '35' },
  { label: '36', value: '36' },
  { label: '37', value: '37' },
  { label: '38', value: '38' },
  { label: '39', value: '39' },
  { label: '40', value: '40' },
  { label: '41', value: '41' },
  { label: '42', value: '42' },
  { label: '43', value: '43' },
  { label: '44', value: '44' },
  { label: '45', value: '45' },
  { label: '46', value: '46' },
  { label: '47', value: '47' },
  { label: '48', value: '48' },
  { label: '49', value: '49' },
  { label: '50', value: '50' },
];

export const collegeParentClassCode = [
  { label: 'CSC', value: 'csc' },
  { label: 'ETH', value: 'eth' },
  { label: 'ICC', value: 'icc' },
  { label: 'TCW', value: 'tcw' },
];
