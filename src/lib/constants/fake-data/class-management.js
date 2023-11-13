import { getRandomDate } from '@/lib/utils';

export const collegeClassManagementData = [
  {
    // Table Data
    subjectCode: 'GYM-123',
    subjectName: 'Engineering Research and Development',
    yearTerm: '2021-2022 1st Term',
    professor: 'CET-GP',
    status: 'Active',

    // View Class Schedule Data:
    classId: 'CL-1',

    // Edit Class Schedule Data:
    scheduleInformation: [
      {
        classDay: 'Monday',
        startTime: '8:00 AM',
        endTime: '10:00 AM',
        room: 'GCA 301',
        meetingType: 'Sync',
      },
      {
        classDay: 'Wednesday',
        startTime: '6:00 PM',
        endTime: '9:00 PM',
        room: 'ComLab 3',
        meetingType: 'Async',
      },
    ],

    section: '1',
    classType: 'Lecture',

    widthDateRange: true,
    startDate: getRandomDate(),
    endDate: getRandomDate(),

    // slot information:
    maximumSlots: '50', // alloted slots
    enlistedSlots: '4',
    enrolledSlots: '30',
  },
];
