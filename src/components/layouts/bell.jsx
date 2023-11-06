import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

const Bell = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <Bell />
      </PopoverTrigger>
      <PopoverContent className="bg-[#f3f3f2] pr-[2.25rem]">
        Place content for the popover here.
      </PopoverContent>
    </Popover>
  );
};

export default Bell;
