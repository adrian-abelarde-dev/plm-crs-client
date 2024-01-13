import * as z from 'zod';

export const UserSchema = z.object({
  userId: z.string(),
  userType: z.string(),
  unit: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  emailAddress: z.string().email(),
  // Date created will be auto-generated in backend
});

export const userSchemaDefaultValues = {
  userId: '2020-10016',
  userType: 'admin',
  unit: 'undergrad',
  firstName: 'John',
  middleName: 'Doe',
  lastName: 'Smith',
  emailAddress: 'john.doe2020@plmn.edu.ph',
};
