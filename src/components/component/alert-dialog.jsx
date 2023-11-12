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

function AlertConfirmModal({
  label,
  title,
  description,
  cancelLabel,
  confirmLabel,
  className,

  setResult,
  confirmFunction,
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
          <AlertDialogCancel onClick={() => setResult(false)}>
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              setResult(true);
              // executes function passed from parent
              confirmFunction()
                .then(() => {
                  toast({
                    title: (
                      <div className='flex flex-row'>
                        <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
                        <Label>Success!</Label>
                      </div>
                    ),
                    description: <>Changes has been Saved.</>,
                  });
                })
                .catch((err) => {
                  console.log('error: ', err);
                  toast({
                    title: (
                      <div className='flex flex-row'>
                        <XCircle className='mr-2 h-4 w-4 text-red-400' />
                        <Label>Error!</Label>
                      </div>
                    ),
                    description: <>Error saving your data</>,
                  });
                });
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
