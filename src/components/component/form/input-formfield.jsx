import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import RequiredAsterisk from './required-asterisk';

// ? form -> initialized on the parent component using useForm()
// ? title -> label for the form field
// ? placeholder -> placeholder for the input
// ? description -> description for the form field
// ? fieldName -> name of the field that is connected to the 'form'
// ? className -> optional
// ? disabled -> optional
// ? isOptional -> optional
export default function InputFormField({
  form,
  title,
  placeholder,
  description, // optional
  fieldName,
  className,
  disabled,
  isOptional = false,
  badge,
  type = 'text',
  onChange,
  value,
}) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel className='text-zinc-900 w-full font-medium flex gap-1 items-end justify-between'>
            <span>
              {title} <RequiredAsterisk isOptional={isOptional} />
            </span>{' '}
            {badge}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className={className}
              disabled={disabled}
              type={type}
              onChange={onChange ? onChange : field.onChange} // ? if onChange is passed, use that, else use the default onChange from useForm()
              value={value || field.value}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
