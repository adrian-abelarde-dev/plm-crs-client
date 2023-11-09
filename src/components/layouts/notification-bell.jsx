import { fakeNotification } from '@/lib/constants/fake-notification-data';
import { AlertCircle, Bell, CheckCheck } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { Label } from '../ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

const NotificationBell = () => {
  return (
    <Popover className='h-auto'>
      <PopoverTrigger>
        <Bell />
      </PopoverTrigger>
      <PopoverContent className='bg-white flex flex-col justify-center place-items-center absolute -right-1 w-[31.25rem]'>
        <Label className='text-xl text-black mb-[0.62rem] text-center mt-3 font-bold'>
          Notification
        </Label>

        {/* Notification List, display dynamically later */}
        {fakeNotification.map((notification) => (
          <NotificationMessage
            key={notification.id}
            type={notification.type}
            message={notification.message}
            timePosted={notification.timePosted}
            notificationType={notification.notificationType}
          />
        ))}
      </PopoverContent>
    </Popover>
  );
};

// ? type --> message type (e.g. system message, announcement, etc.)
// ? message --> message content
// ? timePosted --> parsed date from db
const NotificationMessage = ({
  type,
  message,
  timePosted,
  notificationType,
}) => {
  return (
    <Alert className='mx-5 mb-[0.31rem] py-[0.75rem] px-4'>
      {notificationType === 0 ? (
        <CheckCheck className='h-5 w-5 -mt-1' color='#18181B' />
      ) : notificationType === 1 ? (
        <AlertCircle className='h-5 w-5 -mt-1' color='#FBBF24' />
      ) : (
        <AlertCircle className='h-5 w-5 -mt-1' color='#dc2626' />
      )}
      <AlertCircle className='h-5 w-5 -mt-1' color='#FBBF24' />
      <AlertTitle className='font-bold text-[#0F172A] ml-1'>{type}</AlertTitle>
      <AlertDescription className='ml-1 flex flex-col'>
        <Label className='text-[#71717a] mt-[0.12rem]'>{message}</Label>
        <Label className='text-[#71717a] mt-1'>{timePosted}</Label>
      </AlertDescription>
    </Alert>
  );
};

export default NotificationBell;
