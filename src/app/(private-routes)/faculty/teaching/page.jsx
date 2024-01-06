import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { facultyClassAssingnmentData } from '@/lib/constants/fake-data/faculty-class-assignment';
import { facultyClassAssignmentTemplate } from '@/lib/constants/table-templates/faculty/current-class-assignment';
import { computeLoads } from '@/lib/utils';

function FacultyTeaching() {
  return (
    <main className='p-6 flex flex-col'>
      <div className='mt-12 mb-16'>
        <h1 className='text-4xl font-medium'>Current Class Assignment</h1>
      </div>

      <TableMRT
        template={facultyClassAssignmentTemplate}
        data={facultyClassAssingnmentData}
        title='1st Semester A.Y 2023 - 2024'
        searchPlaceholder='Search Class'
      />

      <Button variant='outline' className='cursor-context-menu place-self-end'>
        Total No. of Credits:{' '}
        {computeLoads('credits', facultyClassAssingnmentData)}
      </Button>
    </main>
  );
}

export default FacultyTeaching;
