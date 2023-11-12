import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

// ? form -> initialized on the parent component using useForm()
// ? title -> label for the form field
// ? description -> description for the form field
// ? fieldName -> name of the field that is connected to the 'form'
// ? className -> optional
export default function CheckBoxFormField({
  form,
  title,
  description, // optional
  fieldName,
  className,
}) {
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => {
        return (
          <FormItem className='flex flex-row items-start space-x-3 space-y-0'>
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
}
