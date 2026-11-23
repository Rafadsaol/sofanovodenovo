import { MessageCircle } from "lucide-react";
import { quoteUrl, serviceQuoteUrl } from "@/content/site";

export function QuoteLink({ className = "", children = "Solicitar orçamento", service }: {
  className?: string;
  children?: string;
  service?: string;
}) {
  return (
    <a className={`button button-primary ${className}`} href={service ? serviceQuoteUrl(service) : quoteUrl}>
      <MessageCircle size={19} aria-hidden="true" />
      {children}
    </a>
  );
}
