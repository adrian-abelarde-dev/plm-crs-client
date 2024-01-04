import * as z from 'zod';

export const MeetingSchema = z.object({
  meetingId: z.string(),
  label: z.string(),
  meetingType: z.string(),
  college: z.string(),
  status: z.string(),
});
