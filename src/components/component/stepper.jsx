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
  lastStepOnclick, // added this to define the last step button on click
  lastStepButtonLabel, // added this to define the last step button label

  completedPreview, // added this to define the preview for the completed step
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
        allowNextStepsSelect={false} // disabled next step
        {...rest}
      >
        {steps.map((step, index) => (
          <Stepper.Step
            key={index}
            label={step.label}
            description={step.description}
          >
            {step.content}
          </Stepper.Step>
        ))}

        <Stepper.Completed>{completedPreview}</Stepper.Completed>
      </Stepper>
      {children ? children : null}
      <section className='w-full flex justify-center items-center gap-2 mt-4'>
        <Button
          onClick={prevStep}
          variant='outline'
          disabled={activeStepper === 0} // disabled back button when on first step
        >
          Back
        </Button>

        {steps.length === activeStepper ? (
          <Button onClick={lastStepOnclick}>{lastStepButtonLabel}</Button>
        ) : (
          <Button onClick={nextStep} disabled={steps[activeStepper].condition}>
            Next step
          </Button>
        )}
      </section>
    </>
  );
};

export default CustomStepper;
