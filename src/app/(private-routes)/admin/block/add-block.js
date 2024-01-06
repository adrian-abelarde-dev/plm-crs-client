'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { collegeDepartments } from '@/lib/constants/fake-data/college-sections';
import { testPromise } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, XCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function AddBlock() {
  const { toast } = useToast();

  const BlockSchema = z.object({
    blockId: z.string().min(1).optional(),
    block: z.string().min(1).optional(),
    collegeId: z.string().min(1).optional(),
    slots: z.string().min(1).optional(),
    enlisted: z.string().min(1).optional(),
  });

  const addBlockForm = useForm({
    resolver: zodResolver(BlockSchema),
    defaultValues: {
      block: '',
      collegeId: '',
      slots: '',
    },
    values: {
      blockId: 'AYSEM20231001',
      enlisted: '48',
    },
  });

  async function sampleConfirmFunction(id) {
    try {
      const result = await testPromise(id);

      if (result) {
        toast({
          title: (
            <div className='flex flex-row'>
              <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
              <h1>Success!</h1>
            </div>
          ),
          description: <>Changes have been Saved.</>,
        });
      }
    } catch (error) {
      console.error({ error });

      toast({
        variant: 'destructive',
        title: (
          <div className='flex flex-row'>
            <XCircle className='mr-2 h-4 w-4' />
            <h1>Error!</h1>
          </div>
        ),
        description: <>Error saving your data</>,
      });
    }
  }

  function onSubmit(values) {
    // Print all form values
    console.log(values);

    sampleConfirmFunction();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Block</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Block</DialogTitle>
        </DialogHeader>
        <Form {...addBlockForm}>
          <form onSubmit={addBlockForm.handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-4'>
              <FormField
                control={addBlockForm.control}
                name='blockId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Block ID</FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        placeholder='Enter Block ID...'
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addBlockForm.control}
                name='block'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Block</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter Block...'
                        {...field} // Ensure the field object is spread here
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addBlockForm.control}
                name='college'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>College ID</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a college' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <ScrollArea
                          className={collegeDepartments.length >= 10 && 'h-96'}
                        >
                          {collegeDepartments.map((item) => {
                            return (
                              <SelectItem value={item.value} key={item.value}>
                                {item.label}
                              </SelectItem>
                            );
                          })}
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addBlockForm.control}
                name='slots'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slots</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='Enter Slots...'
                        {...field} // Ensure the field object is spread here
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addBlockForm.control}
                name='enlisted'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enlisted</FormLabel>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='Enlisted...'
                        {...field} // Ensure the field object is spread here
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter className='w-full flex justify-end mt-4'>
              <DialogClose className='flex gap-2' asChild>
                <Button variant='outline'>Cancel</Button>
              </DialogClose>
              <Button type='submit'>Add Block</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
