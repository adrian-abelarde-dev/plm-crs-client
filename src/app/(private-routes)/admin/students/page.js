'use client';

import AlertConfirmModal from '@/components/component/alert-dialog';
import InputFormField from '@/components/component/form/input-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
import TableMRT from '@/components/layouts/table-mrt';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/use-toast';
import { fakeStudents } from '@/lib/constants/fake-data/students';
import { handleRowSelectionChange, testPromise } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Archive, CheckCircle, Edit, PlusIcon, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const StudentSchema = z.object({
  userId: z.string(),
  fullName: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  yearLevel: z.string(),
  program: z.string(),
  status: z.string(),
  college: z.string(),
});

const programs = [
  { value: 'BSCS', label: 'BSCS' },
  { value: 'BSIT', label: 'BSIT' },
  { value: 'BSECE', label: 'BSECE' },
  { value: 'BSME', label: 'BSME' },
  { value: 'BSIE', label: 'BSIE' },
  { value: 'BSChem', label: 'BSChem' },
  { value: 'BSEng', label: 'BSEng' },
  { value: 'BBA', label: 'BBA' },
  { value: 'BFA', label: 'BFA' },
  { value: 'BSN', label: 'BSN' },
  { value: 'BSArch', label: 'BSArch' },
  { value: 'BSAgri', label: 'BSAgri' },
  { value: 'BSAero', label: 'BSAero' },
  { value: 'BSMath', label: 'BSMath' },
  { value: 'BSPsy', label: 'BSPsy' },
  { value: 'BSSoc', label: 'BSSoc' },
  { value: 'BSTheo', label: 'BSTheo' },
  { value: 'BSMgmt', label: 'BSMgmt' },
  { value: 'BSHRM', label: 'BSHRM' },
  { value: 'BSAcct', label: 'BSAcct' },
];

const statuses = [
  {
    value: 'Regular',
    label: 'Regular',
  },
  {
    value: 'Irregular',
    label: 'Irregular',
  },
  {
    value: 'LOA',
    label: 'LOA',
  },
  {
    value: 'HD',
    label: 'HD',
  },
];

const colleges = [
  {
    value: 'College of Engineering',
    label: 'College of Engineering',
  },
  {
    value: 'College of Arts and Sciences',
    label: 'College of Arts and Sciences',
  },
  {
    value: 'College of Business Administration',
    label: 'College of Business Administration',
  },
  {
    value: 'College of Education',
    label: 'College of Education',
  },
  {
    value: 'College of Nursing',
    label: 'College of Nursing',
  },
  {
    value: 'College of Fine Arts',
    label: 'College of Fine Arts',
  },
  {
    value: 'College of Social Sciences',
    label: 'College of Social Sciences',
  },
  {
    value: 'College of Health Sciences',
    label: 'College of Health Sciences',
  },
  {
    value: 'College of Information Technology',
    label: 'College of Information Technology',
  },
  {
    value: 'College of Architecture',
    label: 'College of Architecture',
  },
  {
    value: 'College of Agriculture',
    label: 'College of Agriculture',
  },
  {
    value: 'College of Psychology',
    label: 'College of Psychology',
  },
  {
    value: 'College of Mathematics and Statistics',
    label: 'College of Mathematics and Statistics',
  },
  {
    value: 'College of Music',
    label: 'College of Music',
  },
  {
    value: 'College of Physics and Astronomy',
    label: 'College of Physics and Astronomy',
  },
  {
    value: 'College of Environmental Science',
    label: 'College of Environmental Science',
  },
  {
    value: 'College of Languages and Literature',
    label: 'College of Languages and Literature',
  },
  {
    value: 'College of Theology',
    label: 'College of Theology',
  },
  {
    value: 'College of Management',
    label: 'College of Management',
  },
  {
    value: 'College of Human Resource Management',
    label: 'College of Human Resource Management',
  },
];

