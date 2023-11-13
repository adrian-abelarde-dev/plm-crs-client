'use client';

import { Stepper } from '@mantine/core';
import { useEffect, useState } from 'react';

import { Button } from '../ui/button';

// * steps -> array, defines the steps for the stepper. requires the following format:
// ? [{
// ?     label: 'string', --> the label for the step
// ?     description: 'string', --> the description for the step
// ?     content: 'JSX', --> the content for the step
// ?     condition: boolean, --> the condition for the step to be disabled
// ? }]
// ? using condition is optional
// * initialStep -> number, defines the initial step for the stepper
// * onStepChange -> function, defines the function to be called when the step changes
// * children -> JSX, defines the JSX for the stepper
// * lastStepOnclick -> function, defines the function to be called when the last step button is clicked
// * lastStepButtonLabel -> string, defines the label for the last step button
// * completedPreview -> JSX, defines the JSX for the completed step preview
function CustomStepper({
  steps = [],
  initialStep = 0,
  onStepChange,
  // withButtons = false, Add if needed
  children,
  lastStepOnclick, // added this to define the last step button on click
  lastStepButtonLabel, // added this to define the last step button label
  completedPreview, // added this to define the preview for the completed step
  ...rest
}) {
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
}

export default CustomStepper;
