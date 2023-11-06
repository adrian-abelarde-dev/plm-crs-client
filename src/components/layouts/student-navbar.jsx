"use client";

import React from "react";
import { linksStudents } from "../../lib/constants/links-data";
import { Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import PLMLogo from "../../assets/plm-logo.png";
import { cn } from "@/lib/utils";

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
                className={cn(
                  "transition-all ease-in-out duration-200 px-5 py-2 mx-2 text-black rounded-full outline outline-1 outline-transparent hover:outline-zinc-200",
                  currentPage.includes(link.path) &&
                    "bg-yellow-400 font-bold hover:bg-yellow-500 hover:outline-transparent"
                )}
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
