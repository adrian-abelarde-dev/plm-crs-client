import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Edit } from 'lucide-react';

import CollegeSectionsEditIndivOrMultiple from './college-sections-edit-content';

function EditSectionUndergrad({
  disabled,
  editIndivMultipleSections,
  selectedSections,
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={disabled}
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          <Edit className='w-4 h-4 mr-2' />
          Edit
        </Button>
      </DialogTrigger>
      <CollegeSectionsEditIndivOrMultiple
        editIndivMultipleSections={editIndivMultipleSections}
        selectedSections={selectedSections}
      />
    </Dialog>
  );
}

export default EditSectionUndergrad;
