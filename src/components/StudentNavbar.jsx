import React from "react";

import { linksStudents } from "../app/data/linksData";
import { Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PLMLogo from "../assets/plm-logo.png";

const StudentNavbar = () => {
  const currentPage = usePathname();

  return (
    <>
      <div className="w-screen flex h-16 justify-between place-items-center pt-[2.25rem]">
        <div className="pl-[2.25rem]">
          {/* 50px = 3.125rem */}
          <Image src={PLMLogo} width={50} height={50} alt="PLM Logo" />
        </div>

        {/* loop over linksStudents */}
        <div className="flex justify-between ">
          {linksStudents.map((link, index) => {
            return (
              <Link
                key={index}
                // added conditional for active link
                className={`px-[1.25rem] py-[0.62rem] mx-[0.40rem] text-[#0f172a] rounded-full hover:border-[0.13px] ${
                  currentPage.includes(link.path) ? "bg-[#fbbf24]" : ""
                }`}
                href={link.path}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Create popup for bell */}
        <div className="pr-[2.25rem]">
          <Bell />
        </div>
      </div>
    </>
  );
};

export default StudentNavbar;
