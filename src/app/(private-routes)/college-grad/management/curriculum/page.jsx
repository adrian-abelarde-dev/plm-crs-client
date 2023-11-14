import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';

function CollageGradManagementCurriculum() {
  return (
    <main className='p-6'>
      <Tabs defaultValue='listOfCurriculums' className='w-full mt-12'>
        <div className='flex justify-between mb-4'>
          <Label className='text-4xl font-medium'>Curriculum Management</Label>
          <TabsList>
            <TabsTrigger value='listOfCurriculums'>
              List of Curriculums
            </TabsTrigger>
            <TabsTrigger value='affectedPrograms'>
              Affected Programs
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value='listOfCurriculums'>List of Curriculums</TabsContent>
        <TabsContent value='affectedPrograms'>Affected Programs</TabsContent>
      </Tabs>
    </main>
  );
}

export default CollageGradManagementCurriculum;
