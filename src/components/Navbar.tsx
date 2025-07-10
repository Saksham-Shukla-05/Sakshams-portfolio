"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import DarkMode from "@/components/DarkMode";
import { SidebarTrigger } from "./ui/sidebar";

export default function NavigationMenuDemo() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="gap-5  px-4 hidden md:flex">
        <NavigationMenuItem>
          <NavigationMenuLink
            className={
              isActive("/")
                ? "md:text-lg text-sm text-purple-500 dark:text-purple-500 font-semibold"
                : "md:text-lg text-sm text-black dark:text-white"
            }
          >
            <Link href={"/"}>Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={
              isActive("/About")
                ? " md:text-lg text-sm  text-purple-500 dark:text-purple-500 font-semibold"
                : " md:text-lg text-sm  text-black dark:text-white"
            }
          >
            <Link href={"/About"}>About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={
              isActive("/Projects")
                ? "md:text-lg text-sm   text-purple-500 dark:text-purple-500 font-semibold"
                : "md:text-lg text-sm   text-black dark:text-white"
            }
          >
            <Link href="/Projects">Projects</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className={
              isActive("/Contact")
                ? "md:text-lg text-sm text-purple-500 dark:text-purple-500 font-semibold"
                : "md:text-lg text-sm   text-black dark:text-white"
            }
          >
            <Link href={"/Contact"}>Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink className="md:text-lg text-sm">
            <Link href={"/Resume"}>Resume</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <DarkMode />
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="md:hidden   flex gap-2 justify-between items-center">
        <DarkMode />
        <SidebarTrigger />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
