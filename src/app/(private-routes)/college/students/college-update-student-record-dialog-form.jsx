import CheckBoxFormField from '@/components/component/form/checkbox-formfield';
import DateFormField from '@/components/component/form/date-formfield';
import InputFormField from '@/components/component/form/input-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import {
  aySem,
  birthSex,
  block,
  civilStatus,
  departments,
  enrollmentStatus,
  entryAcadYear,
  genderIdentity,
  programs,
  regCode,
  studentType,
  yearLevel,
} from '@/lib/constants/fake-data/add-student';
import { StudentSchema } from '@/lib/constants/schema/student';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

function UpdateStudentDialogForm({ selectedStudent }) {
  const updateStudentForm = useForm({
    resolver: zodResolver(StudentSchema),
  });

  updateStudentForm.watch();

  const studentTypeState = updateStudentForm.watch('studentType');
  const cstreetAddressState = updateStudentForm.watch('cstreetAddress');
  const pstreetAddressState = updateStudentForm.watch('pstreetAddress');
  const pprovinceState = updateStudentForm.watch('pprovince');
  const cprovinceState = updateStudentForm.watch('cprovince');
  const pzipCodeState = updateStudentForm.watch('pzipCode');
  const czipCodeState = updateStudentForm.watch('czipCode');

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
        <DialogTitle className='font-bold text-2xl'>Student Record</DialogTitle>
        <DialogDescription>Update the student terms.</DialogDescription>
      </DialogHeader>
      <Form {...updateStudentForm}>
        <div className='overflow-scroll'>
          <div className='mt-5 '>
            <h1 className='font-semibold text-xl'>Personal Details</h1>
          </div>
          {/* Student Number */}
          <div className='mt-5 '>
            <div className='w-[79.5rem]'>
              <InputFormField
                form={updateStudentForm}
                title='Student Number'
                placeholder='Student Number'
                fieldName='studentNo'
                isOptional={true}
                badge={<Badge variant='outline'>Auto-Generated</Badge>}
                disabled
              />
            </div>
          </div>
          <div className='flex justify-between w-[79.5rem] mt-7 gap-7'>
            {/* First Name */}
            <div className='w-[26.5rem]'>
              <InputFormField
                form={updateStudentForm}
                title='First Name'
                className='flex-grow'
                placeholder='First Name'
                fieldName='firstName'
                disabled
              />
            </div>
            <div className='w-[26.5rem]'>
              {/* Middle Name */}
              <InputFormField
                form={updateStudentForm}
                title='Middle Name'
                fieldName='middleName'
                placeholder='Middle Name'
                disabled
              />
            </div>
            <div className='w-[26.5rem]'>
              {/* Last Name */}
              <InputFormField
                form={updateStudentForm}
                title='Last Name'
                className='flex-grow'
                fieldName='lastName'
                placeholder='Last Name'
                disabled
              />
            </div>
          </div>
          <div className='flex justify-between w-[79.5rem] mt-7 gap-7'>
            <div className='w-[26.5rem]'>
              {/* Name Extension*/}
              <InputFormField
                form={updateStudentForm}
                title='Name Extension'
                description='Enter N/A if not applicable.'
                placeholder='Name Extension'
                fieldName='nameExtension'
                className='flex-grow'
                disabled
              />
            </div>
            <div className='w-[26.5rem]'>
              {/* Maiden Name */}
              <InputFormField
                form={updateStudentForm}
                title='Maiden Name'
                className='flex-grow'
                fieldName='maidenName'
                placeholder='Maiden Name'
                disabled
              />
            </div>
            <div className='w-[26.5rem]'>
              {/* Birth Date */}
              <DateFormField
                form={updateStudentForm}
                title={'Birth Date'}
                fieldName={'birthDate'}
                placeholder={'Birth Date'}
                isOptional={false}
                className='flex-grow'
                disabled
              />
            </div>
          </div>
          <div className='flex justify-between w-[79.5rem] mt-7 gap-7'>
            <div className='w-[26.5rem]'>
              {/* Birth Sex */}
              <InputFormField
                form={updateStudentForm}
                title='Birth Sex'
                content={birthSex}
                placeholder='Birth Sex'
                fieldName='birthSex'
                disabled
              />
            </div>
            <div className='w-[26.5rem]'>
              {/* Gender Identity */}
              <InputFormField
                form={updateStudentForm}
                title='Gender Identity'
                content={genderIdentity}
                fieldName='genderIdentity'
                placeholder='Gender Identity'
                disabled
              />
            </div>
            <div className='w-[26.5rem]'>
              {/* Birth Place */}
              <InputFormField
                form={updateStudentForm}
                title='Birth Place'
                fieldName='birthPlace'
                placeholder='Birth Place'
                className='flex-grow'
                disabled
              />
            </div>
          </div>
          <div className='flex justify-between w-[79.5rem] mt-7 gap-7'>
            <div className='w-[26.5rem]'>
              {/* Civil Status */}
              <InputFormField
                form={updateStudentForm}
                title='Civil Status'
                content={civilStatus}
                placeholder='Civil Status'
                fieldName='civilStatus'
                disabled
              />
            </div>
            <div className='w-[26.5rem]'>
              {/* Email Address */}
              <InputFormField
                form={updateStudentForm}
                title='PLM Email'
                fieldName='emailAddress'
                placeholder='PLM Email'
                disabled
              />
            </div>
            <div className='w-[26.5rem]'>
              {/*Phone Number */}
              <InputFormField
                form={updateStudentForm}
                title='Phone Number'
                fieldName='phoneNum'
                placeholder='Phone Number'
                className='w-72'
                disabled
              />
            </div>
          </div>

          <div className='mt-10 ' />
          <div className='flex flex-row space-x-2'>
            <h1 className='font-semibold text-xl'>Student Terms</h1>
            <div className='space-x-1' />
            <Badge className='h-5 w-15 mt-1 font-light bg-yellow-50 border-yellow-100 border-2 border-solid text-yellow-500'>
              Semester
            </Badge>
            <Badge className='h-5 w-15 mt-1 font-light bg-yellow-50 border-yellow-100 border-2 border-solid text-yellow-500'>
              Academic Year
            </Badge>
          </div>
          <div className='mt-5 ' />
          {/* AY-Sem */}
          <div className='w-[79.5rem]'>
            <SelectFormField
              form={updateStudentForm}
              title='AY-Sem'
              content={aySem}
              placeholder='AY-Sem'
              fieldName='aySem'
              description='Update to the latest AY-Sem to enable the relevant fields and endorse the student/s'
            />
          </div>
          <div className='flex justify-between w-[79.5rem] mt-7 gap-7'>
            <div className='w-[26.5rem]'>
              {/* Program */}
              <SelectFormField
                form={updateStudentForm}
                content={programs}
                title='Program'
                fieldName='program'
                className='flex-grow'
                placeholder='Program'
                disabled={
                  studentTypeState === 'Old' ||
                  studentTypeState === 'New' ||
                  studentTypeState === 'Returnee' ||
                  studentTypeState === 'Transferee'
                }
              />
            </div>
            <div className='w-[26.5rem]'>
              {/* College */}
              <SelectFormField
                form={updateStudentForm}
                content={departments}
                className='flex-grow'
                title='College'
                fieldName='college'
                placeholder='College'
                disabled={
                  studentTypeState === 'Old' ||
                  studentTypeState === 'New' ||
                  studentTypeState === 'Returnee' ||
                  studentTypeState === 'Transferee'
                }
              />
            </div>
            <div className='w-[26.5rem]'>
              {/* Entry Acad Year */}
              <SelectFormField
                form={updateStudentForm}
                content={entryAcadYear}
                className='flex-grow'
                title='Entry Academic Year'
                fieldName='entryAcadYear'
                placeholder='Entry Academic Year'
                disabled
              />
            </div>
          </div>
          <div className='flex justify-between w-[79.5rem] mt-7 gap-7'>
            <div className='w-[26.5rem]'>
              {/* Student Type */}
              <SelectFormField
                form={updateStudentForm}
                className='flex-grow'
                content={studentType}
                title='Student Type'
                fieldName='studentType'
                placeholder='Student Type'
              />
            </div>
            <div className='w-[26.5rem]'>
              {/* Registration Code */}
              <SelectFormField
                form={updateStudentForm}
                content={regCode}
                className='flex-grow'
                title='Registration Code'
                fieldName='regCode'
                placeholder='Registration Code'
              />
            </div>
            <div className='w-[26.5rem]'>
              {/* Scholastic Status */}
              <InputFormField
                form={updateStudentForm}
                title='Scholastic Status'
                fieldName='scholasticStatus'
                placeholder='Scholastic Status'
                disabled
              />
            </div>
          </div>
          <div className='flex justify-between w-[79.5rem] mt-7 gap-7'>
            <div className='w-[26.5rem]'>
              {/* Year Level */}
              <SelectFormField
                form={updateStudentForm}
                content={yearLevel}
                title='Year Level'
                fieldName='yearLevel'
                placeholder='Year Level'
              />
            </div>
            <div className='w-[26.5rem]'>
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
            <div className='w-[26.5rem]'>
              {/* Enrollment Status */}
              <SelectFormField
                form={updateStudentForm}
                content={enrollmentStatus}
                title='Enrollment Status'
                fieldName='enrollmentStatus'
                placeholder='enrollmentStatus'
                isOptional={true}
                disabled
              />
            </div>
          </div>
          <div className='mt-10 ' />
          <h1 className='font-semibold text-xl'>Current Address</h1>
          <div className='gap-10 mt-7'>
            {/* Street Address */}
            <InputFormField
              form={updateStudentForm}
              className='w-[79.5rem]'
              title='Street Address'
              fieldName='cstreetAddress'
              placeholder='Street Address'
              disabled
            />
            <div className='mt-7' />
            <div className='flex justify-between w-[79.5rem]'>
              <div>
                {/* Province/City */}
                <InputFormField
                  form={updateStudentForm}
                  className={'w-[51.3rem]'}
                  title='Province/City'
                  fieldName='cprovince'
                  placeholder='Province/City'
                  disabled
                />
              </div>
              <div className='mt-7' />
              {/* Zip Code */}
              <div>
                <InputFormField
                  form={updateStudentForm}
                  title='Zip Code'
                  fieldName='czipCode'
                  placeholder='Zip Code'
                  className='w-[25rem]'
                  disabled
                />
              </div>
            </div>
          </div>
          <div className='mt-10' />
          <h1 className='font-semibold text-xl'>Permanent Address</h1>
          <div className='mt-5' />
          <div className='items-top flex space-x-2'>
            <Checkbox
              id='address'
              checked={
                cstreetAddressState === pstreetAddressState &&
                cprovinceState === pprovinceState &&
                czipCodeState === pzipCodeState
              }
              disabled
            />
            <div className='grid gap-1 leading-none'>
              <h1
                htmlFor='confirm'
                className='text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Check if the permanent address is the same as the current
                address
              </h1>
            </div>
          </div>
          <div className='gap-10 mt-7'>
            {/* Street Address */}
            <InputFormField
              form={updateStudentForm}
              className='w-[79.5rem]'
              title='Street Address'
              fieldName='pstreetAddress'
              placeholder='Street Address'
              disabled
            />
            <div className='mt-7' />
            <div className='flex justify-between w-[79.5rem]'>
              {/* Province/City */}
              <div>
                <InputFormField
                  form={updateStudentForm}
                  className='w-[51.3rem]'
                  title='Province/City'
                  fieldName='pprovince'
                  placeholder='Province Address'
                  disabled
                />
              </div>
              {/* Zip Code */}
              <div>
                <InputFormField
                  form={updateStudentForm}
                  title='Zip Code'
                  fieldName='pzipCode'
                  placeholder='Zip Code'
                  className='w-[25rem]'
                  disabled
                />
              </div>
            </div>
          </div>
          <div className='mt-12' />
          <div className='items-top flex space-x-7'>
            <CheckBoxFormField
              form={updateStudentForm}
              title={'Are you sure?'}
              description={
                <div className='flex flex-col gap-1'>
                  <div className='gap-1' />
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
              Update Record
            </Button>
          </div>
        </div>
      </Form>
    </DialogContent>
  );
}
export default UpdateStudentDialogForm;
