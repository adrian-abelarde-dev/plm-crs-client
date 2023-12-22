'use client';

import { PenSquare } from 'lucide-react';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
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
  const [Gender, setGender] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [CountryofCitizen, setCountryoCitizen] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [studentType, setStudentType] = useState('');
  const [studentStatus, setStudentStatus] = useState('');
  const [studentDegree, setStudentDegree] = useState('');
  const [yearLevel, setYearLevel] = useState('');
  const [PLMemail, setPLMEmail] = useState('');
  const [personalEmail, setPersonalEmail] = useState('');
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
  const Degree = [
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
    <div className='flex flex-col mt-4'>
      <h1 className='mt-32 font-medium text-3xl'>Information</h1>
      <h1 className='mt-10 font-medium text-2xl'>Student Profile</h1>
      <div className='container mx-auto mt-8'>
        <form>
          <div className='w-1/4'>
            <InputField
              label='Student ID'
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              disabled={!isFormEnabled}
            />
          </div>
          <div className='flex justify-between gap-4'>
            <div className='w-1/3'>
              <InputField
                label='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={!isFormEnabled}
              />
            </div>
            <div className='w-1/3'>
              <InputField
                label='Middle Name'
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                disabled={!isFormEnabled}
              />
            </div>
            <div className='w-1/3'>
              <InputField
                label='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={!isFormEnabled}
              />
            </div>
          </div>
          <div className='flex justify-between gap-4'>
            <div className='w-1/4'>
              <InputField
                label='Pedigree'
                value={pedigree}
                onChange={(e) => setPedigree(e.target.value)}
                disabled={!isFormEnabled}
              />
            </div>
            <div className='w-1/4'>
              <InputField
                label='Gender'
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
                disabled={!isFormEnabled}
              />
            </div>
            <div className='w-1/4'>
              <InputField
                label='Civil Status'
                value={civilStatus}
                onChange={(e) => setCivilStatus(e.target.value)}
                disabled={!isFormEnabled}
                isDropdown={true}
                options={civilStatusOptions}
              />
            </div>
            <div className='w-1/4'>
              <InputField
                label='Country of Citizenship'
                value={CountryofCitizen}
                onChange={(e) => setCountryoCitizen(e.target.value)}
                disabled={!isFormEnabled}
              />
            </div>
            <div className='w-1/4'>
              <div className=''>
                <label className='block text-sm font-bold mb-1'>
                  Phone Number
                </label>
                <PhoneInput
                  country={'ph'} // default country
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  disabled={!isFormEnabled}
                />
              </div>
            </div>
          </div>
          <div className='flex justify-between gap-4'>
            <div className='w-1/4'>
              <InputField
                label='Student Type'
                value={studentType}
                onChange={(e) => setStudentType(e.target.value)}
                disabled={!isFormEnabled}
                isDropdown={true}
                options={status}
              />
            </div>
            <div className='w-1/4'>
              <InputField
                label='Registration Status'
                value={studentStatus}
                onChange={(e) => setStudentStatus(e.target.value)}
                disabled={!isFormEnabled}
                isDropdown={true}
                options={regstatus}
              />
            </div>
            <InputField
              label='Degree Program'
              value={studentDegree}
              onChange={(e) => setStudentDegree(e.target.value)}
              disabled={!isFormEnabled}
              isDropdown={true}
              options={Degree}
            />
            <div className='w-1/4'>
              <InputField
                label='Year Level'
                value={yearLevel}
                onChange={(e) => setYearLevel(e.target.value)}
                disabled={!isFormEnabled}
                isDropdown={true}
                options={yearlvl}
              />
            </div>
          </div>
          <div className='flex justify-between gap-4'>
            <div className='w-1/2'>
              <InputField
                label='Official PLM Email'
                value={PLMemail}
                onChange={(e) => setPLMEmail(e.target.value)}
                disabled={!isFormEnabled}
              />
            </div>
            <div className='w-1/2'>
              <InputField
                label='Official PLM Email'
                value={personalEmail}
                onChange={(e) => setPersonalEmail(e.target.value)}
                disabled={!isFormEnabled}
              />
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
