import {
  Activity,
  ArrowLeftRight,
  ArrowUpDown,
  Book,
  BookOpenText,
  BookText,
  Box,
  Calendar,
  File,
  FileSignature,
  FileSpreadsheet,
  GraduationCap,
  ListTree,
  Mail,
  PencilLine,
  PersonStanding,
  Presentation,
  User,
  User2,
  UserCog,
  Users2,
  Warehouse,
} from 'lucide-react';

// data for student links: Home, Enrollment, Information, Grades, Account
export const linksStudents = [
  {
    label: 'Home',
    path: '/student/home',
  },
  {
    label: 'Enrollment',
    path: '/student/enrollment',
    subLinks: [
      {
        label: 'Regular Enrollment',
        path: '/student/enrollment/regular-enrollment',
      },
      {
        label: 'Irregular Enrollment',
        path: '/student/enrollment/irregular-enrollment',
      },
      {
        label: 'PE Enrollment',
        path: '/student/enrollment/pe-enrollment',
      },
      {
        label: 'NSTP Enrollment',
        path: '/student/enrollment/nstp-enrollment',
      },
    ],
  },
  {
    label: 'Information',
    path: '/student/information',
  },
  {
    label: 'Grades',
    path: '/student/grades',
  },
  {
    label: 'Account',
    path: '/account',
    subLinks: [
      {
        label: 'Change Password',
        path: 'https://account.activedirectory.windowsazure.com/ChangePassword.aspx',
      },
      { label: 'Sign out', path: '#' },
    ],
  },
];

export const linksGradStudents = [
  {
    label: 'Home',
    path: '/student-grad/home',
  },
  {
    label: 'Enrollment',
    path: '/student-grad/enrollment',
  },

  {
    label: 'Grades',
    path: '/student-grad/grades',
  },
  {
    label: 'Account',
    path: '/student-grad/account',
    subLinks: [
      {
        label: 'Change Password',
        path: 'https://account.activedirectory.windowsazure.com/ChangePassword.aspx',
      },
      { label: 'Sign out', path: '#' },
    ],
  },
];

export const adminSidebarLinks = [
  {
    icon: <Calendar className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Activities',
    path: '/admin/activities',
  },
  {
    icon: <User2 className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Users',
    path: '/admin/users',
  },
  {
    icon: <Presentation className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Meeting',
    path: '/admin/meeting',
  },
  {
    icon: <Box className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Block',
    path: '/admin/block',
  },
  {
    icon: <GraduationCap className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'College',
    path: '/admin/college',
  },
  {
    icon: <Mail className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Email',
    path: '/admin/email',
  },
  {
    icon: <User2 className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Students',
    path: '/admin/students',
  },
];

export const facultySidebarLinks = [
  {
    icon: <BookText className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Teaching',
    path: '/faculty/teaching',
  },
  {
    icon: <FileSpreadsheet className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Load Assignment',
    path: '/faculty/load-assignment',
  },
  {
    icon: <FileSignature className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Encoding of Grades',
    path: '/faculty/encoding-grades',
  },
  {
    icon: <GraduationCap className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'View Grades',
    path: '/faculty/view-grades',
  },
  {
    icon: <Users2 className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Previous Class',
    path: '/faculty/previous-class',
  },
  {
    icon: <User2 className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Faculty Profile',
    path: '/faculty/profile',
  },
];

export const collegeGradLinks = [
  {
    icon: <Activity className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Activities',
    path: '/college-grad/activities',
  },
  {
    icon: <PersonStanding className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Students',
    path: '/college-grad/students',
  },
  {
    icon: <Calendar className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Management',
    path: '/college-grad/management',
    subContent: [
      {
        text: 'Faculty',
        path: '/college-grad/management/faculty',
        icon: <User className='mr-0 h-4 w-4 md:mr-2' />,
      },
      {
        text: 'Class',
        path: '/college-grad/management/class',
        icon: <PencilLine className='mr-0 h-4 w-4 md:mr-2' />,
      },
      {
        text: 'Subject',
        path: '/college-grad/management/subject',
        icon: <BookOpenText className='mr-0 h-4 w-4 md:mr-2' />,
      },
      {
        text: 'Curriculum',
        path: '/college-grad/management/curriculum',
        icon: <BookText className='mr-0 h-4 w-4 md:mr-2' />,
      },
    ],
  },
  {
    icon: <ArrowLeftRight className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Transactions',
    path: '/college-grad/transactions',
    subContent: [
      {
        text: 'Add/Drop',
        path: '/college-grad/transactions/add-drop',
        icon: <ArrowUpDown className='mr-0 h-4 w-4 md:mr-2' />,
      },
      {
        text: (
          <span>
            Teaching
            <br />
            Assignment
          </span>
        ),
        path: '/college-grad/transactions/teaching-assignment',
        icon: <UserCog className='mr-0 h-4 w-4 md:mr-2' />,
      },
    ],
  },
];

export const collegeLinks = [
  {
    icon: <Book className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Subjects',
    path: '/college/subjects',
  },
  {
    icon: <ListTree className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Sections',
    path: '/college/sections',
  },
  {
    icon: <Calendar className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Schedule',
    path: '/college/schedule',
  },
  {
    icon: <PersonStanding className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Students',
    path: '/college/students',
  },
  {
    icon: <Warehouse className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Rooms',
    path: '/college/rooms',
  },
  {
    icon: <File className='mr-0 h-4 w-4 md:mr-2' />,
    text: (
      <span>
        Teaching
        <br />
        Assignment
      </span>
    ),
    path: '/college/teaching-assignments',
  },
];
