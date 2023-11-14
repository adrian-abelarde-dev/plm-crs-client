import { getRandomDate } from '@/lib/utils';

export const collegeClassManagementData = [
  {
    // Table Data
    subjectCode: 'GYM-123',
    subjectName: 'Engineering Research and Development',
    yearTerm: '2021-2022 1st Term',
    professor: 'Dr. Sheldon Cooper',
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
  {
    subjectCode: 'COMP-101',
    subjectName: 'Introduction to Computer Science',
    yearTerm: '2022-2023 1st Term',
    professor: 'Prof. John Doe',
    status: 'Active',

    classId: 'CL-1',

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

    maximumSlots: '50',
    enlistedSlots: '4',
    enrolledSlots: '30',
  },
  {
    subjectCode: 'MATH-202',
    subjectName: 'Calculus II',
    yearTerm: '2022-2023 1st Term',
    professor: 'Dr. Jane Smith',
    status: 'Closed',

    classId: 'CL-2',

    scheduleInformation: [
      {
        classDay: 'Tuesday',
        startTime: '10:00 AM',
        endTime: '12:00 PM',
        room: 'Math Lab',
        meetingType: 'Sync',
      },
      {
        classDay: 'Thursday',
        startTime: '2:00 PM',
        endTime: '5:00 PM',
        room: 'GCA 203',
        meetingType: 'Async',
      },
    ],

    section: '2',
    classType: 'Lecture',

    widthDateRange: true,
    startDate: getRandomDate(),
    endDate: getRandomDate(),

    maximumSlots: '40',
    enlistedSlots: '15',
    enrolledSlots: '25',
  },
];
