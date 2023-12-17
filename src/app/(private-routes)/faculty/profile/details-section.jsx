import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import React from 'react';

function DetailsSection({ data }) {
  return (
    <>
      <div className='my-4'>
        <h1 className='font-semibold'>{data.title}</h1>
        <Separator className='h-1 bg-yellow-300' />

        {data.content.map((row, index) => {
          return (
            <div
              key={index}
              className={cn(
                'grid mt-4 gap-4 w-full max-md:grid-cols-1',
                `grid-cols-${row.cell.length}`,
              )}
            >
              {row.cell.map((cell, cellIndex) => {
                return (
                  <div key={cellIndex}>
                    <Label htmlFor={cell.label}>{cell.label}</Label>
                    <Input
                      id={cell.label}
                      disabled={cell.editable ? false : true}
                      value={cell.value}
                      onChange={cell.onChange ? cell.onChange : null}
                      type={cell.type ? cell.type : 'text'}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DetailsSection;
