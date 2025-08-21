"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavLinkProps } from ".";
import { cn } from "@/lib/utils";

export function NavLink({ children, className, ...props }: NavLinkProps) {
  const pathname: string = usePathname();
  const isActive: boolean = props.href === pathname;
  const activeClasses: string = isActive
    ? "text-foreground"
    : "text-muted-foreground";
  return (
    <Link className={cn(activeClasses, className)} {...props}>
      {children}
    </Link>
  );
}
