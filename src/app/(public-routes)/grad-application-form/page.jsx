'use client';

import CheckBoxFormField from '@/components/component/form/checkbox-formfield';
import DateFormField from '@/components/component/form/date-formfield';
import InputFormField from '@/components/component/form/input-formfield';
import SelectFormField from '@/components/component/form/select-formfield';
import MessageModal from '@/components/component/modal';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { program, sex } from '@/lib/constants/fake-data/grad-application-form';
import {
  GradApplicationFormSchema,
  gradApplicationFormDefaultValues,
} from '@/lib/constants/schema/grad-application-form';
import { termsAndConditions } from '@/lib/constants/terms-agreement';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import philippines from 'philippines';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import PLMLogo from '../../../assets/plm-logo.png';

function GradApplicationForm() {
  const [provinceCity, setProvinceCity] = useState([]);
  const [municipality, setMunicipality] = useState([]);
  const form = useForm({
    resolver: zodResolver(GradApplicationFormSchema),
    defaultValues: { ...gradApplicationFormDefaultValues },
  });

  useEffect(() => {
    setProvinceCity(() => {
      return philippines.provinces.map((province) => {
        return { value: province.key, label: province.name };
      });
    });
  }, []);

  useEffect(() => {
    const filteredCities = philippines.cities.filter(
      (city) => city.province === form.getValues().provinceCity,
    );
    const mappedCities = filteredCities.map((city) => ({
      value: city.name,
      label: city.name,
      isCity: city.city,
    }));
    setMunicipality(mappedCities);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.getValues().provinceCity]);

  form.watch(); // solves the problem of not updating the form values

  const onSubmit = (values) => {
    toast({
      title: (
        <div className='flex flex-row'>
          <CheckCircle className='mr-2 h-4 w-4 text-green-400' />
          <Label>Application Submitted!</Label>
        </div>
      ),
      description: (
        <>
          Your Application is under review, and we&apos;ve emailed you to
          confirm its receipt and processing
        </>
      ),
    });

    console.log(values);
  };

  return (
    <Container>
      <ApplicationFormHeader />
      <Link href='/'>
        <ArrowLeft className='mb-10 h-6 w-6  text-zinc-500' />
      </Link>
      <ApplicationFormTitle />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          {/* Course/Program Selection */}

          <SelectFormField
            form={form}
            content={program}
            title={'Program'}
            placeholder={'Select Available Program / Course'}
            fieldName='program'
            isOptional={false}
          />

          {/* Personal Information */}
          <div className='mt-[3.12rem]'>
            <Label className='text-base font-[600]'>Personal Information</Label>
            <Separator className='mt-[0.62rem] h-1 bg-yellow-400' />
          </div>

          <div className='grid grid-flow-col gap-4 max-md:block'>
            <InputFormField
              className=''
              form={form}
              title={'First Name'}
              placeholder={'Juan'}
              fieldName={'firstName'}
              isOptional={false}
            />

            <InputFormField
              form={form}
              title={'Middle Name'}
              placeholder={'Nolasco'}
              fieldName={'middleName'}
              isOptional={false}
            />

            <InputFormField
              form={form}
              title={'Last Name'}
              placeholder={'Dela Cruz'}
              fieldName={'lastName'}
              isOptional={false}
            />
          </div>

          <div className='grid grid-flow-col gap-4 max-md:block'>
            <InputFormField
              form={form}
              title={'Name Extension'}
              placeholder={'(e.g. "Sr.", "Jr.", "II", "III")'}
              fieldName={'nameExtension'}
            />

            <InputFormField
              form={form}
              title={'Maiden Name'}
              placeholder={'Maiden Name'}
              fieldName={'maidenName'}
            />

            <SelectFormField
              form={form}
              content={sex}
              title={'Sex'}
              placeholder={'Select'}
              fieldName='sex'
              isOptional={false}
            />

            <DateFormField
              form={form}
              title={'Birth Date'}
              placeholder={'Select date'}
              fieldName={'birthDate'}
              isOptional={false}
            />

            <InputFormField
              form={form}
              title={'Birth Place'}
              placeholder={'Birth Place'}
              fieldName={'birthPlace'}
              isOptional={false}
            />
          </div>

          <div className='grid grid-flow-col gap-4 max-md:block'>
            <InputFormField
              form={form}
              title={'Email Address'}
              placeholder={'ava.wright@gmail.com'}
              fieldName={'email'}
              isOptional={false}
            />
            <InputFormField
              form={form}
              title={'Contact Number'}
              placeholder={'09123456789'}
              fieldName={'contactNumber'}
              isOptional={false}
            />

            <InputFormField
              form={form}
              title={'Phone Number'}
              placeholder={'(02) 0-0000000'}
              fieldName={'phoneNumber'}
              isOptional={false}
            />
          </div>

          {/* Complete Address */}
          <div className='mt-[3.12rem]'>
            <Label className='text-base font-[600]'>Complete Address</Label>
            <Separator className='mt-[0.62rem] h-1 bg-yellow-400' />
          </div>

          <div>
            <InputFormField
              form={form}
              title={'Address'}
              placeholder={'Address'}
              fieldName={'address'}
              isOptional={false}
            />
          </div>

          <div className='grid grid-flow-col gap-4 max-md:block'>
            <SelectFormField
              form={form}
              content={provinceCity}
              title={'Province / City'}
              placeholder={'Select'}
              fieldName='provinceCity'
              isOptional={false}
            />

            <SelectFormField
              form={form}
              content={municipality}
              title={'Municipality'}
              placeholder={'Select'}
              fieldName='municipality'
              disabled={form.getValues().provinceCity === ''}
              isOptional={false}
            />

            <InputFormField
              form={form}
              title={'Sub Municipality'}
              placeholder={''}
              fieldName='subMunicipality'
              disabled={form.getValues().municipality === ''}
            />

            <InputFormField
              form={form}
              content={sex} // change later
              title={'Barangay'}
              placeholder={''}
              fieldName='barangay'
              disabled={form.getValues().municipality === ''}
              isOptional={false}
            />

            <InputFormField
              form={form}
              title={'Zip Code'}
              placeholder={'(e.g. 1012)'}
              fieldName={'zipCode'}
              isOptional={false}
            />
          </div>

          {/* Educational Attainment */}
          <div className='mt-[3.12rem]'>
            <Label className='text-base font-[600]'>
              Educational Attainment
            </Label>
            <Separator className='mt-[0.62rem] h-1 bg-yellow-400' />
          </div>

          <div>
            <InputFormField
              form={form}
              title={'University / College'}
              placeholder={'University / College'}
              fieldName={'universityCollege'}
            />
          </div>

          <div>
            <InputFormField
              form={form}
              title={'Complete Address'}
              placeholder={'Complete School Address'}
              fieldName={'completeAddress'}
            />
          </div>

          <div className='grid grid-cols-3 gap-4 max-md:block'>
            <InputFormField
              form={form}
              title={'Year Graduated'}
              placeholder={'Year Graduated'}
              fieldName={'yearGraduated'}
            />

            <div className='col-span-2'>
              <InputFormField
                form={form}
                title={'Course Taken'}
                placeholder={'Program / Course'}
                fieldName={'courseTaken'}
              />
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className='flex justify-center'>
            <CheckBoxFormField
              form={form}
              title={
                <>
                  I have read and understand the{' '}
                  <MessageModal
                    title='Terms & Conditions'
                    trigger={<span>terms and conditions</span>}
                    content={<TermsAndAgreement />}
                  />
                </>
              }
              fieldName={'termsAndConditions'}
            />
          </div>

          {/* Submit Button */}
          <div className='flex justify-center'>
            <Button
              type='submit'
              disabled={!form.getValues().termsAndConditions}
            >
              Apply Now!
            </Button>
          </div>
        </form>
      </Form>
    </Container>
  );
}

