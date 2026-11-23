"use client";

import Image from "next/image";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { categories, quoteUrl } from "@/content/site";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [category, setCategory] = useState<string | null>(null);
  const [location, setLocation] = useState("");
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const categoryToggles = useRef<Record<string, HTMLButtonElement | null>>({});

  function close() {
    setCategory(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    function onOutsideClick(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) close();
    }
    const desktop = window.matchMedia("(min-width: 64rem)");
    function updateLocation() {
      setLocation(window.location.hash.slice(1));
    }
    updateLocation();
    window.addEventListener("hashchange", updateLocation);
    document.addEventListener("pointerdown", onOutsideClick);
    desktop.addEventListener("change", close);
    return () => {
      document.removeEventListener("pointerdown", onOutsideClick);
      desktop.removeEventListener("change", close);
      window.removeEventListener("hashchange", updateLocation);
    };
  }, []);

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key !== "Escape") return;
    if (category) {
      setCategory(null);
      categoryToggles.current[category]?.focus();
    } else if (mobileOpen) {
      setMobileOpen(false);
      toggle.current?.focus();
    } else {
      return;
    }
    event.preventDefault();
  }

  return (
    <header
      className="header"
      ref={header}
      onKeyDown={onKeyDown}
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) close();
      }}
    >
      <a className="skip-link" href="#conteudo" onClick={close}>Ir para o conteúdo</a>
      <div className="shell header-inner">
        <a href="#inicio" onClick={close} className="brand-link">
          <Image src="/brand/logo.png" alt="Sofá Novo de Novo" width={120} height={56} preload />
        </a>
        <button
          className="menu-toggle"
          type="button"
          ref={toggle}
          aria-expanded={mobileOpen}
          aria-controls="navegacao"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => mobileOpen ? close() : setMobileOpen(true)}
        >
          {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav
          id="navegacao"
          className="main-nav"
          data-open={mobileOpen}
          aria-label="Navegação principal"
          onBlur={(event) => {
            if (!mobileOpen && !event.currentTarget.contains(event.relatedTarget)) setCategory(null);
          }}
        >
          <ul className="nav-list">
            {categories.map(({ id, title, services }) => (
              <li key={id} className="nav-entry">
                <button
                  type="button"
                  ref={(node) => { categoryToggles.current[id] = node; }}
                  aria-expanded={category === id}
                  aria-controls={`menu-${id}`}
                  data-active={location === id}
                  onClick={() => setCategory(category === id ? null : id)}
                >
                  {title} <ChevronDown size={15} aria-hidden="true" />
                </button>
                <ul id={`menu-${id}`} className="dropdown" hidden={category !== id} inert={category !== id}>
                  <li><a className="category-link" href={`#${id}`} aria-current={location === id ? "location" : undefined} onClick={close}>Ver categoria</a></li>
                  {services.map(({ label, url }) => (
                    <li key={url}><a href={url} onClick={close}>{label}</a></li>
                  ))}
                </ul>
              </li>
            ))}
            <li><a className="nav-about" href="#sobre" aria-current={location === "sobre" ? "location" : undefined} onClick={close}>Sobre nós</a></li>
            <li className="nav-mobile-quote">
              <a className="button button-primary" href={quoteUrl} onClick={close}>
                <MessageCircle size={17} aria-hidden="true" /> Solicitar orçamento
              </a>
            </li>
          </ul>
        </nav>
        <a className="button button-primary header-quote" href={quoteUrl} onClick={close}>
          <MessageCircle size={17} aria-hidden="true" /> Pedir orçamento
        </a>
      </div>
    </header>
  );
}
