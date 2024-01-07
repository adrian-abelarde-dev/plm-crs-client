import * as z from 'zod';

export const StudentSchema = z.object({
  studentNo: z.string(),
  aySem: z.string(),
  semester: z.string(),
  academicYear: z.string(),
  fullName: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  nameExtension: z.string(),
  maidenName: z.string(),
  birthDate: z.date(),
  birthPlace: z.string(),
  birthSex: z.string(),
  genderIdentity: z.string(),
  civilStatus: z.string(),
  phoneNum: z.string(),
  emailAddress: z.string(),
  entryYear: z.string(),
  program: z.string(),
  studentType: z.string(),
  block: z.string(),
  college: z.string(),
  regCode: z.string(),
  yearLevel: z.string(),
  scholasticStatus: z.string(),
  enrolled: z.boolean(),
  cphoneNum: z.string(),
  cstreetAddress: z.string(),
  cprovince: z.string(),
  czipCode: z.string(),
  pphoneNum: z.string(),
  pstreetAddress: z.string(),
  pprovince: z.string(),
  pzipCode: z.string(),
});