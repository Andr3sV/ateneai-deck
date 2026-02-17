import { BoardContent } from "../index";

export const boardContent: BoardContent = {
  slide1: {
    headline: "La IA está redefiniendo el descubrimiento en {industry}.",
    content: "La búsqueda por IA está cambiando fundamentalmente cómo los clientes descubren y evalúan marcas. Las métricas tradicionales de visibilidad en búsqueda ya no capturan dónde se están tomando las decisiones.",
  },
  slide2: {
    headline: "La visibilidad en IA ya es terreno competitivo.",
    content: "Cuando las respuestas de IA citan a competidores con más frecuencia que tu marca, pierdes participación de mercado en el canal de más rápido crecimiento. Esto no es una métrica de marketing—es un riesgo de desplazamiento competitivo.",
  },
  slide3: {
    headline: "La visibilidad en IA se está convirtiendo en un KPI de consejo.",
    metrics: [
      { label: "Índice de Visibilidad IA", description: "Presencia general de marca en plataformas de IA" },
      { label: "Share of Citations", description: "Porcentaje de citas vs. competidores" },
      { label: "Momentum Competitivo", description: "Dirección de tendencia vs. mercado" },
      { label: "Ranking de Categoría", description: "Posición dentro de la categoría de industria" },
    ],
  },
  slide4: {
    headline: "La mayoría de compañías de {industry} no tienen gobernanza de visibilidad en IA.",
    content: "Sin monitoreo sistemático, las marcas operan ciegas a los cambios de mercado impulsados por IA. Esto crea brechas de gobernanza que impactan el posicionamiento estratégico.",
  },
  slide5: {
    headline: "Marco de gobernanza de visibilidad en IA: Monitorizar → Comparar → Ejecutar → Reportar.",
    framework: [
      { step: "Monitorizar", description: "Rastrear citas de IA, sentimiento y brechas competitivas en todas las plataformas" },
      { step: "Comparar", description: "Establecer métricas base y posicionamiento competitivo" },
      { step: "Ejecutar", description: "Priorizar acciones basadas en impacto de ingresos y riesgo competitivo" },
      { step: "Reportar", description: "KPIs listos para consejo e insights estratégicos" },
    ],
  },
  slide6: {
    headline: "La visibilidad en IA definirá el liderazgo de categoría en {industry}.",
    cta1: "Solicitar Briefing Ejecutivo de Visibilidad en IA",
    cta2: "Ejecutar Auditoría de Visibilidad en IA de 30 Días para {companyName}",
  },
  downloadPdf: "Descargar Brief Ejecutivo (PDF)",
};
