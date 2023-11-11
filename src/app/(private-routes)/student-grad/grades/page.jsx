'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { grades } from '@/lib/constants/fake-grades';
import { Printer } from 'lucide-react';
import React, { useState } from 'react';

const GradStudentGrades = () => {
  const [selectedAysem, setSelectedAysem] = useState();

  return (
    <div className='mx-9 pr-9 w-full'>
      {/* Header */}
      <div className='mt-32 mb-[1.88rem]'>
        <Label className='font-medium text-4xl '>Grades</Label>
      </div>

      {/* Grades Table */}
      <div className='mb-20 mr-9'>
        <div className='flex  max-md:block justify-between'>
          <div className='w-[20rem] max-md:w-full'>
            <Select
              onValueChange={setSelectedAysem}
              defaultValue={selectedAysem}
            >
              <Label className='font-bold'>AY/SEM</Label>

              <SelectTrigger>
                <SelectValue
                  placeholder={<Label className='text-zinc-400'>Select</Label>}
                />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value='m@example.com'>m@example.com</SelectItem>
                <SelectItem value='m@google.com'>m@google.com</SelectItem>
                <SelectItem value='m@support.com'>m@support.com</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='mt-6'>
            <Button className='max-md:w-full' disabled={!selectedAysem}>
              <Printer className='h-4 w-4 mr-2' />
              Print SER
            </Button>
          </div>
        </div>

        {/* Grades Table */}
        <GradesTable selectedAysem={selectedAysem} />
      </div>
    </div>
  );
};

const GradesTable = ({ selectedAysem }) => {
  return (
    <div className='mt-5'>
      {selectedAysem ? (
        <Table className='w-full'>
          <TableHeader>
            <TableRow>
              <TableHead className='font-bold text-black'>
                Subject Code - Section
              </TableHead>
              <TableHead className='font-bold text-black'>
                Subject Title
              </TableHead>
              <TableHead className='font-bold text-black'>Units</TableHead>
              <TableHead className='font-bold text-black'>Grade</TableHead>
              <TableHead className='font-bold text-black'>Remarks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {grades.map((grade, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{grade.subjectCode}</TableCell>
                  <TableCell>{grade.subjectTitle}</TableCell>
                  <TableCell>{grade.units}</TableCell>
                  <TableCell>{grade.grade}</TableCell>
                  <TableCell>{grade.remarks}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <div className='w-full h-96 flex justify-center place-items-center text-zinc-400'>
          Please Select AY/SEM
        </div>
      )}
    </div>
  );
};

export default GradStudentGrades;
