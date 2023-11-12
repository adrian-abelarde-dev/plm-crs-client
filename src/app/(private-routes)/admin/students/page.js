import TableMRT from '@/components/layouts/table-mrt';
import { fakeStudents } from '@/lib/constants/fake-data/students';

function StudentsPage() {
  const fakeStudentsTemplate = [
    {
      accessorKey: 'userId',
      id: 'userId',
      header: 'User ID',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'fullName',
      id: 'fullName',
      header: 'Full Name',
      filterVariant: 'fuzzy',
    },
  ];

  return (
    <main className='w-full p-6'>
      {/* Table: Schedule of Activites */}
      <TableMRT
        template={fakeStudentsTemplate}
        data={fakeStudents}
        title='Students'
        description='Add, edit, and delete students.'
        searchPlaceholder='Search Students...'
      />
    </main>
  );
}

export default StudentsPage;
