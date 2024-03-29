import * as z from 'zod';

export const FacultySchema = z.object({
  facultyId: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  status: z.string(),
  email: z.string().email(),
  contactNumber: z.string(),
  sex: z.string(),
  address: z.string(),
  birthDate: z.date(),
});

export const facultySchemaDefaultValues = {
  facultyId: '',
  firstName: '',
  middleName: '',
  lastName: '',
  status: '',
  suffix: '',
  maidenName: '',
  email: '',
  contactNumber: '',
  sex: '',
  address: '',
  birthDate: '',
};
