import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '../ui/button';
import { Calendar } from '../ui/calendar';
import { Checkbox } from '../ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

// ? form -> initialized on the parent component using useForm()
// ? content -> array of objects with value and label
// ? title -> label for the form field
// ? placeholder -> placeholder for the select
// ? description -> description for the form field
// ? fieldName -> name of the field that is connected to the 'form'
// ? className -> optional
// ? disabled -> optional
export const SelectFormField = ({
  form,
  content,
  title,
  placeholder,
  description, // optional
  fieldName,
  className,
  disabled,
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <>
          <FormItem>
            <FormLabel className='text-[#09090B] font-bold'>{title}</FormLabel>
            <Select
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={className}
              disabled={disabled}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    placeholder={
                      <Label className='text-[#71717A]'>{placeholder}</Label>
                    }
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {content.map((item) => {
                  return (
                    <SelectItem value={item.value} key={item.value}>
                      {item.label}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormDescription>{description}</FormDescription>
            <FormMessage /> {/* Error Message */}
          </FormItem>
        </>
      )}
    />
  );
};

// ? form -> initialized on the parent component using useForm()
// ? title -> label for the form field
// ? placeholder -> placeholder for the input
// ? description -> description for the form field
// ? fieldName -> name of the field that is connected to the 'form'
// ? className -> optional
export const InputFormField = ({
  form,
  title,
  placeholder,
  description, // optional
  fieldName,
  className,
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-[#09090B] font-bold'>{title}</FormLabel>{' '}
          <FormControl>
            <Input placeholder={placeholder} {...field} className={className} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

// ? form -> initialized on the parent component using useForm()
// ? title -> label for the form field
// ? placeholder -> placeholder for the input
// ? description -> description for the form field
// ? fieldName -> name of the field that is connected to the 'form'
// ? className -> optional
export const DateFormField = ({
  form,
  title,
  placeholder,
  description, // optional
  fieldName,
  className,
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className='flex flex-col mt-[0.62rem]'>
          <FormLabel className='text-[#09090B] font-bold'>{title}</FormLabel>{' '}
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'pl-3 text-left font-normal',
                    !field.value && 'text-muted-foreground',
                    className,
                  )}
                >
                  {field.value ? (
                    format(field.value, 'PPP')
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode='single'
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date('1900-01-01')
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

// ? form -> initialized on the parent component using useForm()
// ? title -> label for the form field
// ? description -> description for the form field
// ? fieldName -> name of the field that is connected to the 'form'
// ? className -> optional
export const CheckBoxFormField = ({
  form,
  title,
  description, // optional
  fieldName,
  className,
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => {
        return (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0 p-4'>
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
                className={className}
              />
            </FormControl>
            <div className='space-y-1 leading-none'>
              <FormLabel>{title}</FormLabel>
              <FormDescription>{description}</FormDescription>
            </div>
          </FormItem>
        );
      }}
    />
  );
};
