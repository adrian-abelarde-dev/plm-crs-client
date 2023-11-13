import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import RequiredAsterisk from './required-asterisk';

// ? form -> initialized on the parent component using useForm()
// ? content -> array of objects with value and label
// ? title -> label for the form field
// ? placeholder -> placeholder for the select
// ? description -> description for the form field
// ? fieldName -> name of the field that is connected to the 'form'
// ? className -> optional
// ? disabled -> optional
// ? isOptional -> optional
export default function SelectFormField({
  form,
  content,
  title,
  placeholder,
  description, // optional
  fieldName,
  className,
  disabled,
  isOptional = false,
  customItem,
}) {
  const CustomItem = customItem;

  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <>
          <FormItem>
            <FormLabel className='text-text-zinc-900 font-medium flex gap-1 items-end'>
              {title}
              <RequiredAsterisk isOptional={isOptional} />
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
                  {content.map((item) => {
                    return (
                      <SelectItem value={item.value} key={item.value}>
                        {
                          customItem ? (
                            <CustomItem value={item.value} />
                          ) : (
                            <>{item.label}</>
                          ) // ? if customItem is not provided, use the label
                        }
                      </SelectItem>
                    );
                  })}
                </ScrollArea>
              </SelectContent>
            </Select>
            <FormDescription>{description}</FormDescription>
            <FormMessage /> {/* Error Message */}
          </FormItem>
        </>
      )}
    />
  );
}
