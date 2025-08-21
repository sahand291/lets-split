import { NavLink } from "@/components/mulecules/nav-link";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ShopLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="border-b bg-background/80 backdrop-blur sticky top-0">
        <div className="container flex items-center justify-between mx-auto px-4 py-4">
          <Link href="/">
            <span className="text-2xl font-semibold">🪓⌨️</span>
          </Link>

          <nav className="flex items-center gap-4">
            <NavLink href="/">
              <span>خانه</span>
            </NavLink>
            <NavLink href="/keyboards">
              <span>کیبوردها</span>
            </NavLink>
            <NavLink href="/#faq" className="scroll-smooth">
              <span>سوالات متداول</span>
            </NavLink>
            <NavLink href="/blog">
              <span>بلاگ</span>
            </NavLink>
            <Link href="/build">
              <Button size="sm">ساخت</Button>
            </Link>
          </nav>
          <div>
            <Link href="/auth" className="me-2">
              <Button variant="outline">ورود/ثبت‌نام</Button>
            </Link>
            <Button variant="outline" size="icon">
              🛒
            </Button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>mulecules:between</footer>
    </>
  );
}
