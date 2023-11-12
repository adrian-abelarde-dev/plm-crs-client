export const collegeGradFacultyData = [
  {
    identity: '2018-00001',
    name: 'Juan Dela Cruz',
    firstName: 'Juan',
    middleName: 'Dela',
    lastName: 'Cruz',
    facultyId: '2018-00001',
    username: 'urquico',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Active',
    sex: 'male',
    suffix: 'Jr.',
    maidenName: '',
    email: 'test1@gmail.com',
    contactNumber: '09123456789',
    address: 'Brgy. 1, San Jose, Batangas',
    birthDate: getRandomDate(),
  },
  {
    identity: '2018-00002',
    name: 'Maria Dela Cruz',
    firstName: 'Maria',
    middleName: 'Dela',
    lastName: 'Cruz',
    facultyId: '2018-00002',
    username: 'maria',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Active',
    sex: 'female',
    suffix: 'Sr.',
    maidenName: 'Gonzalez',
    email: 'test2@gmail.com',
    contactNumber: '09123456788',
    address: 'Brgy. 2, San Jose, Batangas',
    birthDate: getRandomDate(),
  },
  {
    identity: '2018-00003',
    name: 'Juan Dela Cruz',
    firstName: 'Juan',
    middleName: 'Dela',
    lastName: 'Cruz',
    facultyId: '2018-00001',
    username: 'urquico',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Active',
    sex: 'male',
    suffix: 'Jr.',
    maidenName: '',
    email: 'test1@gmail.com',
    contactNumber: '09123456789',
    address: 'Brgy. 1, San Jose, Batangas',
    birthDate: getRandomDate(),
  },

  // Entry 2
  {
    identity: '2018-00004',
    name: 'Maria Dela Cruz',
    firstName: 'Maria',
    middleName: 'Dela',
    lastName: 'Cruz',
    facultyId: '2018-00002',
    username: 'maria',
    designation: 'Professor',
    college: 'CET-GP',
    status: 'Active',
    sex: 'female',
    suffix: 'Sr.',
    maidenName: 'Gonzalez',
    email: 'test2@gmail.com',
    contactNumber: '09123456788',
    address: 'Brgy. 2, San Jose, Batangas',
    birthDate: getRandomDate(),
  },

  // Entry 3
  {
    identity: '2018-00005',
    name: 'Mark Smith',
    firstName: 'Mark',
    middleName: '',
    lastName: 'Smith',
    facultyId: '2018-00003',
    username: 'mark',
    designation: 'Assistant Professor',
    college: 'CET-GP',
    status: 'Active',
    sex: 'male',
    suffix: '',
    maidenName: '',
    email: 'test3@gmail.com',
    contactNumber: '09123456787',
    address: 'Brgy. 3, San Jose, Batangas',
    birthDate: getRandomDate(),
  },
];

// delete when backend is ready
function getRandomDate() {
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
