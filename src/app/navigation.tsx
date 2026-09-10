"use client";
import { BrandLogo } from "./brand-logo";
import { useState } from "react";
import { ActionLink } from "./actions";

export function Navigation({ locale }: { locale: "pl" | "en" }) {
  const [open, setOpen] = useState(false);
  const en = locale === "en";
  const links = [
    ["#approach", en ? "Approach" : "Podejście"],
    ["#services", en ? "Consulting" : "Konsultacje"],
    ["#products", en ? "Products" : "Produkty"],
    ["#about", en ? "About me" : "O mnie"],
  ];
  return (
    <header className="site-header">
      <div className="wrap nav-wrap">
        <BrandLogo locale={locale} />
        <button
          className="menu-toggle action action--secondary action--compact"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? (en ? "Close" : "Zamknij") : "Menu"}
          <span className="action-icon" aria-hidden="true">
            {open ? "−" : "+"}
          </span>
        </button>
        <nav
          id="main-navigation"
          aria-label={en ? "Main navigation" : "Nawigacja główna"}
          className={open ? "navigation is-open" : "navigation"}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>(".menu-toggle")
                ?.focus();
            }
          }}
        >
          <div className="nav-links">
            {links.map(([href, label]) => (
              <ActionLink
                variant="nav"
                key={href}
                href={href}
                onClick={() => setOpen(false)}
              >
                {label}
              </ActionLink>
            ))}
          </div>
          <div
            className="nav-actions language-options"
            role="group"
            aria-label={en ? "Language" : "Język"}
          >
            {[
              {
                code: "pl",
                href: "/",
                image: "pl",
                label: "Polska wersja",
                title: "Polski",
              },
              {
                code: "en",
                href: "/en/",
                image: "gb",
                label: "English version",
                title: "English",
              },
            ].map((language) => (
              <ActionLink
                key={language.code}
                variant="nav"
                className="language-flag"
                href={language.href}
                hrefLang={language.code}
                lang={language.code}
                aria-label={language.label}
                aria-current={locale === language.code ? "page" : undefined}
                title={language.title}
              >
                <img
                  src={`/assets/flags/${language.image}.svg`}
                  width="24"
                  height="16"
                  alt=""
                />
              </ActionLink>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
