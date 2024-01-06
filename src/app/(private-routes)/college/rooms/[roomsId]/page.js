import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

// Helper function to convert time strings to date objects for comparison
const timeStringToDate = (timeString) => {
  const [timePart, meridiem] = timeString.split(' ');
  let [hours, minutes] = timePart.split(':').map(Number);
  if (meridiem === 'PM' && hours !== 12) {
    hours += 12;
  } else if (meridiem === 'AM' && hours === 12) {
    hours = 0; // Midnight should be '00:00' in 24-hour time
  }
  return new Date().setHours(hours, minutes, 0, 0);
};

// Dummy data for scheduled events (you would replace this with your actual data)
const scheduleData = [
  {
    room: 'GCA-106',
    day: 'Sunday',
    startTime: '09:00 AM',
    endTime: '10:00 AM',
    title: 'Thesis Writing',
    color: '#FACC15',
  },

  {
    room: 'GCA-106',
    day: 'Wednesday',
    startTime: '10:00 AM',
    endTime: '11:30 AM',
    title: 'Software Engineering',
    color: '#FACC15',
  },
  // Add more scheduled events as needed
];

// Helper function to convert a 24-hour time to 12-hour format
const convertTo12HourFormat = (timeString) => {
  let [hours, minutes] = timeString.split(':').map(Number);
  const suffix = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // Convert to 12-hour format, 0 becomes 12
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')} ${suffix}`;
};

// The main scheduler component
export default function SchedulerTable({ params }) {
  // Initialize a placeholder object outside of the map function
  let classPlaceholders = {};

  // Helper function to reset class placeholders for a new day
  const resetClassPlaceholders = (days) => {
    classPlaceholders = days.reduce((acc, day) => {
      acc[day] = {
        classTitle: '',
        counter: 0,
        maxBox: 0,
        startBoxIndex: -1,
        endBoxIndex: -1,
      };
      return acc;
    }, {});
  };

  // Call this function to reset placeholders at the beginning of each table rendering
  resetClassPlaceholders([
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]);

  // Filter the scheduleData to include only events that match the params.roomId
  const filteredScheduleData = scheduleData.filter(
    (event) => event.room === params.roomsId,
  );

  // Generate time slots from 7:00 AM to 6:50 PM with 10-minute intervals
  const timeslots = Array.from({ length: 12 * 6 - 1 }, (_, index) => {
    const hour = Math.floor(index / 6) + 7; // starts at 7 AM
    const minute = (index % 6) * 10;
    const timeString = `${hour.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}`;
    return convertTo12HourFormat(timeString);
  });

  // Add a field inside scheduleData to store the number of boxes for example: 9 AM to 10 AM = 7 boxes
  const filteredScheduleDataWithBoxes = filteredScheduleData.map((event) => {
    const startTime = timeStringToDate(event.startTime);
    const endTime = timeStringToDate(event.endTime);
    let boxes = (endTime - startTime) / 600000;
    boxes = boxes + 1;
    return { ...event, boxes };
  });

  // Helper function to check if the current time slot has an event scheduled
  const getScheduleDetails = (day, timeString) => {
    const time = timeStringToDate(timeString);
    for (let event of filteredScheduleDataWithBoxes) {
      if (day === event.day) {
        const startTime = timeStringToDate(event.startTime);
        const endTime = timeStringToDate(event.endTime);
        if (time >= startTime && time <= endTime) {
          return {
            title: event.title,
            color: event.color,
            boxes: event.boxes,
            startTime: event.startTime,
            endTime: event.endTime,
          };
        }
      }
    }
    return { title: '', color: 'transparent' }; // Set default color to 'transparent'
  };

  // Helper function to determine the middle box for the title
  const findMiddleBox = (boxes) => {
    return boxes % 2 === 0 ? boxes / 2 : Math.floor(boxes / 2) + 1;
  };

  return (
    <main className='w-full p-6'>
      <section className='flex gap-2 w-full justify-between'>
        <h1 className='font-medium text-2xl'>Room Plotting</h1>{' '}
        <Link
          className='flex items-center cursor-pointer'
          href='/college/rooms'
        >
          <ChevronLeft className='w-4 h-4 mr-2' /> Back
        </Link>
      </section>
      <Button
        variant='outline'
        className='hover:bg-transparent cursor-text mt-6'
      >
        Room: {params.roomsId}
      </Button>
      <Table className='space-x-10 space-y-10'>
        <TableHeader>
          <TableRow>
            <TableHead>Time</TableHead>
            <TableHead className='text-center'>Sunday</TableHead>
            <TableHead className='text-center'>Monday</TableHead>
            <TableHead className='text-center'>Tuesday</TableHead>
            <TableHead className='text-center'>Wednesday</TableHead>
            <TableHead className='text-center'>Thursday</TableHead>
            <TableHead className='text-center'>Friday</TableHead>
            <TableHead className='text-center'>Saturday</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {timeslots.map((timeString, index) => {
            // Calculate the index for the current time slot
            const currentSlotIndex = timeslots.indexOf(timeString);
            return (
              <TableRow className='space-x-10 space-y-10' key={index}>
                <TableCell className='font-medium'>{timeString}</TableCell>
                {[
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ].map((day) => {
                  const scheduleDetails = getScheduleDetails(day, timeString);
                  let content = '';
                  let cellColor = scheduleDetails.color;
                  let cellStyle = {};

                  // If an event is scheduled for this time slot
                  if (scheduleDetails.title) {
                    // Initialize or update the placeholder for the current class
                    if (
                      !classPlaceholders[day].classTitle ||
                      classPlaceholders[day].classTitle !==
                        scheduleDetails.title
                    ) {
                      const startBoxIndex = currentSlotIndex;
                      const endBoxIndex =
                        startBoxIndex + scheduleDetails.boxes - 1;
                      classPlaceholders[day] = {
                        classTitle: scheduleDetails.title,
                        counter: 1,
                        maxBox: scheduleDetails.boxes,
                        startBoxIndex,
                        endBoxIndex,
                      };
                    } else {
                      // Increment the counter if we're within the same event
                      classPlaceholders[day].counter++;
                    }

                    // Check if we have reached the middle box
                    if (
                      classPlaceholders[day].counter ===
                      findMiddleBox(classPlaceholders[day].maxBox)
                    ) {
                      // content = scheduleDetails.title + ' ' + day;
                      content = (
                        <div className='text-xs'>
                          <h1>{scheduleDetails.title}</h1>
                          <p className='text-gray-700'>
                            {day} {scheduleDetails.startTime} -{' '}
                            {scheduleDetails.endTime}
                          </p>
                        </div>
                      );
                    }

                    // Check if this is the start or end box and apply the style
                    if (
                      currentSlotIndex === classPlaceholders[day].startBoxIndex
                    ) {
                      cellStyle.borderTopLeftRadius = '8px';
                      cellStyle.borderTopRightRadius = '8px';
                    }
                    if (
                      currentSlotIndex === classPlaceholders[day].endBoxIndex
                    ) {
                      cellStyle.borderBottomLeftRadius = '8px';
                      cellStyle.borderBottomRightRadius = '8px';
                    }
                  } else {
                    // Reset the placeholder when there's no event
                    classPlaceholders[day] = {
                      classTitle: '',
                      counter: 0,
                      maxBox: 0,
                      startBoxIndex: -1,
                      endBoxIndex: -1,
                    };
                    cellColor = 'transparent'; // Use transparent color for empty cells
                  }

                  cellStyle.backgroundColor = cellColor;

                  return (
                    <TableCell
                      key={day}
                      className='text-center shadow-sm '
                      style={cellStyle}
                    >
                      {content}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
