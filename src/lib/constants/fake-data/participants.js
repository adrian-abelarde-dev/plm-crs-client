import { Edit, Trash } from 'lucide-react';

export const fakeParticipantsRowActions = [
  {
    label: 'Edit Participant',
    icon: <Edit className='h-4 w-4 text-zinc-400' />,
  },
  {
    label: 'Delete Participant',
    icon: <Trash className='h-4 w-4' />,
  },
];
