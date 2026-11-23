"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { categories, findService, quoteUrl, serviceQuoteUrl } from "@/content/site";

function Brand() {
  return (
    <Image src="/brand/logo.png" alt="Sofá Novo de Novo — início" width={120} height={56} preload />
  );
}

export function Header() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hash, setHash] = useState("");
  const desktopNav = useRef<HTMLElement>(null);
  const mobileNav = useRef<HTMLDialogElement>(null);
  const toggles = useRef<Record<string, HTMLButtonElement | null>>({});
  const slug = pathname.split("/")[1];
  const active = findService(slug);
  const quote = active ? serviceQuoteUrl(active.slug) : quoteUrl;

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (!desktopNav.current?.contains(event.target as Node)) setExpanded(null);
    }
    function updateHash() {
      setHash(window.location.hash);
    }
    function onViewportChange(event: MediaQueryListEvent) {
      if (event.matches) mobileNav.current?.close();
      setExpanded(null);
    }
    const desktop = window.matchMedia("(min-width: 64rem)");
    updateHash();
    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("hashchange", updateHash);
    desktop.addEventListener("change", onViewportChange);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("hashchange", updateHash);
      desktop.removeEventListener("change", onViewportChange);
    };
  }, [pathname]);

  function openMobile() {
    mobileNav.current?.showModal();
    setMobileOpen(true);
  }

  function closeMobile() {
    mobileNav.current?.close();
  }

  return (
    <header className="header">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <div className="shell header-inner">
        <Link href="/" className="brand-link"><Brand /></Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="menu-mobile"
          aria-haspopup="dialog"
          aria-label="Abrir menu"
          onClick={openMobile}
        >
          <Menu aria-hidden="true" />
        </button>
        <nav
          className="desktop-nav"
          aria-label="Navegação principal"
          ref={desktopNav}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape" && expanded) {
              toggles.current[expanded]?.focus();
              setExpanded(null);
              event.preventDefault();
            }
          }}
        >
          <ul className="nav-list">
            {categories.map(({ id, title, services }) => (
              <li key={id} className="nav-entry">
                <button
                  type="button"
                  ref={(node) => { toggles.current[id] = node; }}
                  aria-expanded={expanded === id}
                  aria-controls={`menu-${id}`}
                  data-active={active?.category === id || (pathname === "/" && hash === `#${id}`)}
                  onClick={() => setExpanded(expanded === id ? null : id)}
                >
                  {title} <ChevronDown size={15} aria-hidden="true" />
                </button>
                <div id={`menu-${id}`} className="dropdown" hidden={expanded !== id} inert={expanded !== id}>
                  <Link className="category-link" href={`/#${id}`} onClick={() => setExpanded(null)}>
                    {title} <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <ul className="dropdown-services">
                    {services.map(({ label, url, slug }) => (
                      <li key={slug}>
                        <Link href={url} aria-current={active?.slug === slug ? "page" : undefined} onClick={() => setExpanded(null)}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            <li><Link className="nav-about" href="/#sobre" aria-current={pathname === "/" && hash === "#sobre" ? "location" : undefined}>Sobre nós</Link></li>
          </ul>
        </nav>
        <a className="button button-primary header-quote" href={quote}>
          <MessageCircle size={17} aria-hidden="true" /> Pedir orçamento
        </a>
      </div>

      <dialog
        id="menu-mobile"
        className="mobile-menu"
        ref={mobileNav}
        aria-label="Menu de navegação"
        onClose={() => setMobileOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) closeMobile(); }}
      >
        {mobileOpen && (
          <div className="mobile-panel">
            <div className="mobile-heading">
              <Link href="/" className="brand-link" onClick={closeMobile}><Brand /></Link>
              <button className="menu-toggle" type="button" onClick={closeMobile} aria-label="Fechar menu" autoFocus>
                <X aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Navegação mobile" className="mobile-links">
              {categories.map(({ id, title, services }) => (
                <details key={id} name="categorias" open={active?.category === id || undefined}>
                  <summary>{title} <ChevronDown size={18} aria-hidden="true" /></summary>
                  <ul>
                    {services.map(({ label, url, slug }) => (
                      <li key={slug}>
                        <Link href={url} aria-current={active?.slug === slug ? "page" : undefined} onClick={closeMobile}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
              <Link className="mobile-about" href="/#sobre" onClick={closeMobile}>Sobre nós</Link>
            </nav>
            <div className="mobile-quote">
              <a className="button button-primary" href={quote} onClick={closeMobile}>
                <MessageCircle size={17} aria-hidden="true" /> Solicitar orçamento
              </a>
            </div>
          </div>
        )}
      </dialog>
    </header>
  );
}
