import { Archive, EditIcon, Plus, View } from 'lucide-react';

export const fakeCollegeStudents = [
  {
    studentNumber: '2018-00001',
    firstName: 'John',
    middleName: 'Doe',
    lastName: 'Doe',
    registrationCode: 'LOA',
  },
  {
    studentNumber: '2018-00002',
    firstName: 'Jane',
    middleName: 'Doe',
    lastName: 'Doe',
    registrationCode: 'Regular',
  },
  {
    studentNumber: '2018-00003',
    firstName: 'Jane',
    middleName: 'Doe',
    lastName: 'Doe',
    registrationCode: 'Regular',
  },
  {
    studentNumber: '2018-00004',
    firstName: 'Jane',
    middleName: 'Doe',
    lastName: 'Doe',
    registrationCode: 'Regular',
  },
  {
    studentNumber: '2018-00005',
    firstName: 'Jane',
    middleName: 'Doe',
    lastName: 'Doe',
    registrationCode: 'Regular',
  },
];

export const fakeCollegeStudentsRowActions = [
  {
    label: 'View Profile',
    icon: (
      <View className='mr-0 h-4 w-4 md:mr-2 text-[#71707b]' strokeWidth={3} />
    ),
  },
  {
    label: 'Edit',
    icon: (
      <EditIcon
        className='mr-0 h-4 w-4 md:mr-2 text-[#71707b]'
        strokeWidth={3}
      />
    ),
  },
  {
    label: 'Archive',
    icon: (
      <Archive
        className='mr-0 h-4 w-4 md:mr-2 text-[#71707b]'
        strokeWidth={3}
      />
    ),
  },
  {
    label: 'Add/Drop',
    icon: (
      <Plus className='mr-0 h-4 w-4 md:mr-2 text-[#71707b]' strokeWidth={3} />
    ),
  },
];

export const template = [
  {
    accessorKey: 'studentNumber',
    id: 'email',
    header: 'Email',
    filterVariant: 'autocomplete',
  },
  {
    accessorKey: 'firstName',
    id: 'firstName',
    header: 'First Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'middleName',
    id: 'middlName',
    header: 'Middle Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'lastName',
    id: 'lastName',
    header: 'Last Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'registrationCode',
    id: 'registrationCode',
    header: 'Registration Code',
    filterVariant: 'select',
  },
];