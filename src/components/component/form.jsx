import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Badge } from '../ui/badge';
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
import { ScrollArea } from '../ui/scroll-area';
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
// ? isOptional -> optional
export const SelectFormField = ({
  form,
  content,
  title,
  placeholder,
  description, // optional
  fieldName,
  className,
  disabled,
  isOptional, // optional
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => {
        // console.log(field);

        return (
          <FormItem>
            <FormLabel className='text-[#09090B] font-bold'>
              {title}
              <BadgeForm isOptional={isOptional} />
            </FormLabel>
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
                <ScrollArea className={content.length >= 10 && 'h-96'}>
                  {content.map((item, index) => {
                    return (
                      <SelectItem value={item.value} key={index}>
                        {item.label}
                      </SelectItem>
                    );
                  })}
                </ScrollArea>
              </SelectContent>
            </Select>
            <FormDescription>{description}</FormDescription>
            <FormMessage /> {/* Error Message */}
          </FormItem>
        );
      }}
    />
  );
};

// ? form -> initialized on the parent component using useForm()
// ? title -> label for the form field
// ? placeholder -> placeholder for the input
// ? description -> description for the form field
// ? fieldName -> name of the field that is connected to the 'form'
// ? className -> optional
// ? disabled -> optional
// ? isOptional -> optional
export const InputFormField = ({
  form,
  title,
  placeholder,
  description, // optional
  fieldName,
  className,
  disabled,
  isOptional, // optional
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel className='text-[#09090B] font-bold'>
            {title} <BadgeForm isOptional={isOptional} />
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
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
};

// ? form -> initialized on the parent component using useForm()
// ? title -> label for the form field
// ? placeholder -> placeholder for the input
// ? description -> description for the form field
// ? fieldName -> name of the field that is connected to the 'form'
// ? className -> optional
// ? disabled -> optional
export const DateFormField = ({
  form,
  title,
  placeholder,
  description, // optional
  fieldName,
  className,
  isOptional,
}) => {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem className='flex flex-col mt-1'>
          <FormLabel className='text-[#09090B] font-bold'>
            {title}
            <BadgeForm isOptional={isOptional} />
          </FormLabel>{' '}
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

const BadgeForm = ({ isOptional = true }) => {
  return (
    <>
      {isOptional ? (
        <Badge className='px-2 ml-1 text-zinc-500' variant='ghost'>
          Optional
        </Badge>
      ) : (
        <Badge
          className='ml-1 bg-[#FEF2F2] text-[#DC2626] border-[#DC2626]'
          variant='ghost'
        >
          Required
        </Badge>
      )}
    </>
  );
};
