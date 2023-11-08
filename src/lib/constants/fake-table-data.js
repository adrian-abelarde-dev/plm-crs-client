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

export const fakeGradClasses = [
  {
    classId: 'TW-101',
    className: 'Thesis Writing',
    schedule: 'MWF 8:00 AM - 9:00 AM',
    room: 'Room 101',
  },
  {
    classId: 'TW-101',
    className: 'Thesis Writing',
    schedule: 'MWF 8:00 AM - 9:00 AM',
    room: 'Room 101',
  },
  {
    classId: 'TW-101',
    className: 'Thesis Writing',
    schedule: 'MWF 8:00 AM - 9:00 AM',
    room: 'Room 101',
  },
  {
    classId: 'TW-101',
    className: 'Thesis Writing',
    schedule: 'MWF 8:00 AM - 9:00 AM',
    room: 'Room 101',
  },
  {
    classId: 'TW-101',
    className: 'Thesis Writing',
    schedule: 'MWF 8:00 AM - 9:00 AM',
    room: 'Room 101',
  },
];

export const fakeGradPaymentHistories = [
  {
    paidInstallment: '1st Payment',
    modeOfPayment: 'GCash',
    yearTerm: '20231',
    datePaid: '09/19/2023',
    paidAmount: '₱ 39,999.00',
    excess: '₱ 0.00',
    status: 'Paid',
  },
  {
    paidInstallment: '2nd Payment',
    modeOfPayment: 'Maya',
    yearTerm: '20231',
    datePaid: '09/19/2023',
    paidAmount: '₱ 39,999.00',
    excess: '₱ 0.00',
    status: 'Paid',
  },
  {
    paidInstallment: '3rd Payment',
    modeOfPayment: 'GCash',
    yearTerm: '20231',
    datePaid: '09/19/2023',
    paidAmount: '₱ 39,999.00',
    excess: '₱ 0.00',
    status: 'Paid',
  },
  {
    paidInstallment: '4th Payment',
    modeOfPayment: 'Maya',
    yearTerm: '20231',
    datePaid: '09/19/2023',
    paidAmount: '₱ 39,999.00',
    excess: '₱ 0.00',
    status: 'Paid',
  },
  {
    paidInstallment: '5th Payment',
    modeOfPayment: 'GCash',
    yearTerm: '20231',
    datePaid: '09/19/2023',
    paidAmount: '₱ 39,999.00',
    excess: '₱ 0.00',
    status: 'Paid',
  },
];

export const fakeGradAssessmentHistories = [
  {
    yearTerm: '20231',
    totalTuition: '₱ 39,999.00',
    paidAmount: '₱ 39,999.00',
    balance: '₱ 0.00',
  },
  {
    yearTerm: '20232',
    totalTuition: '₱ 39,999.00',
    paidAmount: '₱ 39,999.00',
    balance: '₱ 0.00',
  },
  {
    yearTerm: '20233',
    totalTuition: '₱ 39,999.00',
    paidAmount: '₱ 39,999.00',
    balance: '₱ 0.00',
  },
  {
    yearTerm: '20234',
    totalTuition: '₱ 39,999.00',
    paidAmount: '₱ 39,999.00',
    balance: '₱ 0.00',
  },
  {
    yearTerm: '20235',
    totalTuition: '₱ 39,999.00',
    paidAmount: '₱ 39,999.00',
    balance: '₱ 0.00',
  },
];

// Templates

export const gradAssessmentHistoryTemplate = [
  // yearTerm, totalTuition, paidAmount, balance
  {
    accessorKey: 'yearTerm',
    id: 'yearTerm',
    header: 'Year/Term',
    filterVariant: 'multi-select',
  },
  {
    accessorKey: 'totalTuition',
    id: 'totalTuition',
    header: 'Total Tuition',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'paidAmount',
    id: 'paidAmount',
    header: 'Paid Amount',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'balance',
    id: 'balance',
    header: 'Balance',
    filterVariant: 'fuzzy',
  },
];

export const gradPaymentHistoryTemplate = [
  {
    accessorKey: 'paidInstallment',
    id: 'paidInstallment',
    header: 'Paid/Installment',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'modeOfPayment',
    id: 'modeOfPayment',
    header: 'Mode of Payment',
    filterVariant: 'multi-select',
  },
  {
    accessorKey: 'yearTerm',
    id: 'yearTerm',
    header: 'Year/Term',
    filterVariant: 'multi-select',
  },
  {
    accessorKey: 'datePaid',
    id: 'datePaid',
    header: 'Date Paid',
    filterVariant: 'date',
  },
  {
    accessorKey: 'paidAmount',
    id: 'paidAmount',
    header: 'Paid Amount',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'excess',
    id: 'excess',
    header: 'Excess',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'status',
    id: 'status',
    header: 'Status',
    filterVariant: 'select',
  },
];

export const gradClassesTemplate = [
  {
    accessorKey: 'classId',
    id: 'classId',
    header: 'Class/Section',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'className',
    id: 'className',
    header: 'Class Title',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'schedule',
    id: 'schedule',
    header: 'Schedule',
    filterVariant: 'date',
  },
  {
    accessorKey: 'room',
    id: 'room',
    header: 'Room',
    filterVariant: 'fuzzy',
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
