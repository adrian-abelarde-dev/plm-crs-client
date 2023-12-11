import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// delete when backend is ready
export function getRandomDate() {
  // Generate a random year between 1970 and 2023
  const year = Math.floor(Math.random() * (2023 - 1970 + 1)) + 1970;
  // Generate a random month between 1 and 12
  const month = Math.floor(Math.random() * 12) + 1;
  // Generate a random day between 1 and 31
  const day = Math.floor(Math.random() * 31) + 1;
  // Generate a random hour between 0 and 23
  const hour = Math.floor(Math.random() * 24);
  // Generate a random minute between 0 and 59
  const minute = Math.floor(Math.random() * 60);
  // Generate a random second between 0 and 59
  const second = Math.floor(Math.random() * 60);
  // Create a new Date object with the random components
  const randomDate = new Date(year, month - 1, day, hour, minute, second);

  return randomDate;
}

// filters data based on row selection, used for TableMRT's row selection
export function handleRowSelectionChange(data, template, rowSelection) {
  // returns only the selected rows. can be multiple or not
  return data.filter((item) => {
    const accessorKey = template[0]?.accessorKey;
    return (
      rowSelection && item && accessorKey && rowSelection[item[accessorKey]]
    );
  });
}

export function testPromise(id) {
  return new Promise((resolve, reject) => {
    // Perform asynchronous operations, such as API calls, database queries, etc.
    // Simulating an asynchronous operation
    const success = Math.random() < 0.5; // Simulate success or failure randomly
    if (success) {
      console.log(id);
      resolve('Operation succeeded');
    } else {
      reject('Operation failed');
    }
  });
}

// returns this format -> Thursday, May 24, 1984 at 6:34 AM
export function formatDateString(dateObject) {
  if (!dateObject || !(dateObject instanceof Date)) {
    return 'Invalid Date';
  }

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const readableDateString = dateObject.toLocaleString('en-US', options);
  return readableDateString;
}

// compute for total units in an array of objects [{}]
export function totalUnits(key, data) {
  return data?.reduce((total, item) => total + item[key], 0);
}

// used for computing total units for a specific type of load
export function computeLoads(key, data, typeOfLoad) {
  return data?.reduce((total, item) => {
    // Check if the subject's typeOfLoad matches the specified typeOfLoad
    if (item.typeOfLoad === typeOfLoad) {
      return total + item[key];
    }
    return total;
  }, 0);
}

// ?used for generating this: GRADING SHEET(S) FOR S.Y 2020 - 2021 2ND SEMESTER
// * Check `/faculty/encoding-grades` for implementation
export const generateGradingSheetTitle = (aysem) => {
  const year = aysem.slice(0, 4);
  const semester = aysem.slice(4);
  const academicYear = `S.Y ${year} - ${parseInt(year) + 1}`;
  const semesterText = `${semester}${semester === '1' ? 'ST' : 'ND'} SEMESTER`;
  const result = `GRADING SHEET(S) FOR ${academicYear} ${semesterText}`;
  return result;
};
