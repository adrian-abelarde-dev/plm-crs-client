import * as z from 'zod';

export const GradApplicationFormSchema = z.object({
  // Personal Information Section
  program: z.string({}),
  firstName: z.string({}),
  middleName: z.string({}),
  lastName: z.string({}),
  sex: z.string({}),
  birthDate: z.date({}),
  birthPlace: z.string({}),
  email: z.string({}),
  contactNumber: z.string({}),
  phoneNumber: z.string({}),
  // Complete Address Section
  address: z.string({}),
  provinceCity: z.string({}),
  municipality: z.string({}),
  barangay: z.string({}),
  zipCode: z.string({}),
  // Educational Attainment Section
  // universityCollege, completeAddress, yearGraduated, courseTaken
  universityCollege: z.string({}),
  completeAddress: z.string({}),
  yearGraduated: z.string({}),
  courseTaken: z.string({}),
  // Terms and Conditions Check
  termsAndConditions: z.boolean({}),
});

export const gradApplicationFormDefaultValues = {
  program: '',
  firstName: '',
  middleName: '',
  lastName: '',
  nameExtension: '',
  sex: '',
  birthDate: '',
  birthPlace: '',
  email: '',
  contactNumber: '',
  phoneNumber: '',
  address: '',
  provinceCity: '',
  municipality: '',
  subMunicipality: '',
  barangay: '',
  zipCode: '',
  universityCollege: '',
  completeAddress: '',
  yearGraduated: '',
  courseTaken: '',
  termsAndConditions: false,
};
