import CheckBoxFormField from '@/components/component/form/checkbox-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
import TableMRT from '@/components/layouts/table-mrt';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import {
  aySem,
  block,
  departments,
  programs,
  regCode,
  studentType,
  yearLevel,
} from '@/lib/constants/fake-data/add-student';
import { StudentSchema } from '@/lib/constants/schema/student';
import { fakeCollegeStudentsTemplate } from '@/lib/constants/table-templates/college/view-student-profile';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function UpdateMultipleStudentDialogForm({ selectedStudent }) {
  const updateStudentForm = useForm({
    resolver: zodResolver(StudentSchema),
  });

  updateStudentForm.watch();

  useEffect(() => {
    if (selectedStudent) {
      Object.keys(selectedStudent).forEach((key) => {
        updateStudentForm.setValue(key, selectedStudent[key]);
      });
    }
  }, [selectedStudent, updateStudentForm]);

  return (
    <DialogContent className='md:max-w-[1350px] h-5/6'>
      <DialogHeader>
        <DialogTitle className='font-bold text-2xl'>
          Student Records
        </DialogTitle>
        <DialogDescription>Update multiple student terms.</DialogDescription>
      </DialogHeader>
      <Form {...updateStudentForm}>
        <div className='overflow-scroll'>
          <div className='mt-5 ' />
          <div className='flex flex-row space-x-2'>
            <Label className='font-semibold text-xl'>Student Terms</Label>
            <div className='space-x-1' />
            <Badge className='h-5 w-15 mt-1 font-light bg-yellow-50 border-yellow-100 border-2 border-solid text-yellow-500'>
              Semester
            </Badge>
            <Badge className='h-5 w-15 mt-1 font-light bg-yellow-50 border-yellow-100 border-2 border-solid text-yellow-500'>
              Academic Year
            </Badge>
          </div>
          <div className='mt-7' />
          <div className='w-[79.5rem]'>
            <TableMRT
              template={fakeCollegeStudentsTemplate.filter(
                (column) =>
                  column.id !== 'enrollmentStatus' && column.id !== 'regCode',
              )}
              data={selectedStudent}
              isFullscreen={false}
              searchPlaceholder='Search Student'
            />
          </div>
          <div className='mt-10 ' />
          {/* AY-Sem */}
          <div className='w-[79.5rem]'>
            <SelectFormField
              form={updateStudentForm}
              title='AY-Sem'
              content={aySem}
              placeholder='AY-Sem'
              fieldName='aySem'
              description='Update the current academic year and semester to endorse the students'
            />
          </div>
          <div className='flex justify-between w-[79.5rem] mt-7 gap-7'>
            <div className='w-[39.75rem]'>
              {/* Program */}
              <SelectFormField
                form={updateStudentForm}
                content={programs}
                title='Program'
                fieldName='program'
                className='flex-grow'
                placeholder='Program'
                isOptional={true}
              />
            </div>
            <div className='w-[39.75rem]'>
              {/* College */}
              <SelectFormField
                form={updateStudentForm}
                content={departments}
                className='flex-grow'
                title='College'
                fieldName='college'
                placeholder='College'
                isOptional={true}
              />
            </div>
          </div>
          <div className='flex justify-between w-[79.5rem] mt-7 gap-7'>
            <div className='w-[39.75rem]'>
              {/* Student Type */}
              <SelectFormField
                form={updateStudentForm}
                className='flex-grow'
                content={studentType}
                title='Student Type'
                fieldName='studentType'
                placeholder='Student Type'
                isOptional={true}
              />
            </div>
            <div className='w-[39.75rem]'>
              {/* Registration Code */}
              <SelectFormField
                form={updateStudentForm}
                content={regCode}
                className='flex-grow'
                title='Registration Code'
                fieldName='regCode'
                placeholder='Registration Code'
                isOptional={true}
              />
            </div>
          </div>
          <div className='flex justify-between w-[79.5rem] mt-7 gap-7'>
            <div className='w-[39.75rem]'>
              {/* Year Level */}
              <SelectFormField
                form={updateStudentForm}
                content={yearLevel}
                title='Year Level'
                fieldName='yearLevel'
                placeholder='Year Level'
                isOptional={true}
              />
            </div>
            <div className='w-[39.75rem]'>
              {/* Block */}
              <SelectFormField
                form={updateStudentForm}
                content={block}
                title='Block'
                fieldName='block'
                placeholder='Block'
                isOptional={true}
              />
            </div>
          </div>
          <div className='mt-12' />
          <div className='items-top flex space-x-4'>
            <CheckBoxFormField
              form={updateStudentForm}
              title={'Are you sure?'}
              description={
                <div className='flex flex-col'>
                  <div>Double check if all inputs are correct</div>
                  <div>to ensure there are no input errors.</div>
                </div>
              }
              fieldName={'isSure'}
            />
          </div>
          <div className='flex justify-start ml-7 mt-5'>
            <Button
              type='submit'
              className='w-72'
              disabled={!updateStudentForm.getValues().isSure}
            >
              Update Records
            </Button>
          </div>
        </div>
      </Form>
    </DialogContent>
  );
}
export default UpdateMultipleStudentDialogForm;
