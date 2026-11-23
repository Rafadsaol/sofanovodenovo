import { MessageCircle } from "lucide-react";
import { quoteUrl } from "@/content/site";

export function QuoteLink({ className = "", children = "Solicitar orçamento" }: {
  className?: string;
  children?: string;
}) {
  return (
    <a className={`button button-primary ${className}`} href={quoteUrl}>
      <MessageCircle size={19} aria-hidden="true" />
      {children}
    </a>
  );
}
