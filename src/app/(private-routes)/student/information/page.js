'use client';

import { PenSquare } from 'lucide-react';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const InputField = ({
  label,
  value,
  onChange,
  disabled,
  isDropdown,
  options,
}) => {
  if (isDropdown) {
    return (
      <div className='mb-4'>
        <label className='block text-sm font-bold mb-1'>{label}</label>
        <select
          className='border border-gray-300 px-3 py-2 rounded-md w-full'
          value={value}
          onChange={onChange}
          disabled={disabled}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  } else {
    return (
      <div className='mb-4'>
        <label className='block text-sm font-bold mb-1'>{label}</label>
        <input
          type='text'
          className='border border-gray-300 px-3 py-2 rounded-md w-full'
          placeholder={`Enter ${label}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    );
  }
};

function StudentInformationPage() {
  const [isFormEnabled, setIsFormEnabled] = useState(true);

  const [studentId, setStudentId] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [pedigree, setPedigree] = useState('');
  const [gender, setGender] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [countryofcitizen, setCountryoCitizen] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [studentType, setStudentType] = useState('');
  const [studentStatus, setStudentStatus] = useState('');
  const [studentDegree, setStudentDegree] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [plmemail, setPLMEmail] = useState('');
  const [personalemail, setPersonalEmail] = useState('');
  // ... add another fields
  const civilStatusOptions = [
    'Single',
    'Married',
    'Divorced',
    'Widowed',
    'Other',
  ];
  const status = ['new', 'old'];
  const regstatus = ['regular', 'irregular'];
  const degree = [
    'Bachelor of Science in Information Technology',
    'Bachelor of Science in Computer Science',
    'Bachelor of Science Information System',
    'Bachelor of Science in Computer Engineering',
  ];
  const yearlvl = ['1st', '2nd', '3rd', '4th', '5th'];
  const toggleFormEnable = () => {
    setIsFormEnabled((prevState) => !prevState);
  };

  return (
    <div className='container mx-auto mt-8 px-4 lg:px-0'>
      <div className='container'>
        <h1 className='mb-4 mt-32 font-medium text-3xl'>Information</h1>
        <h1 className='mb-4 mt-10 font-medium text-2xl'>Student Profile</h1>
      </div>
      <div className='mx-auto mt-8 ml-5 mr-5'>
        <form className='relative'>
          <div className='flex flex-wrap mb-4 -mx-1'>
            <div className='container'>
              <div className='w-1/3 md:w-768px sm:w-640px flex justify-between gap-4'>
                <InputField
                  label='Student ID'
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                />
              </div>
            </div>
            <div className='container flex justify-between gap-5'>
              <div className='w-1/3 md:w-768px sm:w-640px'>
                <InputField
                  label='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                />
              </div>
              <div className='w-1/3 md:w-768px sm:w-640px'>
                <InputField
                  label='Middle Name'
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                />
              </div>
              <div className='w-1/3 md:w-768px sm:w-640px'>
                <InputField
                  label='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                />
              </div>
            </div>
            <div className='container flex justify-between gap-3'>
              <div className='w-1/4 md:w-768px sm:w-640px'>
                <InputField
                  label='Pedigree'
                  value={pedigree}
                  onChange={(e) => setPedigree(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                />
              </div>
              <div className='w-1/4 md:w-768px sm:w-640px'>
                <InputField
                  label='Gender'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                />
              </div>
              <div className='w-1/4 md:w-768px sm:w-640px'>
                <InputField
                  label='Civil Status'
                  value={civilStatus}
                  onChange={(e) => setCivilStatus(e.target.value)}
                  disabled={!isFormEnabled}
                  isDropdown={true}
                  options={civilStatusOptions}
                />
              </div>
              <div className='w-1/4 md:w-768px sm:w-640px'>
                <InputField
                  label='Country of Citizenship'
                  value={countryofcitizen}
                  onChange={(e) => setCountryoCitizen(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                />
              </div>
              <div className='w-30 md:w-768px sm:w-640px'>
                <div className=''>
                  <div className='w-full md:w-768px sm:w-640px'>
                    <label className='block text-sm font-bold mb-1'>
                      Phone Number
                    </label>
                    <PhoneInput
                      country={'ph'} // default country
                      value={phoneNumber}
                      onChange={setPhoneNumber}
                      disabled={!isFormEnabled}
                      enableSearch='true'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='container flex justify-between gap-4'>
              <div className='w-1/4 md:w-768px sm:w-640px'>
                <InputField
                  label='Student Type'
                  value={studentType}
                  onChange={(e) => setStudentType(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                  isDropdown={true}
                  options={status}
                />
              </div>
              <div className='w-1/4 md:w-768px sm:w-640px'>
                <InputField
                  label='Registration Status'
                  value={studentStatus}
                  onChange={(e) => setStudentStatus(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                  isDropdown={true}
                  options={regstatus}
                />
              </div>
              <div className='w-1/4 md:w-768px sm:w-640px'>
                <InputField
                  label='Degree Program'
                  value={studentDegree}
                  onChange={(e) => setStudentDegree(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                  isDropdown={true}
                  options={degree}
                />
              </div>
              <div className='w-1/4 md:w-768px sm:w-640px'>
                <InputField
                  label='Year Level'
                  value={yearLevel}
                  onChange={(e) => setYearLevel(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                  isDropdown={true}
                  options={yearlvl}
                />
              </div>
            </div>
            <div className='container flex justify-between gap-4'>
              <div className='w-1/2 md:w-768px sm:w-640px'>
                <InputField
                  label='Official PLM Email'
                  value={plmemail}
                  onChange={(e) => setPLMEmail(e.target.value)}
                  disabled={!isFormEnabled || isFormEnabled}
                />
              </div>
              <div className='w-1/2 md:w-768px sm:w-640px'>
                <InputField
                  label='Personal Email'
                  value={personalemail}
                  onChange={(e) => setPersonalEmail(e.target.value)}
                  disabled={!isFormEnabled}
                />
              </div>
            </div>
          </div>
          <div className='relative'>
            <button
              type='button'
              className={`px-4 py-2 rounded-md absolute right-0 flex justify-between  ${
                isFormEnabled ? 'bg-yellow-500' : 'bg-yellow-500'
              }`}
              onClick={toggleFormEnable}
            >
              <PenSquare className='h-6 w-4 mr-2' />
              {isFormEnabled ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default StudentInformationPage;
