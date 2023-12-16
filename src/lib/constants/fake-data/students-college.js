'use client';

import { getRandomDate } from '@/lib/utils';

export const fakeCollegeStudents = [
  {
    /*student 1 */
    // Personal Details
    studentNo: '2020-20212',
    firstName: 'John',
    middleName: 'Santos',
    lastName: 'Doe',
    nameExtension: 'Jr.',
    maidenName: 'Cruz',
    birthPlace: 'Manila',
    birthSex: 'Male',
    birthDate: getRandomDate(),
    genderIdentity: 'he/him',
    civilStatus: 'Single',
    phoneNum: '09123456789',

    // Student Terms
    entryAcadYear: '2023',
    studentType: 'Old',
    block: '1',
    college: 'College of Education',
    yearLevel: '2',
    program: 'BS Mechanical Engineering',
    emailAddress: 'john.doe@plm.edu.ph',
    regCode: 'Irregular',
    enrollmentStatus: 'Enlisted',
    scholarsticStatus: 'Not Paying',

    // Current Address Information
    cphoneNum: '09123456789',
    cstreetAddress: 'Block 1 Tondo Manila',
    cprovince: 'Marinduque',
    czipCode: '1400',

    // Permanent Address Information
    pphoneNum: '09123456789',
    pstreetAddress: 'Block 1 Tondo Manila',
    pprovince: 'Marinduque',
    pzipCode: '1400',
    addDropInfo: [
      {
        class: 'CSC 0411 - CS Thesis Writing 1',
        section: '1',
        schedule: 'Monday: 7:00 AM - 8:30 AM (Online)',
        credits: '2',
      },
      {
        class: 'CSC 0412 - Network and Communications (Lec)',
        section: '1',
        schedule: 'Friday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        class: 'CS Elective 2 (Lec)',
        section: '1',
        schedule: 'Friday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
      {
        class: 'CS Elective 2 (Lab)',
        section: '1',
        schedule: 'Saturday: 7:00 AM - 9:00 AM (F2F, CompLab 3)',
        credits: '2',
      },
      {
        class: 'CS Elective 3 (Lab)',
        section: '1',
        schedule: 'Monday: 7:00 AM - 8:30 AM (Online)',
        credits: '2',
      },
      {
        class: 'CS Elective 3 (Lec)',
        section: '1',
        schedule: 'Friday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        class: 'CS Elective 4 (Lec)',
        section: '1',
        schedule: 'Friday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
      {
        class: 'CS Elective 4 (Lab)',
        section: '1',
        schedule: 'Saturday: 7:00 AM - 9:00 AM (F2F, CompLab 3)',
        credits: '2',
      },
    ],
  },
  {
    /*student 2 */
    // Personal Details
    studentNo: '2020-20213',
    firstName: 'Jane',
    middleName: 'Cruz',
    lastName: 'Smith',
    nameExtension: 'N/A',
    maidenName: 'Bautista',
    birthPlace: 'Manila',
    birthSex: 'Female',
    birthDate: getRandomDate(),
    genderIdentity: 'she/her',
    civilStatus: 'Single',
    phoneNum: '09123456789',

    // Student Terms
    entryAcadYear: '2023',
    studentType: 'Old',
    block: '1',
    college: 'College of Education',
    yearLevel: '2',
    program: 'BS Accountancy',
    emailAddress: 'jane.cruz@plm.edu.ph',
    regCode: 'Irregular',
    enrollmentStatus: 'Enlisted',
    scholarsticStatus: 'Not Paying',

    // Current Address Information
    cphoneNum: '09123456789',
    cstreetAddress: 'Block 1 Tondo Manila',
    cprovince: 'Marinduque',
    czipCode: '1400',

    // Permanent Address Information
    pphoneNum: '09123456789',
    pstreetAddress: 'Block 1 Tondo Manila',
    pprovince: 'Marinduque',
    pzipCode: '1400',

    addDropInfo: [
      {
        class: 'CSC 0414.1-1 - CS Elective 3 (Lab)',
        section: '1',
        schedule: 'Monday: 10:00 AM - 12:00 PM (Online)',
        credits: '2',
      },
      {
        class: 'CSC 0414-1 - CS Elective 3 (Lec)',
        section: '1',
        schedule: 'Thursday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        class: 'CSC 0312- 1 - Programming Language (Lec)',
        section: '1',
        schedule: 'Friday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
    ],
  },
  {
    /* student 3 */
    // Personal Info
    studentNo: '2020-20214',
    firstName: 'Alex',
    middleName: 'Batumbakal',
    lastName: 'Johnson',
    nameExtension: 'Jr.',
    maidenName: 'Cruz',
    birthPlace: 'Manila',
    birthSex: 'Male',
    birthDate: getRandomDate(),
    genderIdentity: 'she/her',
    civilStatus: 'Single',
    phoneNum: '09123456789',

    // Student Terms
    entryAcadYear: '2023',
    studentType: 'Old',
    block: '1',
    college: 'College of Education',
    yearLevel: '2',
    program: 'BS Civil Engineering',
    emailAddress: 'alex.batumbakal@plm.edu.ph',
    regCode: 'Irregular',
    enrollmentStatus: 'Enlisted',
    scholarsticStatus: 'Not Paying',

    // Current Address Information
    cphoneNum: '09123456789',
    cstreetAddress: 'Block 1 Tondo Manila',
    cprovince: 'Marinduque',
    czipCode: '1400',

    // Permanent Address Information
    pphoneNum: '09123456789',
    pstreetAddress: 'Block 1 Tondo Manila',
    pprovince: 'Marinduque',
    pzipCode: '1400',

    addDropInfo: [
      {
        class: 'CSC 0312.1- 1 - Programming Language (Lab)',
        section: '3',
        schedule: 'Monday: 10:00 AM - 12:00 PM (Online)',
        credits: '2',
      },
      {
        class: 'CSC 0322-1 - Compiler Design (Lec)',
        section: '4',
        schedule: 'Thursday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        class: 'CSC 0322.1-1 - Compiler Design (Lab)',
        section: '1',
        schedule: 'Saturday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
    ],
  },
  {
    // Personal Info
    studentNo: '2020-20215',
    firstName: 'Emily',
    middleName: 'Quizon',
    lastName: 'Davis',
    program: 'BS Accountancy',
    nameExtension: 'N/A',
    maidenName: 'Cruz',
    birthPlace: 'Manila',
    birthSex: 'Female',
    birthDate: getRandomDate(),
    genderIdentity: 'she/her',
    civilStatus: 'Single',
    phoneNum: '09123456789',

    // Student Terms
    entryAcadYear: '2023',
    studentType: 'Old',
    block: '1',
    college: 'College of Education',
    yearLevel: '2',
    emailAddress: 'jane.cruz@plm.edu.ph',
    regCode: 'Regular',
    enrollmentStatus: 'Not Enlisted',
    scholarsticStatus: 'Not Paying',

    // Current Address Information
    cphoneNum: '09123456789',
    cstreetAddress: 'Block 1 Tondo Manila',
    cprovince: 'Marinduque',
    czipCode: '1400',

    // Permanent Address Information
    pphoneNum: '09123456789',
    pstreetAddress: 'Block 1 Tondo Manila',
    pprovince: 'Marinduque',
    pzipCode: '1400',

    addDropInfo: [
      {
        class: 'CSC 0312.1- 1 - Programming Language (Lab)',
        section: '3',
        schedule: 'Monday: 10:00 AM - 12:00 PM (Online)',
        credits: '2',
      },
      {
        class: 'CSC 0322-1 - Compiler Design (Lec)',
        section: '4',
        schedule: 'Thursday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        class: 'CSC 0322.1-1 - Compiler Design (Lab)',
        section: '1',
        schedule: 'Saturday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
    ],
  },
  {
    // Personal Info
    studentNo: '2020-20216',
    firstName: 'Chris',
    middleName: 'Bautista',
    lastName: 'Wilson',
    program: 'BS Tourism Management',
    nameExtension: 'N/A',
    maidenName: 'Cruz',
    birthPlace: 'Manila',
    birthSex: 'Male',
    birthDate: getRandomDate(),
    genderIdentity: 'she/her',
    civilStatus: 'Single',
    phoneNum: '09123456789',

    // Student Terms
    entryAcadYear: '2023',
    studentType: 'Old',
    block: '1',
    college: 'College of Education',
    yearLevel: '2',
    emailAddress: 'chris.bautista@plm.edu.ph',
    regCode: 'Regular',
    enrollmentStatus: 'Enlisted',
    scholarsticStatus: 'Not Paying',

    // Current Address Information
    cphoneNum: '09123456789',
    cstreetAddress: 'Block 1 Tondo Manila',
    cprovince: 'Marinduque',
    czipCode: '1400',

    // Permanent Address Information
    pphoneNum: '09123456789',
    pstreetAddress: 'Block 1 Tondo Manila',
    pprovince: 'Marinduque',
    pzipCode: '1400',

    addDropInfo: [
      {
        class: 'CSC 0321-1 - Software Engineering (Lec)',
        section: '3',
        schedule: 'Monday: 10:00 AM - 12:00 PM (Online)',
        credits: '2',
      },
      {
        class: 'CSC 0322-1 - Compiler Design (Lec)',
        section: '4',
        schedule: 'Thursday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        class: 'CSC 0321.1-1 - Software Engineering (Lab)',
        section: '1',
        schedule: 'Saturday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
    ],
  },
];
