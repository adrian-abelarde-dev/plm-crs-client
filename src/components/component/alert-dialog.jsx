import { cn } from '@/lib/utils';
import { CheckCircle, XCircle } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { toast } from '../ui/use-toast';

// * label -> string, defines the label for the button
// * title -> string, defines the title of the alert dialog
// * description -> string, defines the description of the alert dialog
// * cancelLabel -> string, defines the label for the cancel button
// * confirmLabel -> string, defines the label for the confirm button
// * className -> string, defines the addition of className for the button
// * confirmFunction ->  function, defines the function to be executed when confirm button is clicked
function AlertConfirmModal({
  label,
  title,
  description,
  cancelLabel,
  confirmLabel,
  confirmFunction,
  className,
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={cn(
            'text-zinc-900 justify-between hover:bg-zinc-100',
            className,
          )}
          variant='ghost'
        >
          {label}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelLabel}</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              // executes function passed from parent
              confirmFunction();
            }}
          >
            {confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertConfirmModal;
