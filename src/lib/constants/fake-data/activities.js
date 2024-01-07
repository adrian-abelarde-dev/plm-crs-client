'use client';

import { Edit, Trash } from 'lucide-react';

export const fakeActivitiesRowActions = [
  {
    label: 'Edit Activity',
    icon: <Edit className='h-4 w-4 text-zinc-400' />,
  },
  {
    label: 'Delete Activity',
    icon: <Trash className='h-4 w-4' />,
  },
];
