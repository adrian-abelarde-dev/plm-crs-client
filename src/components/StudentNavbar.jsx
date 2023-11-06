import React from "react";

import { linksStudents } from "../app/data/linksData";
import { Bell } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const StudentNavbar = () => {
  const searchParams = useSearchParams();

  return (
    <>
      <div className="w-screen flex h-[4rem] justify-between place-items-center">
        <div className="pl-[2.25rem]">logo</div>

        {/* loop over linksStudents */}
        <div className="flex justify-between ">
          {linksStudents.map((link, index) => {
            return (
              <Link
                key={index}
                className="px-[1.25rem] py-[0.62rem] text-[#0f172a] rounded-full hover:border-[0.13px]"
                href="#"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="pr-[2.25rem]">
          <Bell />
        </div>
      </div>
    </>
  );
};

export default StudentNavbar;
