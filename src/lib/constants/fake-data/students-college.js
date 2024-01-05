'use client';

import { getRandomDate } from '@/lib/utils';

export const fakeCollegeStudents = [
  {

    /*Student 1*/

    // Personal Details
    aySem: '20222',
    academicYear: '2022-2023',
    semester: '2',
    studentNo: '2020-20212',
    firstName: 'John',
    middleName: 'Santos',
    lastName: 'Doe',
    fullName: 'Doe, John Santos',
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
    yearBlock: '2-1',
    program: 'Bachelor of Science in Tourism Management',
    emailAddress: 'john.doe@plm.edu.ph',
    regCode: 'Irregular',
    enrollmentStatus: 'Not Enlisted',
    scholasticStatus: 'Paying',

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

    // View Student Info
    studentId: '1001',


    addDropClassList: [
      {
        subject: 'CSC 0411 - CS Thesis Writing 1',
        section: '1',
        schedule: 'Monday: 7:00 AM - 8:30 AM (Online)',
        credits: '2',
      },
      {
        subject: 'CSC 0412 - Network and Communications (Lec)',
        section: '1',
        schedule: 'Friday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        subject: 'CS Elective 2 (Lec)',
        section: '1',
        schedule: 'Friday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
      {
        subject: 'CS Elective 2 (Lab)',
        section: '1',
        schedule: 'Saturday: 7:00 AM - 9:00 AM (F2F, CompLab 3)',
        credits: '2',
      },
      {
        subject: 'CS Elective 3 (Lab)',
        section: '1',
        schedule: 'Monday: 7:00 AM - 8:30 AM (Online)',
        credits: '2',
      },
      {
        subject: 'CS Elective 3 (Lec)',
        section: '1',
        schedule: 'Friday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        subject: 'CS Elective 4 (Lec)',
        section: '1',
        schedule: 'Friday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
      {
        subject: 'CS Elective 4 (Lab)',
        section: '1',
        schedule: 'Saturday: 7:00 AM - 9:00 AM (F2F, CompLab 3)',
        credits: '2',
      },
    ],
  },

  {
    /*Student 2*/
    // Personal Details
    aySem: '20231',
    academicYear: '2023',
    semester: '1',
    studentNo: '2020-20213',
    firstName: 'Jane',
    middleName: 'Cruz',
    lastName: 'Smith',
    fullName: 'Smith, Jane Cruz',
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
    yearBlock: '2-1',
    program: 'Bachelor of Science in Accountancy',
    emailAddress: 'jane.cruz@plm.edu.ph',
    regCode: 'Irregular',
    enrollmentStatus: 'Enrolled',
    scholasticStatus: 'Paying',

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

    addDropClassList: [
      {
        subject: 'CSC 0414.1 - CS Elective 3 (Lab)',
        section: '1',
        schedule: 'Monday: 10:00 AM - 12:00 PM (Online)',
        credits: '2',
      },
      {
        subject: 'CSC 0414-1 - CS Elective 3 (Lec)',
        section: '1',
        schedule: 'Thursday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        subject: 'CSC 0312-1 - Programming Language (Lec)',
        section: '1',
        schedule: 'Friday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
    ],

    // View Student Info
    studentId: '1002',
  },

  {

    /*Student 3*/
    // Personal Info
    aySem: '20231',
    academicYear: '2023-2024',
    semester: '1',
    studentNo: '2020-20214',
    firstName: 'Alex',
    middleName: 'Batumbakal',
    lastName: 'Johnson',
    fullName: 'Johnson, Alex Batumbakal',
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
    yearBlock: '2-1',
    program: 'Bachelor of Science in Civil Engineering',
    emailAddress: 'alex.batumbakal@plm.edu.ph',
    regCode: 'Irregular',
    enrollmentStatus: 'Enlisted',
    scholasticStatus: 'Paying',

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

    // View Student Info
    studentId: '1003',
  },
  {
    /*Student 4*/

    // Personal Info
    aySem: '20222',
    academicYear: '2022-2023',
    semester: '2',
    studentNo: '2020-20215',
    firstName: 'Emily',
    middleName: 'Quizon',
    lastName: 'Davis',
    fullName: 'Davis, Emily Quizon',
    program: 'Bachelor of Science in Accountancy',
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
    yearBlock: '2-1',
    emailAddress: 'emily.quizon@plm.edu.ph',
    regCode: 'Regular',
    enrollmentStatus: 'Not Enlisted',
    scholasticStatus: 'Paying',

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

    addDropClassList: [
      {
        subject: 'CSC 0312.1 - Programming Language (Lab)',
        section: '3',
        schedule: 'Monday: 10:00 AM - 12:00 PM (Online)',
        credits: '2',
      },
      {
        subject: 'CSC 0322 - Compiler Design (Lec)',
        section: '4',
        schedule: 'Thursday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        subject: 'CSC 0322.1 - Compiler Design (Lab)',
        section: '1',
        schedule: 'Saturday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
    ],
    // View Student Info
    studentId: '1004',
  },
  {
    /*Student 5*/
    // Personal Info
    aySem: '20231',
    academicYear: '2023',
    semester: '1',
    studentNo: '2020-20216',
    firstName: 'Chris',
    middleName: 'Bautista',
    lastName: 'Wilson',
    fullName: 'Wilson, Chris Bautista',
    program: 'Bachelor of Arts in Political Science',
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
    yearBlock: '2-1',
    emailAddress: 'chris.bautista@plm.edu.ph',
    regCode: 'Regular',
    enrollmentStatus: 'Enlisted',
    scholasticStatus: 'Paying',

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

    addDropClassList: [
      {
        subject: 'CSC 0312.1 - Programming Language (Lab)',
        section: '3',
        schedule: 'Monday: 10:00 AM - 12:00 PM (Online)',
        credits: '2',
      },
      {
        subject: 'CSC 0322 - Compiler Design (Lec)',
        section: '4',
        schedule: 'Thursday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        subject: 'CSC 0322.1 - Compiler Design (Lab)',
        section: '1',
        schedule: 'Saturday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
    ],

    // View Student Info
    studentId: '1005',
  },
  {
    /*Student 6*/
    // Personal Details
    aySem: '20231',
    academicYear: '2023',
    semester: '1',
    studentNo: '2020-20217',
    firstName: 'Alex',
    middleName: 'Batumbakal',
    lastName: 'Johnson',
    fullName: 'Johnson, Alex Batumbakal',
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
    block: '2',
    college: 'College of Engineering',
    yearLevel: '3',
    yearBlock: '3-2',
    program: 'Bachelor of Science in Electrical Engineering',
    emailAddress: 'alex.johnson@plm.edu.ph',
    regCode: 'Regular',
    enrollmentStatus: 'Enlisted',
    scholasticStatus: 'Paying',

    // Current Address Information
    cphoneNum: '09123456789',
    cstreetAddress: 'Block 2 Sampaloc Manila',
    cprovince: 'Quezon',
    czipCode: '1500',

    // Permanent Address Information
    pphoneNum: '09123456789',
    pstreetAddress: 'Block 2 Sampaloc Manila',
    pprovince: 'Quezon',
    pzipCode: '1500',

    // View Student Info
    studentId: '1006',
  },
  {
    /*Student 7*/
    // Personal Info
    aySem: '20222',
    academicYear: '2022-2023',
    semester: '2',
    studentNo: '2020-20218',
    firstName: 'Emily',
    middleName: 'Quizon',
    lastName: 'Davis',
    fullName: 'Davis, Emily Quizon',
    program: 'Bachelor of Science in Accountancy',
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
    yearBlock: '2-1',
    emailAddress: 'emily.davis@plm.edu.ph',
    regCode: 'Regular',
    enrollmentStatus: 'Not Enlisted',
    scholasticStatus: 'Paying',

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

    // View Student Info
    studentId: '1007',
  },
  {
    /*Student 8*/
    // Personal Info
    aySem: '20231',
    academicYear: '2023',
    semester: '1',
    studentNo: '2020-20219',
    firstName: 'Chris',
    middleName: 'Bautista',
    lastName: 'Wilson',
    fullName: 'Wilson, Chris Bautista',
    program: 'Bachelor of Arts in Political Science',
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
    studentType: 'New',
    block: '3',
    college: 'College of Arts and Sciences',
    yearLevel: '1',
    yearBlock: '1-3',
    emailAddress: 'chris.wilson@plm.edu.ph',
    regCode: 'Regular',
    enrollmentStatus: 'Enlisted',
    scholasticStatus: 'Paying',

    // Current Address Information
    cphoneNum: '09123456789',
    cstreetAddress: 'Block 3 Sampaloc Manila',
    cprovince: 'Quezon',
    czipCode: '1500',

    // Permanent Address Information
    pphoneNum: '09123456789',
    pstreetAddress: 'Block 3 Sampaloc Manila',
    pprovince: 'Quezon',
    pzipCode: '1500',

    addDropClassList: [
      {
        subject: 'CSC 0321 - Software Engineering (Lec)',
        section: '3',
        schedule: 'Monday: 10:00 AM - 12:00 PM (Online)',
        credits: '2',
      },
      {
        subject: 'CSC 0322 - Compiler Design (Lec)',
        section: '4',
        schedule: 'Thursday: 9:30 AM - 11:30 AM (F2F, Field)',
        credits: '2',
      },
      {
        subject: 'CSC 0321.1 - Software Engineering (Lab)',
        section: '1',
        schedule: 'Saturday: 7:00 AM - 9:00 AM (Online)',
        credits: '2',
      },
    ],

    // View Student Info
    studentId: '1008',
  },
  {
    /*Student 9*/
    // Personal Info
    aySem: '20231',
    academicYear: '2023',
    semester: '1',
    studentNo: '2020-20220',
    firstName: 'Michael',
    middleName: 'Gonzales',
    lastName: 'Rodriguez',
    fullName: 'Rodriguez, Michael Gonzales',
    program: 'Bachelor of Science in Computer Science',
    nameExtension: 'N/A',
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
    block: '2',
    college: 'College of Engineering',
    yearLevel: '3',
    yearBlock: '3-2',
    emailAddress: 'michael.rodriguez@plm.edu.ph',
    regCode: 'Regular',
    enrollmentStatus: 'Enlisted',
    scholasticStatus: 'Paying',

    // Current Address Information
    cphoneNum: '09123456789',
    cstreetAddress: 'Block 2 Sampaloc Manila',
    cprovince: 'Quezon',
    czipCode: '1500',

    // Permanent Address Information
    pphoneNum: '09123456789',
    pstreetAddress: 'Block 2 Sampaloc Manila',
    pprovince: 'Quezon',
    pzipCode: '1500',

    addDropClassList: [
      {
        subject: 'CSC 0323 - Database Management Systems (Lec)',
        section: '2',
        schedule: 'Wednesday: 2:00 PM - 4:00 PM (F2F, subjectroom)',
        credits: '3',
      },
      {
        subject: 'CSC 0323 - Database Management Systems (Lab)',
        section: '5',
        schedule: 'Friday: 1:00 PM - 3:00 PM (Online)',
        credits: '3',
      },
      {
        subject: 'CSC 0324 - Data Structures (Lec)',
        section: '1',
        schedule: 'Tuesday: 8:00 AM - 10:00 AM (F2F, subjectroom)',
        credits: '3',
      },
    ],

    // View Student Info
    studentId: '1009',
  },
  {
    /*Student 10*/
    // Personal Info
    aySem: '20222',
    academicYear: '2022-2023',
    semester: '2',
    studentNo: '2020-20221',
    firstName: 'Angelica',
    middleName: 'Reyes',
    lastName: 'Garcia',
    fullName: 'Garcia, Angelica Reyes',
    program: 'Bachelor of Arts in Communication',
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
    studentType: 'Returnee',
    block: '3',
    college: 'College of Communication',
    yearLevel: '3',
    yearBlock: '3-3',
    emailAddress: 'angelica.garcia@plm.edu.ph',
    regCode: 'Irregular',
    enrollmentStatus: 'Enlisted',
    scholasticStatus: 'Paying',

    // Current Address Information
    cphoneNum: '09123456789',
    cstreetAddress: 'Block 3 Sampaloc Manila',
    cprovince: 'Quezon',
    czipCode: '1500',

    // Permanent Address Information
    pphoneNum: '09123456789',

    pstreetAddress: 'Block 3 Sampaloc Manila',
    pprovince: 'Quezon',
    pzipCode: '1500',

    addDropClassList: [
      {
        subject: 'CSC 0325.2 - Advanced Web Development (Lec)',
        section: '2',
        schedule: 'Wednesday: 3:00 PM - 5:00 PM (F2F, subjectroom)',
        credits: '3',
      },
      {
        subject: 'CSC 0325.2 - Advanced Web Development (Lab)',
        section: '5',
        schedule: 'Friday: 10:00 AM - 12:00 PM (Online)',
        credits: '3',
      },
      {
        subject: 'CSC 0326 - Operating Systems (Lec)',
        section: '1',
        schedule: 'Tuesday: 1:00 PM - 3:00 PM (F2F, subjectroom)',
        credits: '3',
      },
      {
        subject: 'CSC 0326.1 - Operating Systems (Lab)',
        section: '3',
        schedule: 'Thursday: 4:00 PM - 6:00 PM (Online)',
        credits: '3',
      },
      {
        subject: 'CSC 0327 - Mobile App Development (Lec)',
        section: '4',
        schedule: 'Monday: 1:00 PM - 3:00 PM (F2F, subjectroom)',
        credits: '3',
      },
    ],

    // View Student Info
    studentId: '1010',
  },
];