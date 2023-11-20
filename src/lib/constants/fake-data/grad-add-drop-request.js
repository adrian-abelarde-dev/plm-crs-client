export const addDropRequestData = [
  {
    studentNumber: '2018-00001',
    view: 'View',
    studentName: 'Juan Dela Cruz',
    programId: 'BSIT',
    status: 'Approved',
    collegeId: 'CCS',
    dateRequested: '2021-06-01 13:58:20',
    totalUnits: 6,
    reason: 'Conflict to my work schedule',
    approvedBy: '@thomyorke',
    dateApproved: '2021-06-01 14:00:00',
    droppedClasses: [
      {
        classId: '2023100135',
        classCode: 'IT 1',
        classTitle: 'Introduction to Information Technology',
      },
    ],
    addedClasses: [
      {
        classId: '2023100295',
        classCode: 'COMSHOP 1',
        classTitle: 'Introduction to Computer Shop Operation',
      },
    ],
  },
  {
    studentNumber: '2019-00002',
    view: 'View',
    studentName: 'Maria Garcia',
    programId: 'BSCS',
    status: 'Pending',
    collegeId: 'CCS',
    dateRequested: '2021-07-15 09:30:45',
    totalUnits: 9,
    reason: 'Want to take an additional elective',
    approvedBy: '',
    dateApproved: '',
    droppedClasses: [
      {
        classId: '2023100150',
        classCode: 'CS 2',
        classTitle: 'Data Structures and Algorithms',
      },
    ],
    addedClasses: [
      {
        classId: '2023100300',
        classCode: 'CSH 2',
        classTitle: 'Computer System Hardware',
      },
    ],
  },
  {
    studentNumber: '2020-00003',
    view: 'View',
    studentName: 'Miguel Rodriguez',
    programId: 'BSECE',
    status: 'Declined',
    collegeId: 'COE',
    dateRequested: '2021-08-20 16:45:30',
    totalUnits: 12,
    reason: 'Change of mind',
    approvedBy: '',
    dateApproved: '',
    droppedClasses: [
      {
        classId: '2023100185',
        classCode: 'EE 3',
        classTitle: 'Electrical Circuits and Systems',
      },
    ],
    addedClasses: [
      {
        classId: '2023100350',
        classCode: 'ECOM 1',
        classTitle: 'Electronic Communications',
      },
    ],
  },
];
