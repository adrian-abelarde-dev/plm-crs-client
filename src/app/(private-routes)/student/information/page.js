'use client';

import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { countries } from '@/lib/constants/countries';
import { zodResolver } from '@hookform/resolvers/zod';
// Import isEqual from lodash to compare objects
import isEqual from 'lodash/isEqual';
import { Edit } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const yearLevelOptions = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  '4th Year',
  '5th Year',
  '6th Year',
  '7th Year',
  '8th Year',
  '9th Year',
  '10th Year',
];

const civilStatusOptions = [
  'Single',
  'Married',
  'Divorced',
  'Widowed',
  'Other',
];

const status = ['New', 'Old'];
const regStatus = ['Regular', 'Irregular'];
const degree = [
  'Bachelor of Science in Information Technology',
  'Bachelor of Science in Computer Science',
  'Bachelor of Science Information System',
  'Bachelor of Science in Computer Engineering',
];

const studentInformationSchema = z.object({
  studentId: z.string().min(2).max(50),
  firstName: z.string().min(2).max(50),
  middleName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  pedigree: z.string().min(2).max(50),
  gender: z.string().min(2).max(50),
  civilStatus: z.string().min(2).max(50),
  countryOfCitizen: z.string().min(2).max(50),
  phoneNumber: z.string().min(2).max(50),
  studentType: z.string().min(2).max(50),
  regStatus: z.string().min(2).max(50),
  degree: z.string().min(2).max(50),
  yearLevel: z.string().min(2).max(50),
  plmemail: z.string().min(2).max(50),
  personalemail: z.string().min(2).max(50),
});

export default function StudentInformationPage() {
  const [isEditMode, setEditMode] = useState(false);
  const [initialValues, setInitialValues] = useState({}); // Store initial values

  const studentInformationForm = useForm({
    resolver: zodResolver(studentInformationSchema),
    defaultValues: {
      studentId: '202010016',
      firstName: 'Adrian Angelo',
      middleName: 'Davis',
      lastName: 'Abelarde',
      pedigree: 'Filipino',
      gender: 'male',
      civilStatus: 'Single',
      countryOfCitizen: 'Philippines',
      phoneNumber: '09123456789',
      studentType: 'Old',
      regStatus: 'Regular',
      degree: 'Bachelor of Science in Information Technology',
      yearLevel: '4th Year',
      plmemail: 'aadabelarde2020@plm.edu.ph',
      personalemail: 'abelardeadrianangelo@gmail.com',
    },
  });

  const { watch, handleSubmit, reset } = studentInformationForm;

  // Call watch to subscribe to form value changes
  const watchedValues = watch();

  useEffect(() => {
    // On first render, set the initial values
    setInitialValues(studentInformationForm.getValues());
  }, [studentInformationForm.getValues, studentInformationForm]);

  // Compare watched values with initial values to check for changes
  const hasChanges = !isEqual(watchedValues, initialValues);

  // Toggle edit mode and reset form if cancelled
  const toggleEditMode = () => {
    if (isEditMode) {
      reset(initialValues); // Reset to initial values if changes are discarded
    } else {
      setEditMode(true);
    }
  };

  function onSubmit(values) {
    console.log({ values });
    toast({
      title: 'Success!',
      description: 'Your information has been updated.',
    });
    setInitialValues(values); // Update initial values with submitted values
    setEditMode(false); // Turn off edit mode after submitting
  }

  return (
    <Container className>
      <h1 className='mb-4 mt-32 font-medium text-3xl'>Information</h1>

      <Form {...studentInformationForm}>
        <form
          onSubmit={studentInformationForm.handleSubmit(onSubmit)}
          className='space-y-4 mb-10'
        >
          <section className='w-full flex justify-between gap-4 py-6 items-start'>
            <h1 className='font-medium text-2xl'>Student Profile</h1>

            {!isEditMode && (
              <Button onClick={toggleEditMode}>
                <Edit className='w-4 h-4 mr-2' /> Edit Information
              </Button>
            )}
            {isEditMode && (
              <Button
                type='submit'
                onClick={handleSubmit(onSubmit)}
                disabled={!hasChanges} // Button is disabled if there are no changes
              >
                Save Changes
              </Button>
            )}
          </section>

          <FormField
            control={studentInformationForm.control}
            name='studentId'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student ID</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={!isEditMode}
                    placeholder='Student ID'
                  />
                </FormControl>
                <FormDescription>
                  This is your `Student Number`.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <section className='flex gap-4 items-center w-full'>
            <FormField
              control={studentInformationForm.control}
              name='firstName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={!isEditMode}
                      placeholder='First Name'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={studentInformationForm.control}
              name='middleName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={!isEditMode}
                      placeholder='Middle Name'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={studentInformationForm.control}
              name='lastName'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={!isEditMode}
                      placeholder='Last Name'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <section className='flex gap-4 items-center w-full'>
            <FormField
              control={studentInformationForm.control}
              name='pedigree'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Pedigree</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={!isEditMode}
                      placeholder='Pedigree'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={studentInformationForm.control}
              name='gender'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Gender</FormLabel>
                  <Select
                    disabled={!isEditMode}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select gender' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value='male'>Male</SelectItem>
                      <SelectItem value='female'>Female</SelectItem>
                      <SelectItem value='prefernottosay'>
                        Prefer not to say
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={studentInformationForm.control}
              name='civilStatus'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Civil Status</FormLabel>
                  <Select
                    disabled={!isEditMode}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select civil status' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {civilStatusOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={studentInformationForm.control}
              name='countryOfCitizen'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Country of Status</FormLabel>
                  <Select
                    disabled={!isEditMode}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select country of status' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={studentInformationForm.control}
              name='phoneNumber'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type='tel'
                      disabled={!isEditMode}
                      placeholder='Phone Number'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <section className='flex gap-4 items-center w-full'>
            <FormField
              control={studentInformationForm.control}
              name='studentType'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Student Type</FormLabel>
                  <Select
                    disabled={!isEditMode}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select student type' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {status.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={studentInformationForm.control}
              name='regStatus'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Registration Status</FormLabel>
                  <Select
                    disabled={!isEditMode}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select registration status' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {regStatus.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>

          <section className='flex gap-4 items-center w-full'>
            <FormField
              control={studentInformationForm.control}
              name='degree'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Degree</FormLabel>
                  <Select
                    disabled={!isEditMode}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select degree' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {degree.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={studentInformationForm.control}
              name='yearLevel'
              render={({ field }) => (
                <FormItem className='w-full'>
                  <FormLabel>Year Level</FormLabel>
                  <Select
                    disabled={!isEditMode}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder='Select year level' />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {yearLevelOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
        </form>
      </Form>
    </Container>
  );
}
