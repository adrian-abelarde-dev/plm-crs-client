import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

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
    Cell: ({ cell }) => {
      return (
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant='outline'>Show Pre-Requisites</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Pre-Requisites</AlertDialogTitle>
            </AlertDialogHeader>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Course Code</TableHead>
                  <TableHead>Course Title</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cell.getValue().map((preRequisite, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{preRequisite.courseCode}</TableCell>
                      <TableCell>{preRequisite.courseTitle}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <AlertDialogFooter>
              <AlertDialogAction>Close</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      );
    },
  },
];
