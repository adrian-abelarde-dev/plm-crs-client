'use client';

import TableMRT from '@/components/layouts/table-mrt';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { facultyClassAssingnmentData } from '@/lib/constants/fake-data/faculty-class-assignment';
import { facultyClassAssignmentTemplate } from '@/lib/constants/table-templates/faculty/current-class-assignment';
import { computeLoads, generateGradingSheetTitle } from '@/lib/utils';
import { useState } from 'react';

function PreviousPage() {
  const [selectedAysem, setSelectedAysem] = useState();

  const aysem = [
    {
      aysem: 20201,
    },
    {
      aysem: 20202,
    },
    {
      aysem: 20211,
    },
    {
      aysem: 20212,
    },
  ];

  return (
    <main className='p-6 flex flex-col'>
      <div className='mt-8 flex flex-col items-center'>
        <h1 className='text-lg font-semibold'>PREVIOUS CLASS</h1>

        {/* Enter AYSEM */}
        <div className='w-96 mt-4'>
          <Select onValueChange={setSelectedAysem} defaultValue={selectedAysem}>
            <h1 className='font-semibold'>AY/SEM</h1>

            <SelectTrigger>
              <SelectValue
                placeholder={<h1 className='text-zinc-400'>Enter Aysem</h1>}
              />
            </SelectTrigger>

            <SelectContent>
              {aysem.map((year, index) => {
                return (
                  <SelectItem key={index} value={year.aysem}>
                    {year.aysem}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        {/* Note */}
        <div className='mt-8 text-sm flex flex-col items-center gap-4'>
          {selectedAysem && (
            <h1 className='text-lg py-8 font-semibold'>
              {generateGradingSheetTitle(selectedAysem.toString())}
            </h1>
          )}
        </div>
      </div>

      {selectedAysem ? (
        <>
          <TableMRT
            template={facultyClassAssignmentTemplate}
            data={facultyClassAssingnmentData}
            searchPlaceholder='Search Class'
          />

          <Button
            variant='outline'
            className='cursor-context-menu place-self-end'
          >
            Total No. of Credits:{' '}
            {computeLoads('credits', facultyClassAssingnmentData)}
          </Button>
        </>
      ) : (
        <div className='w-full h-96 flex justify-center place-items-center text-zinc-400'>
          Please Select AY/SEM
        </div>
      )}
    </main>
  );
}

export default PreviousPage;
