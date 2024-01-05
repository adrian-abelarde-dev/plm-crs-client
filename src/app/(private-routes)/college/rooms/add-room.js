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
import '@/lib/constants/fake-data/college-sections';
import { testPromise } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, XCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function AddRoom() {
  const { toast } = useToast();

  const buildingContents = [
    { label: 'Gym', value: 'gym' },
    { label: 'Gusaling Bagatsing', value: 'gusaling-bagatsing' },
    { label: 'Gusaling Katipunan', value: 'gusaling-katipunan' },
    { label: 'Gusaling Corazon Aquino', value: 'gusaling-corazon-aquino' },
    { label: 'PLM Canteen', value: 'plm-canteen' },
    { label: 'PLM Field', value: 'plm-field' },
    {
      label: 'University Activity Center',
      value: 'university-activity-center',
    },
    { label: 'Gusaling Villegas', value: 'gusaling-villegas' },
    { label: 'Tanghalang Bayan', value: 'tanghalang-bayan' },
    { label: 'Gusaling Atienza', value: 'gusaling-atienza' },
    { label: 'Gusaling Lacson', value: 'gusaling-lacson' },
    { label: 'SSC Office', value: 'ssc-office' },
    { label: 'PRMEC', value: 'prmec' },
    { label: 'PLM Chapel', value: 'plm-chapel' },
  ];

  const RoomSchema = z.object({
    roomId: z.string().min(1).optional(),
    roomName: z.string().min(1).optional(),
    building: z.string().min(1).optional(),
  });

  const addBlockForm = useForm({
    resolver: zodResolver(RoomSchema),
    defaultValues: {
      roomName: '',
      building: '',
    },
    values: {
      roomId: 'GCA 301	',
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
        <Button>Add Room</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Room</DialogTitle>
        </DialogHeader>
        <Form {...addBlockForm}>
          <form onSubmit={addBlockForm.handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-4'>
              <FormField
                control={addBlockForm.control}
                name='roomId'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room ID</FormLabel>
                    <FormControl>
                      <Input
                        disabled
                        placeholder='Enter Room ID...'
                        value={field.value}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addBlockForm.control}
                name='roomName'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Room Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Enter Room Name...'
                        {...field} // Ensure the field object is spread here
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addBlockForm.control}
                name='building'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Building</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select a building' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <ScrollArea
                          className={buildingContents.length >= 10 && 'h-96'}
                        >
                          {buildingContents.map((item) => {
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
