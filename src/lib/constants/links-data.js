import {
  Box,
  Calendar,
  GraduationCap,
  Mail,
  Presentation,
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
    path: '/student/account',
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
