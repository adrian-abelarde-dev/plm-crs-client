'use client';

import { Button } from '@/components/ui/button';
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
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function EditGrades({ studentsData, setGrades }) {
  const grades = [
    {
      grade: '1.00',
    },
    {
      grade: '1.25',
    },
    {
      grade: '1.75',
    },
    {
      grade: '2.00',
    },
    {
      grade: '2.25',
    },
    {
      grade: '2.50',
    },
    {
      grade: '2.75',
    },
    {
      grade: '3.00',
    },
    {
      grade: '5.00',
    },
  ];

  const remarksData = [
    { remarks: 'Passed' },
    { remarks: 'Incomplete' },
    { remarks: 'Failed' },
    { remarks: 'Dropped Officially' },
    { remarks: 'Dropped Unofficially' },
    { remarks: 'Dropped due to COVID-19' },
  ];

  const changeGrade = (index, grade) => {
    // TODO: Update this later when we have the API
    const updatedFacultyGrades = [...studentsData];
    updatedFacultyGrades[0].students[index].finalGrade = grade;
    setGrades(updatedFacultyGrades);
  };

  const changeRemarks = (index, remarks) => {
    // TODO: Update this later when we have the API
    const updatedFacultyGrades = [...studentsData];
    updatedFacultyGrades[0].students[index].remarks = remarks;
    setGrades(updatedFacultyGrades);
  };

  const resetAllGradesAndRemarks = () => {
    // TODO: Update this later when we have the API
    const updatedFacultyGrades = studentsData.map((facultyData) => ({
      ...facultyData,
      students: facultyData.students.map((student) => ({
        ...student,
        finalGrade: '',
        remarks: '',
      })),
    }));

    setGrades(updatedFacultyGrades);
  };

  console.log(studentsData);
  return (
    <>
      {/* Check if the course code/section exists */}
      {studentsData.length === 0 ? (
        <div className='w-full h-96 flex justify-center place-items-center text-zinc-400'>
          Invalid Course Code
        </div>
      ) : (
        <>
          <Table className='mt-4'>
            <TableHeader>
              <TableRow className='font-bold'>
                <TableCell>Count</TableCell>
                <TableCell>Student Number</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Course</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Final Grade</TableCell>
                <TableCell>Remarks</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentsData[0]?.students?.map((data, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}.</TableCell>
                    <TableCell>{data.studentNumber}</TableCell>
                    <TableCell>{data.studentName}</TableCell>
                    <TableCell>{data.course}</TableCell>
                    <TableCell>{data.year}</TableCell>
                    {/* Final Grade Encoding */}
                    <TableCell className='w-40'>
                      <Select
                        onValueChange={(grade) => changeGrade(index, grade)}
                        value={data.finalGrade}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              <h1 className='text-zinc-400'>Select grade</h1>
                            }
                          />
                        </SelectTrigger>

                        <SelectContent>
                          {grades.map((grade, index) => {
                            return (
                              <SelectItem key={index} value={grade.grade}>
                                {grade.grade}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </TableCell>

                    {/* Final Grade Encoding */}
                    <TableCell>
                      <Select
                        onValueChange={(remarks) =>
                          changeRemarks(index, remarks)
                        }
                        value={data.remarks}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              <h1 className='text-zinc-400'>Select remarks</h1>
                            }
                          />
                        </SelectTrigger>

                        <SelectContent>
                          {remarksData.map((remarks, index) => {
                            return (
                              <SelectItem key={index} value={remarks.remarks}>
                                {remarks.remarks}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <div className='flex justify-end'>
            <Button className='mr-2' onClick={resetAllGradesAndRemarks}>
              Clear All
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default EditGrades;
