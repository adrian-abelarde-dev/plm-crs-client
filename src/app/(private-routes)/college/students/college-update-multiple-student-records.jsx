import CheckBoxFormField from '@/components/component/form/checkbox-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
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
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
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
    <DialogContent className='md:max-w-[1350px] h-5/6 overflow-auto'>
      <DialogHeader>
        <DialogTitle className='font-bold text-2xl'>
          Student Records
        </DialogTitle>
        <DialogDescription>Update multiple student terms.</DialogDescription>
      </DialogHeader>
      <Form {...updateStudentForm}>
        <ScrollArea className='h-50'>
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
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student Number</TableHead>
                <TableHead>First Name</TableHead>
                <TableHead>Middle Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Registration Code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedStudent.map((student) => (
                <TableRow key={student.studentId}>
                  <TableCell>{student.studentNo}</TableCell>
                  <TableCell>{student.firstName}</TableCell>
                  <TableCell>{student.middleName}</TableCell>
                  <TableCell>{student.lastName}</TableCell>
                  <TableCell>{student.regCode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
          <div className='flex w-full gap-7 mt-7'>
            <div className='flex flex-col w-[38.9rem]'>
              {/* Program */}
              <SelectFormField
                form={updateStudentForm}
                content={programs}
                title='Program'
                fieldName='program'
                placeholder='Program'
                isOptional={true}
              />
              {/* Student Type */}
              <div className='mt-7' />
              <SelectFormField
                form={updateStudentForm}
                content={studentType}
                title='Student Type'
                fieldName='studentType'
                placeholder='Student Type'
                isOptional={true}
              />
              {/* Year and Level */}
              <div className='mt-7' />
              <SelectFormField
                form={updateStudentForm}
                content={yearLevel}
                title='Year Level'
                fieldName='yearLevel'
                placeholder='Year Level'
                isOptional={true}
              />
            </div>
            <div className='flex flex-col w-[38.9rem]'>
              {/* College */}
              <SelectFormField
                form={updateStudentForm}
                content={departments}
                title='College'
                fieldName='college'
                placeholder='College'
                isOptional={true}
              />
              <div className='mt-7' />
              {/* Registration Code */}
              <SelectFormField
                form={updateStudentForm}
                content={regCode}
                title='Registration Code'
                fieldName='regCode'
                placeholder='Registration Code'
                isOptional={true}
              />
              <div className='mt-7' />
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
        </ScrollArea>
      </Form>
    </DialogContent>
  );
}
export default UpdateMultipleStudentDialogForm;
