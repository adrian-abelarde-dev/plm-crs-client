'use client';
import { fakeCollegeStudents, fakeCollegeStudentsRowActions } from '@/lib/constants/fake-data/students-college';
import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useDisclosure } from '@mantine/hooks';
import { UserCheck, Edit, Diff, User} from 'lucide-react';

function StudentsCollegeTable() {
  const [opened, { open, close }] = useDisclosure(false);

  const fakeCollegeStudentsTemplate = [
    {
      accessorKey: 'studentNo',
      id: 'studentNo',
      header: 'Student Number',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'fullName',
      id: 'fullName',
      header: 'Full Name',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'program',
      id: 'program',
      header: 'Program',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'yearAndBlock',
      id: 'yearAndBlock',
      header: 'Year & Block',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'emailAddress',
      id: 'emailAddress',
      header: 'Email Address',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'regCode',
      id: 'regCode',
      header: 'Registration Code',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'enrollmentStatus',
      id: 'enrollmentStatus',
      header: 'Enrollment Status',
      filterVariant: 'fuzzy',
    }
  ];

  function AddStudent() {
    return (
  
            <Button>Add Student</Button>
    );
  }

  function EnlistStudent() {
    return (
  
            <Button variant='outline'>Enlist<UserCheck className='ml-2 h-4 w-4' /></Button>
    );
  }

  function AddDrop() {
    return (
  
            <Button variant='outline'>Add Drop<Diff className='ml-2 h-4 w-4' /></Button>
    );
  }

  function ViewProfile() {
    return (
  
            <Button variant='outline'>View Profile<User className='ml-2 h-4 w-4' /></Button>
    );
  }

  function EditStudent() {
    return (
  
            <Button variant='outline'>Edit<User className='ml-2 h-4 w-4' /></Button>
    );
  }

  return (
    <main className='w-full p-6'>
      {/* Table: Student College Table */}
      <TableMRT
        template={fakeCollegeStudentsTemplate}
        data={fakeCollegeStudents}
        title='Students'
        description='Add, edit and view student/s.'
        searchPlaceholder='Search Student'
        isCheckBoxVisible={true}
        RightButtons={[<ViewProfile/>,<EnlistStudent/>, <AddDrop/>, <EditStudent/>, <AddStudent/>]}
        RowActions={
          <>
            {fakeCollegeStudentsRowActions.map((rowAction) => {
              return (
                <Button
                  key={rowAction.label}   className={cn(`text-zinc-900 justify-between hover:bg-zinc-100`)}
                  variant='ghost'
                >
                  {rowAction.label}
                  {rowAction.icon}
                </Button>
              );
            })}
          </>
        }
      />
      </main>
  );
}

export default StudentsCollegeTable;
