import * as z from 'zod';

export const GradApplicationFormSchema = z.object({
  // Personal Information Section
  program: z.string({
    required_error: 'Please select a program.',
  }),
  firstName: z.string({
    required_error: 'Please enter your first name.',
  }),
  middleName: z.string({
    required_error: 'Please enter your middle name.',
  }),
  lastName: z.string({
    required_error: 'Please enter your last name.',
  }),
  sex: z.string({
    required_error: 'Please select',
  }),
  // birthDate: z.date({
  //   required_error: 'Please select your birth date.',
  // }),
  birthPlace: z.string({
    required_error: 'Please enter your birth place.',
  }),
  email: z.string({
    required_error: 'Please enter your email address.',
  }),
  contactNumber: z.string({
    required_error: 'Please enter your contact number.',
  }),
  phoneNumber: z.string({
    required_error: 'Please enter your phone number.',
  }),
  // Complete Address Section
  address: z.string({
    required_error: 'Please enter your address.',
  }),
  provinceCity: z.string({
    required_error: 'Please enter your province/city.',
  }),
  municipality: z.string({
    required_error: 'Please enter your municipality.',
  }),
  barangay: z.string({
    required_error: 'Please enter your barangay.',
  }),
  zipCode: z.string({
    required_error: 'Please enter your zip code.',
  }),
  // Educational Attainment Section
  // universityCollege, completeAddress, yearGraduated, courseTaken
  universityCollege: z.string({
    required_error: 'Please enter your university/college.',
  }),
  completeAddress: z.string({
    required_error: 'Please enter your complete address.',
  }),
  yearGraduated: z.string({
    required_error: 'Please enter your year graduated.',
  }),
  courseTaken: z.string({
    required_error: 'Please enter your course taken.',
  }),
  // Terms and Conditions Check
  termsAndConditions: z.boolean({
    required_error: 'Please check the terms and conditions.',
  }),
});
