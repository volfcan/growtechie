"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import MagicButton3 from "./MagicButton2";
import { GoSignIn } from "react-icons/go";

export function NavbarDemo() {
  return (
    <div className="relative flex w-full items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "flex fixed inset-x-0 top-10 z-50 mx-auto max-w-screen-xl",
        className,
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex items-center space-x-1">
          <MenuItem setActive={setActive} active={active} item="Community">
            <div className="flex flex-col space-y-4 text-xs">
              <HoveredLink href="/web-dev">Discord</HoveredLink>
              {/* <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink> */}
              {/* <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink> */}
            </div>
          </MenuItem>
          <IoIosArrowDown size={12} />
        </div>
        <div className="flex items-center space-x-1">
          <MenuItem setActive={setActive} active={active} item="Product">
            <div className="  grid grid-cols-2 gap-10 p-4 text-xs">
              <ProductItem
                title="E-building"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Teachers"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind css components for your next project"
              />
            </div>
          </MenuItem>
          <IoIosArrowDown size={12} />
        </div>
        {/* <MenuItem setActive={setActive} active={active} item="Ekibimiz">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
        {/* <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-xs">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem> */}
        <Link href="#courses">Courses</Link>
      </Menu>
      <div className="flex space-x-4 w-full justify-end items-center">
        <div className=" text-xs font-medium">Get Started</div>
        <MagicButton3 title="Sign in" icon={<GoSignIn />} position="right" />
      </div>
    </div>
  );
}
