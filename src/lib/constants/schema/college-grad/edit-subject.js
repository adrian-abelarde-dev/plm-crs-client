import * as z from 'zod';

export const SubjectSchema = z.object({
  subjectCode: z.string(),
  subjectName: z.string(),
  units: z.string(),
  isSure: z.boolean(),
});
