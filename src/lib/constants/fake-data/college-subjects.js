'use client';

import { Edit, Trash } from 'lucide-react';

export const fakeSubjectRowActions = [
  {
    label: 'Edit Subject',
    icon: <Edit className='h-4 w-4 text-zinc-400' />,
  },
  {
    label: 'Delete Subject',
    icon: <Trash className='h-4 w-4' />,
  },
];

export const fakeSubjects = [
  {
    subjectName: 'CS Elective 2',
    underGrad: 'Undergrad',
    subjectType: 'Synchronous',
    activeStatus: 'Active',
    dateCreated: 'September 23, 2023',
  },
  {
    subjectName: 'CS Elective 1',
    underGrad: 'Undergrad',
    subjectType: 'Asynchronous',
    activeStatus: 'Inactive',
    dateCreated: 'October 1, 2023',
  },
  {
    subjectName: 'Database Systems',
    underGrad: 'Graduate',
    subjectType: 'Synchronous',
    activeStatus: 'Active',
    dateCreated: 'November 12, 2023',
  },
  {
    subjectName: 'Operating Systems',
    underGrad: 'Graduate',
    subjectType: 'Asynchronous',
    activeStatus: 'Inactive',
    dateCreated: 'December 5, 2023',
  },
  {
    subjectName: 'Data Structures and Algorithms',
    underGrad: 'Undergrad',
    subjectType: 'Synchronous',
    activeStatus: 'Active',
    dateCreated: 'January 10, 2024',
  },
  {
    subjectName: 'Computer Networks',
    underGrad: 'Graduate',
    subjectType: 'Asynchronous',
    activeStatus: 'Inactive',
    dateCreated: 'February 15, 2024',
  },
  {
    subjectName: 'Software Engineering',
    underGrad: 'Undergrad',
    subjectType: 'Synchronous',
    activeStatus: 'Active',
    dateCreated: 'March 20, 2024',
  },
  {
    subjectName: 'Artificial Intelligence',
    underGrad: 'Graduate',
    subjectType: 'Asynchronous',
    activeStatus: 'Inactive',
    dateCreated: 'April 25, 2024',
  },
  {
    subjectName: 'Computer Architecture',
    underGrad: 'Undergrad',
    subjectType: 'Synchronous',
    activeStatus: 'Active',
    dateCreated: 'May 30, 2024',
  },
  {
    subjectName: 'Computer Graphics',
    underGrad: 'Graduate',
    subjectType: 'Asynchronous',
    activeStatus: 'Inactive',
    dateCreated: 'June 15, 2024',
  },
];

export const collegeSubjectName = [
  {
    label: 'Synchronization and Concurrency',
    value: 'CSE2SYNC202310001',
  },
  {
    label: 'Database Management Systems',
    value: 'CSE2DBMS202310002',
  },
  {
    label: 'Operating Systems',
    value: 'CSE2OS202310003',
  },
  {
    label: 'Data Structures and Algorithms',
    value: 'CSE2DSA202310004',
  },
  {
    label: 'Computer Networks',
    value: 'CSE2CN202310005',
  },
  {
    label: 'Software Engineering',
    value: 'CSE2SE202310006',
  },
  {
    label: 'Artificial Intelligence',
    value: 'CSE2AI202310007',
  },
  {
    label: 'Machine Learning',
    value: 'CSE2ML202310008',
  },
  {
    label: 'Web Development',
    value: 'CSE2WD202310009',
  },
  {
    label: 'Mobile Application Development',
    value: 'CSE2MAD202310010',
  },
];

export const collegeSubjectType = [
  {
    label: 'Face-to-Face',
    value: 'f2f',
  },
  {
    label: 'Online',
    value: 'online',
  },
  {
    label: 'Lecture',
    value: 'lecture',
  },
  {
    label: 'Lab',
    value: 'lab',
  },
];

export const collegeActiveStatus = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];