function AddStudentDialogForm({ open, setOpen }) {
  const [studentFirstName, setStudentFirstName] = useState('');
  const [studentMiddleName, setStudentMiddleName] = useState('');
  const [studentLastName, setStudentLastName] = useState('');

  const addStudentForm = useForm({
    resolver: zodResolver(StudentSchema),
    values: {
      userId: '2023-100001',
      fullName: '',
      firstName: '',
      middleName: '',
      lastName: '',
      yearLevel: '',
      program: '',
      status: '',
      college: '',
    },
  });

  useEffect(() => {
    // Reset the form when the dialog is opened
    if (open) {
      addStudentForm.reset();
      setStudentFirstName('');
      setStudentMiddleName('');
      setStudentLastName('');
    }
  }, [open, addStudentForm]);

  useEffect(() => {
    const fullNameParts = [studentFirstName, studentMiddleName, studentLastName]
      .filter(Boolean)
      .join(' ');

    addStudentForm.setValue('fullName', fullNameParts);

    // Set form values here using setValue
    addStudentForm.setValue('firstName', studentFirstName);
    addStudentForm.setValue('middleName', studentMiddleName);
    addStudentForm.setValue('lastName', studentLastName);
  }, [studentFirstName, studentMiddleName, studentLastName, addStudentForm]);

  function onAddStudentSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusIcon className='w-4 h-4 mr-2' />
          Add Student
        </Button>
      </DialogTrigger>

      <Form {...addStudentForm}>
        <form onSubmit={addStudentForm.handleSubmit(onAddStudentSubmit)}>
          <DialogContent className='xsm:max-w-[26.5625rem]'>
            <DialogHeader>
              <DialogTitle>Add Student</DialogTitle>
              <DialogDescription>
                Add a new student here. Click save when you&apos;re done.
              </DialogDescription>
            </DialogHeader>

            <div className='flex flex-col gap-2 w-full'>
              {/* User ID */}
              <InputFormField
                form={addStudentForm}
                title='User ID'
                fieldName='userId'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
                disabled={true}
              />

              {/* Full Name */}
              <InputFormField
                form={addStudentForm}
                title='Full Name'
                fieldName='fullName'
                placeholder='John Doe'
                disabled={true}
              />

              <div className='flex gap-2 w-full'>
                {/* First Name */}
                <InputFormField
                  form={addStudentForm}
                  title='First Name'
                  fieldName='firstName'
                  placeholder='John'
                  onChange={(e) => {
                    setStudentFirstName(e.target.value);
                  }}
                />
                {/* Middle Name */}
                <InputFormField
                  form={addStudentForm}
                  title='Middle Name'
                  fieldName='middleName'
                  placeholder='Doe'
                  onChange={(e) => {
                    setStudentMiddleName(e.target.value);
                  }}
                />
              </div>

              {/* Last Name */}
              <InputFormField
                form={addStudentForm}
                title='Last Name'
                fieldName='lastName'
                placeholder='Smith'
                onChange={(e) => {
                  setStudentLastName(e.target.value);
                }}
              />

              {/* Program */}
              <SelectFormField
                form={addStudentForm}
                content={programs}
                title='Program'
                placeholder='Select Program'
                fieldName='program'
                isOptional={false}
              />

              {/* Status */}
              <SelectFormField
                form={addStudentForm}
                content={statuses}
                title='Status'
                placeholder='Select Status'
                fieldName='status'
                isOptional={false}
              />

              {/* College */}
              <SelectFormField
                form={addStudentForm}
                content={colleges}
                title='College'
                placeholder='Select College'
                fieldName='college'
                isOptional={false}
              />
            </div>

            <DialogFooter className='w-full flex justify-end'>
              <DialogClose asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button type='submit'>Save Student</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}

