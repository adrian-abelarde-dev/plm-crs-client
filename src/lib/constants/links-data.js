import {
  Activity,
  ArrowLeftRight,
  ArrowUpDown,
  BookOpenText,
  BookText,
  Box,
  Calendar,
  GraduationCap,
  Mail,
  PencilLine,
  PersonStanding,
  Presentation,
  User,
  User2,
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
    icon: <Warehouse className='mr-0 h-4 w-4 md:mr-2' />,
    text: 'Rooms',
    path: '/admin/rooms',
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
        text: 'Teaching Assignment',
        path: '/college-grad/transactions/teaching-assignment',
        // icon: <UserCog className='mr-0 h-4 w-4 md:mr-2' />,
      },
    ],
  },
];
