import { CheckCircle } from 'lucide-react';

const startOfClasses = 'December 25, 1992';

function CompletedPreview() {
  return (
    <div className='flex flex-col my-[1.88rem] justify-center place-items-center'>
      <CheckCircle className='h-auto w-[100px] mr-2 mb-5 text-green-500' />
      <h1 className='text-4xl font-medium mb-4'>
        You&apos;re Successfully Enrolled!
      </h1>
      <p className='text-center w-[46.875rem]'>
        You&apos;re added to your subject&apos;s MS Teams. The start of classes
        will be on <span className='font-medium'>{startOfClasses}</span>. Please
        download a copy of your SER to be{' '}
        <span className='font-medium'>officially enrolled</span> and be added to
        your subject&apos;s MS teams.
      </p>
    </div>
  );
}

export default CompletedPreview;
