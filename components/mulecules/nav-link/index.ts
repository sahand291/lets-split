import { LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type NavLinkProps = PropsWithChildren<LinkProps & React.ComponentProps<"a">>;

export type { NavLinkProps };
export { NavLink } from "./nav-link";
