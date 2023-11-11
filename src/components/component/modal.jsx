import { cn } from '@/lib/utils';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { ScrollArea } from '../ui/scroll-area';

// ? title -> title of the modal
// ? trigger -> trigger of the modal (could be a button or anything)
// ? description -> description of the modal
// ? content -> content of the modal (could be a form or anything)
// ? footer -> footer of the modal, (could be buttons or anything)
export default function MessageModal({
  title,
  trigger,
  description,
  content,
  footer,
  dialogTriggerCn,
  dialogTriggerVariant,
}) {
  return (
    <Dialog>
      <DialogTrigger
        className={cn('cursor-pointer', dialogTriggerCn)}
        variant={dialogTriggerVariant}
      >
        {trigger}
      </DialogTrigger>
      <DialogContent className='max-md:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle className='font-[700] text-2xl'>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <ScrollArea className='h-96 w-full'>{content}</ScrollArea>

        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
