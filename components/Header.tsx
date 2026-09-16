"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          Ajax Fitness
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <nav id="site-nav" className={open ? "site-nav is-open" : "site-nav"}>
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "nav-link is-active" : "nav-link"}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <a className="nav-phone" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <Link
            className="button button-compact"
            href="/pricing"
            onClick={() => setOpen(false)}
          >
            Membership
          </Link>
        </nav>
      </div>
    </header>
  );
}
