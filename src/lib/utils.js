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
