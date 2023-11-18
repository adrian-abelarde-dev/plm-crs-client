import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { PhoneInput } from 'react-international-phone';
import 'react-phone-number-input/style.css';

import RequiredAsterisk from './required-asterisk';

export default function PhoneInputFormField({
  form,
  title,
  placeholder,
  description,
  fieldName,
  className,
  disabled,
  isOptional = false,
  badge,
  defaultCountry = 'PH', // Set the default country to Philippines
}) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-zinc-900 w-full font-medium flex gap-1 items-end justify-between'>
            <span>
              {title} <RequiredAsterisk isOptional={isOptional} />
            </span>{' '}
            {badge}
          </FormLabel>
          <FormControl>
            <PhoneInput
              placeholder={placeholder}
              {...field}
              defaultCountry={defaultCountry}
              className={className}
              disabled={disabled}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
