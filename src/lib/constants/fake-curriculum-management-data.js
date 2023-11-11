import { Badge } from '@/components/ui/badge';

import { cn } from '../utils';

// List of Curriculums
export const collegeGradCurriculumManagementTemplate = [
  {
    accessorKey: 'courseCode',
    id: 'courseCode',
    header: 'Course Code',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'courseTitle',
    id: 'courseTitle',
    header: 'Course Title',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'preRequisites',
    id: 'preRequisites',
    header: 'Pre-Requisites',
    filterVariant: 'fuzzy',
    Cell: ({ value }) => {
      return (
        <Badge
          className={cn(
            value
              ? 'bg-green-500 text-green-500'
              : 'bg-yellow-500 text-yellow-500',
          )}
        >
          View Pre-Requisites
        </Badge>
      );
    },
  },
];

export const collegeGradCurriculumManagementData = [
  {
    courseCode: 'GEM-500',
    courseTitle: 'Juan Dela Cruz',
    preRequisites: ['GEM-100', 'GEM-200', 'GEM-300', 'GEM-400'],
  },
  {
    courseCode: 'GEM-500',
    courseTitle: 'Juan Dela Cruz',
    preRequisites: ['GEM-100', 'GEM-200', 'GEM-300', 'GEM-400'],
  },
  {
    courseCode: 'GEM-500',
    courseTitle: 'Juan Dela Cruz',
    preRequisites: ['GEM-100', 'GEM-200', 'GEM-300', 'GEM-400'],
  },
  {
    courseCode: 'GEM-500',
    courseTitle: 'Juan Dela Cruz',
    preRequisites: ['GEM-100', 'GEM-200', 'GEM-300', 'GEM-400'],
  },
  {
    courseCode: 'GEM-500',
    courseTitle: 'Juan Dela Cruz',
    preRequisites: ['GEM-100', 'GEM-200', 'GEM-300', 'GEM-400'],
  },
  {
    courseCode: 'GEM-500',
    courseTitle: 'Juan Dela Cruz',
    preRequisites: ['GEM-100', 'GEM-200', 'GEM-300', 'GEM-400'],
  },
  {
    courseCode: 'GEM-500',
    courseTitle: 'Juan Dela Cruz',
    preRequisites: ['GEM-100', 'GEM-200', 'GEM-300', 'GEM-400'],
  },
  {
    courseCode: 'GEM-500',
    courseTitle: 'Juan Dela Cruz',
    preRequisites: ['GEM-100', 'GEM-200', 'GEM-300', 'GEM-400'],
  },
];

// Affected Programs
export const collegeGradAffectedProgramsTemplate = [
  // program, programName, curriculum
  {
    accessorKey: 'program',
    id: 'program',
    header: 'Program',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'programName',
    id: 'programName',
    header: 'Program Name',
    filterVariant: 'fuzzy',
  },
  {
    accessorKey: 'curriculum',
    id: 'curriculum',
    header: 'Curriculum',
    filterVariant: 'fuzzy',
  },
];

export const collegeGradAffectedProgramsData = [
  {
    program: 'GEM-500',
    programName: 'Juan Dela Cruz',
    curriculum: 'MIT-2023',
  },
  {
    program: 'GEM-200',
    programName: 'Juan Dela Cruz',
    curriculum: 'MIT-2023',
  },
  {
    program: 'GEM-400',
    programName: 'Juan Dela Cruz',
    curriculum: 'MIT-2023',
  },
  {
    program: 'GEM-600',
    programName: 'Juan Dela Cruz',
    curriculum: 'MIT-2023',
  },
  {
    program: 'GEM-700',
    programName: 'Juan Dela Cruz',
    curriculum: 'MIT-2023',
  },
  {
    program: 'GEM-800',
    programName: 'Juan Dela Cruz',
    curriculum: 'MIT-2023',
  },
  {
    program: 'GEM-900',
    programName: 'Juan Dela Cruz',
    curriculum: 'MIT-2023',
  },
  {
    program: 'GEM-530',
    programName: 'Juan Dela Cruz',
    curriculum: 'MIT-2023',
  },
];
