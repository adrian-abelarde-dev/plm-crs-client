'use client';

import {
  CheckBoxFormField,
  DateFormField,
  InputFormField,
  SelectFormField,
} from '@/components/component/form';
import { MessageModal } from '@/components/component/modal';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { program, sex } from '@/lib/constants/fake-grad-application-form-data';
import {
  GradApplicationFormSchema,
  gradApplicationFormDefaultValues,
} from '@/lib/constants/form-scheme';
import { termsAndConditions } from '@/lib/constants/terms-agreement';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import philippines from 'philippines';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import PLMLogo from '../../../assets/plm-logo.png';

const GradApplicationForm = () => {
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
    if (form.getValues().provinceCity && philippines.cities) {
      const filteredCities = philippines.cities.filter(
        (city) => city.province === form.getValues().provinceCity,
      );

      const mappedCities = filteredCities.map((city) => ({
        value: city.name,
        label: city.name,
        isCity: city.city,
      }));

      setMunicipality(mappedCities);
    }
    // bugs on updating form values
  }, [form, provinceCity]);

  const onSubmit = () => {
    toast({
      title: (
        <div className='flex flex-row'>
          <CheckCircle className='h-4 w-4 mr-2 text-green-400' />
          <Label>Application Submitted!</Label>
        </div>
      ),
      description: (
        <>
          Hi! {form.getValues().firstName}, Your Application is under review,
          and we&apos;ve emailed you to confirm its receipt and processing
        </>
      ),
    });
  };

  return (
    <div className='mx-10 mb-[2.94rem]'>
      <ApplicationFormHeader />
      <Link href='/'>
        <ArrowLeft className='h-6 w-6 text-zinc-500  mb-10' />
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
          />

          {/* Personal Information */}
          <div className='mt-[3.12rem]'>
            <Label className='font-[600] text-base'>Personal Information</Label>
            <Separator className='bg-yellow-400 h-1 mt-[0.62rem]' />
          </div>

          <div className='grid grid-flow-col gap-4 max-md:block'>
            <InputFormField
              className=''
              form={form}
              title={'First Name'}
              placeholder={'Juan'}
              fieldName={'firstName'}
            />

            <InputFormField
              form={form}
              title={'Middle Name'}
              placeholder={'Nolasco'}
              fieldName={'middleName'}
            />

            <InputFormField
              form={form}
              title={'Last Name'}
              placeholder={'Dela Cruz'}
              fieldName={'lastName'}
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
            />

            <DateFormField
              form={form}
              title={'Birth Date'}
              placeholder={'Select date'}
              fieldName={'birthDate'}
            />

            <InputFormField
              form={form}
              title={'Birth Place'}
              placeholder={'Birth Place'}
              fieldName={'birthPlace'}
            />
          </div>

          <div className='grid grid-flow-col gap-4 max-md:block'>
            <InputFormField
              form={form}
              title={'Email Address'}
              placeholder={'ava.wright@gmail.com'}
              fieldName={'email'}
            />
            <InputFormField
              form={form}
              title={'Contact Number'}
              placeholder={'09123456789'}
              fieldName={'contactNumber'}
            />

            <InputFormField
              form={form}
              title={'Phone Number'}
              placeholder={'(02) 0-0000000'}
              fieldName={'phoneNumber'}
            />
          </div>

          {/* Complete Address */}
          <div className='mt-[3.12rem]'>
            <Label className='font-[600] text-base'>Complete Address</Label>
            <Separator className='bg-yellow-400 h-1 mt-[0.62rem]' />
          </div>

          <div>
            <InputFormField
              form={form}
              title={'Address'}
              placeholder={'Address'}
              fieldName={'address'}
            />
          </div>

          <div className='grid grid-flow-col gap-4 max-md:block'>
            <SelectFormField
              form={form}
              content={provinceCity}
              title={'Province / City'}
              placeholder={'Select'}
              fieldName='provinceCity'
            />

            <SelectFormField
              form={form}
              content={municipality}
              title={'Municipality'}
              placeholder={'Select'}
              fieldName='municipality'
              disabled={form.getValues().provinceCity === ''}
            />

            <SelectFormField
              form={form}
              content={sex} // change later
              title={'Sub Municipality'}
              placeholder={'Select'}
              fieldName='subMunicipality'
              disabled={form.getValues().municipality === ''}
            />

            <InputFormField
              form={form}
              content={sex} // change later
              title={'Barangay'}
              placeholder={'Select'}
              fieldName='barangay'
              disabled={form.getValues().subMunicipality === ''}
            />

            <InputFormField
              form={form}
              title={'Zip Code'}
              placeholder={'(e.g. 1012)'}
              fieldName={'zipCode'}
            />
          </div>

          {/* Educational Attainment */}
          <div className='mt-[3.12rem]'>
            <Label className='font-[600] text-base'>
              Educational Attainment
            </Label>
            <Separator className='bg-yellow-400 h-1 mt-[0.62rem]' />
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
                    trigger={
                      <a className='underline font-bold'>
                        terms and conditions
                      </a>
                    }
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
    </div>
  );
};

const TermsAndAgreement = () => {
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
          <Label className='font-bold text-md'>
            {index + 1}. {item.title}
          </Label>
          {item.content.map((content, index) => {
            return (
              <ul key={index} className='indent-2 ml-12 list-disc'>
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
};

const ApplicationFormHeader = () => {
  return (
    <div className='flex flex-row pt-[1.88rem] pb-10'>
      <Image src={PLMLogo} width={50} height={50} alt='PLM Logo' />
      <div className='flex flex-col mx-10 mt-[0.66rem] mb-[0.28rem]'>
        <Label className='mb-[0.31rem] text-yellow-500'>
          Pamantasan ng Lungsod ng Maynila
        </Label>
        <Label className='text-[#64748B]'>
          University of the City of Manila
        </Label>
      </div>
    </div>
  );
};

const ApplicationFormTitle = () => {
  return (
    <div className='flex justify-center mb-[0.63rem]'>
      <div className='flex flex-col text-center'>
        <Label className='font-[800] text-3xl text-[#0F172A] mb-1 -mt-16 max-md:mt-0'>
          PLM ONLINE APPLICATION
        </Label>
        <Label className='text-2xl font-[600]'>Graduate School Program</Label>
        <Label className='text-base font-[500]'>
          Start your PLM journey here!
        </Label>
      </div>
    </div>
  );
};

export default GradApplicationForm;
