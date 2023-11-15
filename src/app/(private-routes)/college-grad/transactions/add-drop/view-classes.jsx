import {
  AlertDialog,
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
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { View } from 'lucide-react';

function ViewClasses({ addedClasses, droppedClasses }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className='text-zinc-900 justify-between hover:bg-zinc-100'
          variant='outline'
        >
          <View className='w-4 h-4 mr-2' />
          View Classes
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='sm:max-w-[60vw]'>
        <AlertDialogHeader>
          <AlertDialogTitle>Classes</AlertDialogTitle>
          <AlertDialogDescription>
            Added and Dropped Classes
          </AlertDialogDescription>
        </AlertDialogHeader>

        <ScrollArea className='h-96'>
          {/* Card */}
          <Card className='w-full mb-4'>
            <CardHeader>
              <CardTitle>
                Dropped Classes
                <Separator className='mt-4' />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell className='font-bold'>Class ID</TableCell>
                    <TableCell className='font-bold'>Class</TableCell>
                    <TableCell className='font-bold'>Class Title</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {droppedClasses.map((_class, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{_class.classId}</TableCell>
                        <TableCell>{_class.classCode}</TableCell>
                        <TableCell>{_class.classTitle}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Card */}
          <Card className='w-full mb-4'>
            <CardHeader>
              <CardTitle>
                Added Classes
                <Separator className='mt-4' />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell className='font-bold'>Class ID</TableCell>
                    <TableCell className='font-bold'>Class</TableCell>
                    <TableCell className='font-bold'>Class Title</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {addedClasses.map((_class, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{_class.classId}</TableCell>
                        <TableCell>{_class.classCode}</TableCell>
                        <TableCell>{_class.classTitle}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </ScrollArea>

        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ViewClasses;
