import * as z from 'zod';

export const ClassSchema = z.object({
  subjectName: z.string(),
  professor: z.string(),
  classType: z.string(),
  section: z.string(),
  maximumSlots: z.string(),
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
