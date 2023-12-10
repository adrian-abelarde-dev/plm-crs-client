import { Label } from '@/components/ui/label';
import React from 'react';

import Signature from './signature';

function SignaturesApprovals() {
  return (
    <div className='mt-8'>
      <div className='flex items-center justify-around mb-8'>
        <Signature name={'Thom Yorke'} position={'Instructor'} withDate />
        <Signature
          name={'Lisbon Annika Tamayo'}
          position={'College Secretary'}
          withDate
        />
      </div>

      <Label className='ml-20 font-semibold'>Recommending Approval:</Label>

      <div className='flex items-center justify-around mt-8'>
        <Signature
          name={'Denver Arthur Reyes'}
          position={'Acting Dean'}
          withDate
        />
        <Signature
          name={'Ariadna Jae Lim'}
          position={'Senior Vice President'}
          withDate
        />
      </div>
    </div>
  );
}

export default SignaturesApprovals;