function EditStudentDialogForm({ disabled, selectedStudent }) {
  const [studentFirstName, setStudentFirstName] = useState('');
  const [studentMiddleName, setStudentMiddleName] = useState('');
  const [studentLastName, setStudentLastName] = useState('');

  const editStudentForm = useForm({
    resolver: zodResolver(StudentSchema),
  });

  useEffect(() => {
    const fullNameParts = [studentFirstName, studentMiddleName, studentLastName]
      .filter(Boolean)
      .join(' ');

    // // Set the fullName in the form
    editStudentForm.setValue('fullName', fullNameParts);
  }, [editStudentForm, studentFirstName, studentMiddleName, studentLastName]);

  useEffect(() => {
    // Set initial values when selectedStudent prop changes
    if (selectedStudent[0]) {
      setStudentFirstName(selectedStudent[0].firstName);
      setStudentMiddleName(selectedStudent[0].middleName);
      setStudentLastName(selectedStudent[0].lastName);

      editStudentForm.setValue('userId', selectedStudent[0].userId || '');
      editStudentForm.setValue('firstName', selectedStudent[0].firstName || '');
      editStudentForm.setValue(
        'middleName',
        selectedStudent[0].middleName || '',
      );
      editStudentForm.setValue('lastName', selectedStudent[0].lastName || '');
      editStudentForm.setValue(
        'program',
        selectedStudent[0].program || 'Select Program',
      );
      editStudentForm.setValue(
        'status',
        selectedStudent[0].status || 'Select Status',
      );
      editStudentForm.setValue(
        'college',
        selectedStudent[0].college || 'Select College',
      );
    }
  }, [selectedStudent, editStudentForm]);

  function onEditStudentSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled}>
          <Edit className='w-4 h-4 mr-2' />
          Edit Student
        </Button>
      </DialogTrigger>
      <DialogContent className='xsm:max-w-[26.5625rem]'>
        <DialogHeader>
          <DialogTitle>Edit Student</DialogTitle>
          <DialogDescription>
            Edit a new student here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <Form {...editStudentForm}>
          <form onSubmit={editStudentForm.handleSubmit(onEditStudentSubmit)}>
            <div className='flex flex-col gap-2 w-full'>
              {/* User ID */}
              <InputFormField
                form={editStudentForm}
                title='User ID'
                fieldName='userId'
                badge={<Badge variant='outline'>Auto-generated</Badge>}
                disabled={true}
              />

              {/* Full Name */}
              <InputFormField
                form={editStudentForm}
                title='Full Name'
                fieldName='fullName'
                placeholder='John Doe'
                disabled={true}
              />

              <div className='flex gap-2 w-full'>
                {/* First Name */}
                <InputFormField
                  form={editStudentForm}
                  title='First Name'
                  fieldName='firstName'
                  placeholder='John'
                  onChange={(e) => {
                    setStudentFirstName(e.target.value);
                    editStudentForm.setValue('firstName', e.target.value);
                  }}
                />
                {/* Middle Name */}
                <InputFormField
                  form={editStudentForm}
                  title='Middle Name'
                  fieldName='middleName'
                  placeholder='Doe'
                  onChange={(e) => {
                    setStudentMiddleName(e.target.value);
                    editStudentForm.setValue('middleName', e.target.value);
                  }}
                />
              </div>

              {/* Last Name */}
              <InputFormField
                form={editStudentForm}
                title='Last Name'
                fieldName='lastName'
                placeholder='Smith'
                onChange={(e) => {
                  setStudentLastName(e.target.value);
                  editStudentForm.setValue('lastName', e.target.value);
                }}
              />

              {/* Program */}
              <SelectFormField
                form={editStudentForm}
                content={programs}
                title='Program'
                placeholder='Select Program'
                fieldName='program'
                isOptional={false}
              />

              {/* Status */}
              <SelectFormField
                form={editStudentForm}
                content={statuses}
                title='Status'
                placeholder='Select Status'
                fieldName='status'
                isOptional={false}
              />

              {/* College */}
              <SelectFormField
                form={editStudentForm}
                content={colleges}
                title='College'
                placeholder='Select College'
                fieldName='college'
                isOptional={false}
              />
            </div>
          </form>
        </Form>

        <DialogFooter className='w-full flex justify-end'>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
          <Button type='submit'>Save Student</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function AdminStudentsPage() {
  const [rowSelection, setRowSelection] = useState({});
  const [addStudentDialogFormOpen, setAddStudentDialogFormOpen] =
    useState(false);

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
    {
      accessorKey: 'firstName',
      id: 'firstName',
      header: 'First Name',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'middleName',
      id: 'middleName',
      header: 'Middle Name',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'lastName',
      id: 'lastName',
      header: 'Last Name',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'yearLevel',
      id: 'yearLevel',
      header: 'Year Level',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'program',
      id: 'program',
      header: 'Program',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'status',
      id: 'status',
      header: 'Status',
      filterVariant: 'fuzzy',
    },
    {
      accessorKey: 'college',
      id: 'college',
      header: 'College',
      filterVariant: 'fuzzy',
    },
  ];

  const selectedStudent = handleRowSelectionChange(
    fakeStudents,
    fakeStudentsTemplate,
    rowSelection,
  );

  const selectedStudentUserID = selectedStudent[0]?.userId;

  async function sampleConfirmFunction(id) {
    try {
      const result = await testPromise(id);

      if (result) {
        toast({
          title: (
            <div className='flex flex-row'>
              <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
              <Label>Success!</Label>
            </div>
          ),
          description: <>Changes have been Saved.</>,
        });
      }
    } catch (error) {
      console.error({ error });

      toast({
        variant: 'destructive',
        title: (
          <div className='flex flex-row'>
            <XCircle className='mr-2 h-4 w-4' />
            <Label>Error!</Label>
          </div>
        ),
        description: <>Error saving your data</>,
      });
    }
  }

  return (
    <main className='w-full p-6'>
      {/* Table: Schedule of Activites */}
      <TableMRT
        template={fakeStudentsTemplate}
        data={fakeStudents}
        title='Students'
        description='Add, edit, and delete students.'
        searchPlaceholder='Search Students...'
        isCheckBoxVisible={true}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
        enableRowActions={true}
        renderRowActionMenuItems={() => {
          return (
            <div className='flex flex-col w-[14.75rem] z-10'>
              {/* Archive Alert */}
              <AlertConfirmModal
                label='Archive Student'
                title='Are you sure you want to archive this student?'
                description='You can still undo this action. This will only archive the student and not delete it.'
                cancelLabel='Cancel'
                confirmLabel='Archive'
                confirmFunction={() =>
                  sampleConfirmFunction(selectedStudentUserID)
                }
                triggerIcon={<Archive className='w-4 h-4' />}
                className='w-full items-start justify-between text-left flex text-destructive hover:text-destructive/90'
              />
            </div>
          );
        }}
        RightButtons={
          <section className='flex gap-2 items-center'>
            <EditStudentDialogForm
              selectedStudent={selectedStudent}
              disabled={
                Object.keys(selectedStudent).length > 1 ||
                Object.keys(selectedStudent).length === 0
              }
            />
            <AddStudentDialogForm
              open={addStudentDialogFormOpen}
              setOpen={setAddStudentDialogFormOpen}
            />
          </section>
        }
      />
    </main>
  );
}

export default AdminStudentsPage;
