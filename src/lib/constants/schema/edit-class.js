import * as z from 'zod';

export const ClassSchema = z.object({
  subjectCode: z.string(),
  subjectName: z.string(),
  yearTerm: z.string(),
  professor: z.string(),
  classType: z.string(),
  section: z.string(),
  maximumSlots: z.string(),
  withDateRange: z.boolean(),
});

export const classSchemaDefaultValues = {
  subjectCode: '',
  subjectName: '',
  yearTerm: '',
  professor: '',
  classType: '',
  section: '',
  maximumSlots: '',
  withDateRange: false,
  startDate: '',
  endDate: '',
};
