import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";
import { AlertCircle, Bell } from "lucide-react";
import { Label } from "../ui/label";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const NotificationBell = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Bell />
      </PopoverTrigger>
      <PopoverContent className="bg-[#f3f3f2] flex flex-col justify-center place-items-center absolute -right-1 w-[31.25rem]">
        <Label className="text-xl text-black mb-[0.62rem] text-center">Notification</Label>

        {/* Notification List, display dynamically later */}

        <NotificationMessage
          type="SYSTEM MESSAGE"
          message="You have successfully enlisted your subjects."
        />
        <NotificationMessage
          type="SYSTEM MESSAGE"
          message="You have successfully enlisted your subjects."
        />
      </PopoverContent>
    </Popover>
  );
};

const NotificationMessage = ({ type, message, timePosted }) => {
  return (
    <Alert className="mx-5 mb-[0.31rem] py-[0.75rem] px-4">
      <AlertCircle className="h-5 w-5 -mt-1" color="#FBBF24" />
      <AlertTitle className="font-bold color-[#0F172A] ml-1">{type}</AlertTitle>
      <AlertDescription className="ml-1">{message}</AlertDescription>
    </Alert>
  );
};

export default NotificationBell;
