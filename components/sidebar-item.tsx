"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Button } from "./ui/button";

interface SidebarItemProps {
  label: string;
  iconSrc: string;
  href: string;
  isAdmin?: boolean;
}

export const SidebarItem = ({
  label,
  iconSrc,
  href,
  isAdmin,
}: SidebarItemProps) => {
  const pathname = usePathname();
  const active = pathname === href;

  if (!isAdmin && label === "Admin Page") return null;

  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="justify-start h-[52px]"
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          height={32}
          width={32}
          className="mr-5"
        />
        {label}
      </Link>
    </Button>
  );
};