function TermsAndAgreement() {
  return (
    <div>
      <div className='mb-6'>
        <Label className=''>
          Terms and Conditions for Student Application to Pamantasan ng Lungsod
          ng Maynila(PLM)
        </Label>
      </div>

      <div className='mb-6'>
        <Label>
          These Terms and Conditions govern the application process for
          prospective students seeking admission to Pamantasan ng Lungsod ng
          Maynila(PLM). By submitting an application to PLM, you agree to abide
          by the following terms and conditions:
        </Label>
      </div>

      {termsAndConditions.map((item, index) => (
        <div key={index} className='flex flex-col py-2'>
          <Label className='text-md font-bold'>
            {index + 1}. {item.title}
          </Label>
          {item.content.map((content, index) => {
            return (
              <ul key={index} className='ml-12 list-disc indent-2'>
                <li>
                  <Label>{content}</Label>
                </li>
              </ul>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function ApplicationFormHeader() {
  return (
    <div className='flex flex-row pb-10 pt-[1.88rem]'>
      <Image src={PLMLogo} width={50} height={50} alt='PLM Logo' />
      <div className='mx-10 mb-[0.28rem] mt-[0.66rem] flex flex-col'>
        <Label className='mb-[0.31rem] text-yellow-500'>
          Pamantasan ng Lungsod ng Maynila
        </Label>
        <Label className='text-[#64748B]'>
          University of the City of Manila
        </Label>
      </div>
    </div>
  );
}

function ApplicationFormTitle() {
  return (
    <div className='mb-[0.63rem] flex justify-center'>
      <div className='flex flex-col text-center'>
        <Label className='-mt-16 mb-1 text-3xl font-[800] text-[#0F172A] max-md:mt-0'>
          PLM ONLINE APPLICATION
        </Label>
        <Label className='text-2xl font-[600]'>Graduate School Program</Label>
        <Label className='text-base font-[500]'>
          Start your PLM journey here!
        </Label>
      </div>
    </div>
  );
}

export default GradApplicationForm;
