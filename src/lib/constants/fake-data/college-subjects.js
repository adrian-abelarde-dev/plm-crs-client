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
