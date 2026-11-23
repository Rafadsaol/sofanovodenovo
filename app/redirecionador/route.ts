import { findService, officialQuoteUrl } from "@/content/site";

export function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("servico");
  const service = slug && findService(slug);
  if (!service) return Response.redirect(officialQuoteUrl, 307);

  const destination = new URL("https://api.whatsapp.com/send");
  destination.searchParams.set("phone", "5541996650037");
  destination.searchParams.set(
    "text",
    `Olá! Estava no site da Sofá Novo de Novo Curitiba e gostaria de solicitar um orçamento para ${service.label.toLowerCase()}.`,
  );
  return Response.redirect(destination, 307);
}
