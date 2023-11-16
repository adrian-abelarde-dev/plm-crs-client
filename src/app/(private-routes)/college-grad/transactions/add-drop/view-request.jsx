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
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/components/ui/use-toast';
import {
  Activity,
  BookA,
  Calendar,
  CheckCircle,
  Hash,
  HelpCircle,
  School,
  School2,
  User,
  View,
} from 'lucide-react';
import { useState } from 'react';

import ViewClasses from './view-classes';

function ViewRequest({ row }) {
  const [isApproved, setIsApproved] = useState(false);

  function handleChangeStatus() {
    toast({
      title: (
        <div className='flex flex-row'>
          <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
          <Label>Success!</Label>
        </div>
      ),
      description: <>Changes has been Saved.</>,
    });
    setIsApproved(false);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          <View className='w-4 h-4 mr-2' />
          View Request
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>View Request</AlertDialogTitle>
          <AlertDialogDescription>
            Add/Drop Request Details
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className='flex justify-between'>
          {row.original.status !== 'Approved' && (
            <div className='flex items-center space-x-2'>
              <Switch
                id='status'
                checked={isApproved}
                onCheckedChange={setIsApproved}
              />
              <Label htmlFor='status'>Approve Request</Label>
            </div>
          )}

          <ViewClasses
            addedClasses={row.original.addedClasses}
            droppedClasses={row.original.droppedClasses}
          />
        </div>

        <ScrollArea className='h-96'>
          {/* Request Details */}
          {/* Card */}
          <Card className='w-full mb-4'>
            <CardHeader>
              <CardTitle>
                Student Information
                <Separator className='mt-4' />
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Student Number */}
              <div className='flex flex-col'>
                <Label className='text-slate-500 font-normal'>Student ID</Label>
                <Label className='flex mt-[0.44rem]'>
                  <Hash className='h-4 w-4 mr-[0.62rem]' />
                  {row.original.studentNumber}
                </Label>
              </div>

              {/* Name */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>Name</Label>
                <Label className='flex mt-[0.44rem]'>
                  <User className='h-4 w-4 mr-[0.62rem]' />
                  {row.original.studentName}
                </Label>
              </div>

              {/* Program */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>Program</Label>
                <Label className='flex mt-[0.44rem]'>
                  <School className='h-4 w-4 mr-[0.62rem]' />
                  {row.original.programId}
                </Label>
              </div>

              {/* College */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>College</Label>
                <Label className='flex mt-[0.44rem]'>
                  <School2 className='h-4 w-4 mr-[0.62rem]' />
                  {row.original.collegeId}
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Card */}
          <Card className='w-full mb-4 mt-4'>
            <CardHeader>
              <CardTitle>
                Add/Drop Information
                <Separator className='mt-4' />
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Date Requested */}
              <div className='flex flex-col'>
                <Label className='text-slate-500 font-normal'>
                  Date Requested
                </Label>
                <Label className='flex mt-[0.44rem]'>
                  <Calendar className='h-4 w-4 mr-[0.62rem]' />
                  {row.original.dateRequested}
                </Label>
              </div>

              {/* Total Units (After Approval) */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>
                  Total Units (After Approval)
                </Label>
                <Label className='flex mt-[0.44rem]'>
                  <BookA className='h-4 w-4 mr-[0.62rem]' />
                  {row.original.totalUnits}
                </Label>
              </div>

              {/* Reason */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>Reason</Label>
                <Label className='flex mt-[0.44rem]'>
                  <HelpCircle className='h-4 w-4 mr-[0.62rem]' />
                  {row.original.reason}
                </Label>
              </div>

              {/* Status */}
              <div className='flex flex-col mt-5'>
                <Label className='text-slate-500 font-normal'>Status</Label>
                <Label className='flex mt-[0.44rem]'>
                  <Activity className='h-4 w-4 mr-[0.62rem]' />
                  {row.original.status}
                </Label>
              </div>

              {row.original.status === 'Approved' && (
                <div className='flex flex-col mt-5'>
                  <Label className='text-slate-500 font-normal'>
                    Approved by
                  </Label>
                  <Label className='flex mt-[0.44rem]'>
                    <User className='h-4 w-4 mr-[0.62rem]' />
                    {row.original.approvedBy}
                  </Label>
                </div>
              )}

              {row.original.status === 'Approved' && (
                <div className='flex flex-col mt-5'>
                  <Label className='text-slate-500 font-normal'>
                    Date Approved
                  </Label>
                  <Label className='flex mt-[0.44rem]'>
                    <Calendar className='h-4 w-4 mr-[0.62rem]' />
                    {row.original.dateApproved}
                  </Label>
                </div>
              )}
            </CardContent>
          </Card>
        </ScrollArea>

        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setIsApproved(false)}>
            Cancel
          </AlertDialogCancel>
          {row.original.status !== 'Approved' && (
            <AlertDialogAction onClick={() => handleChangeStatus}>
              Save
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ViewRequest;
