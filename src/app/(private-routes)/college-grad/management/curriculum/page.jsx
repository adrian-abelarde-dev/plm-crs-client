import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import AffectedProgram from './affected-program';
import ListOfCurriculums from './list-of-curriculum';

function CollageGradManagementCurriculum() {
  return (
    <main className='p-6'>
      <Tabs defaultValue='listOfCurriculums' className='w-full mt-12'>
        <div className='flex justify-between mb-4 max-md:block'>
          <Label className='text-4xl font-medium'>Curriculum Management</Label>
          <TabsList>
            <TabsTrigger value='listOfCurriculums' className='px-10'>
              List of Curriculums
            </TabsTrigger>
            <TabsTrigger value='affectedPrograms' className='px-10'>
              Affected Programs
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value='listOfCurriculums' className='w-full'>
          <ListOfCurriculums />
        </TabsContent>
        <TabsContent value='affectedPrograms'>
          <AffectedProgram />
        </TabsContent>
      </Tabs>
    </main>
  );
}

export default CollageGradManagementCurriculum;
