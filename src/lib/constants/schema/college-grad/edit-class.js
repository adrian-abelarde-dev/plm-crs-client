import * as z from 'zod';

export const ClassSchema = z.object({
  subjectName: z.string(),
  professor: z.string(),
  classType: z.string(),
  section: z.string(),
  maximumSlots: z.string(),
});

export const ScheduleSchema = z.object({
  classDay: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  room: z.string(),
  meetingType: z.string(),
});
