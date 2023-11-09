'use client';

import { Stepper } from '@mantine/core';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';

const CustomStepper = ({
  steps = [],
  initialStep = 0,
  onStepChange,
  // withButtons = false, Add if needed
  children,
  ...rest
}) => {
  const [activeStepper, setActiveStepper] = useState(initialStep);
  const [fade, setFade] = useState(false);

  const nextStep = () =>
    setActiveStepper((current) =>
      current < steps.length ? current + 1 : current,
    );

  const prevStep = () =>
    setActiveStepper((current) => (current > 0 ? current - 1 : 0));

  useEffect(() => {
    setFade(true);
    onStepChange && onStepChange(activeStepper);
  }, [fade, activeStepper, onStepChange]);

  if (!fade) {
    return <div className='w-full animate-pulse bg-zinc-400 h-32' />;
  }

  return (
    <>
      <Stepper
        active={activeStepper}
        onStepClick={setActiveStepper}
        breakpoint='sm'
        color='yellow'
        {...rest}
      >
        {steps.map((step, index) => (
          <Stepper.Step
            key={index}
            label={step.label}
            description={step.description}
          />
        ))}
      </Stepper>
      {children ? children : null}
      <section className='w-full flex justify-center items-center gap-2 mt-4'>
        <Button onClick={prevStep} variant='outline'>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </section>
    </>
  );
};

export default CustomStepper;
