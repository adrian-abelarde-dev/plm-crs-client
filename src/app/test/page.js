import CustomStepper from '@/components/component/stepper';
import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import {
  fakeCollegeStudents,
  fakeCollegeStudentsRowActions,
  template,
} from '@/lib/constants/fake-table-data';

const steps = [
  {
    label: 'First step',
    description: 'Create an account',
    content: 'Step 1 content: Create an account',
  },
  {
    label: 'Second step',
    description: 'Verify email',
    content: 'Step 2 content: Verify email',
  },
  {
    label: 'Final step',
    description: 'Get full access',
    content: 'Step 3 content: Get full access',
  },
];

const TestingOnly = () => {
  return (
    <Container className='py-4'>
      <CustomStepper steps={steps}>
        <TableMRT
          template={template}
          data={fakeCollegeStudents}
          title={'Students'}
          searchPlaceholder={'Search students'}
          RightButtons={
            <Button className='bg-[#FBBF24] text-[#0F172A]' variant='outline'>
              Add Class
            </Button>
          }
          LeftButtons={
            <Button className=' text-[#0F172A]' variant='outline'>
              Click
            </Button>
          }
          RowActions={
            <>
              {fakeCollegeStudentsRowActions.map((rowAction) => {
                return (
                  <Button
                    key={rowAction.label}
                    className='text-[#0F172A] justify-between'
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
      </CustomStepper>
    </Container>
  );
};

export default TestingOnly;
