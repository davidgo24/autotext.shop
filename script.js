// Simple page scripts

// Show the second reminder bubble ~5 seconds after load, with a subtle delay for mounting
const reminderBubble = document.getElementById('bubble-reminder');
let reminderTimeoutId;

function scheduleReminderAnimation(delayMs) {
  if (!reminderBubble) return;
  clearTimeout(reminderTimeoutId);
  reminderBubble.classList.remove('show');
  reminderTimeoutId = setTimeout(() => {
    reminderBubble.classList.add('show');
  }, delayMs);
}

// Start once DOM is ready
window.addEventListener('DOMContentLoaded', () => {
  // Current year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Initial schedule: 1s to mount then 4s to reveal ≈ 5s total from load
  scheduleReminderAnimation(1000 + 4000);

  // Simple A/B for CTA labels across the page
  const ctaLabels = [
    'Get More Repeat Customers',
    'Start Your Free Demo',
  ];
  const chosen = ctaLabels[Math.floor(Math.random() * ctaLabels.length)];
  document.querySelectorAll('[data-cta]').forEach((el) => {
    el.textContent = chosen;
  });

  // Spanish toggle: swaps key text content when user clicks ES button
  const es = {
    heroTitle: 'Llena tus bahías con más clientes recurrentes',
    heroSub: 'Recordatorios automatizados, recompensas y herramientas de reserva diseñadas para cambios de aceite y talleres de servicio.',
    founderHook: 'Construido por un graduado de UC Berkeley con la misión de ayudar a los pequeños talleres a crecer clientes recurrentes.',
    whyTitle: 'Por qué funciona',
    whyP: 'Los clientes se olvidan. Las calcomanías de ventana se ignoran. Pero los textos se leen. Enviamos un mensaje de recogida el día del servicio y un recordatorio inteligente antes del siguiente — para que tus bahías se mantengan llenas.',
    statLabel: 'de los textos se abren en 3 minutos.',
    moneyTitle: 'Los números',
    avgTicket: 'Ticket promedio de cambio de aceite',
    variableCost: 'Costo variable',
    profitPer: 'Ganancia por cambio de aceite',
    profitNote: '1 cliente que regresa = $25–$45 de ganancia. Tú te quedas con el resto.',
    worstLabel: 'Peor caso',
    worstValue: '$20 de ganancia',
    worstSub: 'Ticket bajo, costos altos',
    bestLabel: 'Mejor caso',
    bestValue: '$55 de ganancia',
    bestSub: 'Ticket alto, costos bajos',
    roiHeading: 'Lo que pueden generar 500 recordatorios inteligentes',
    ass1Title: 'Recordatorios mensuales programados',
    ass2Title: 'Toman acción (5%)',
    ass2Value: '25 clientes',
    bar1Sub: 'con $25 de ganancia por cambio de aceite',
    bar2Sub: 'con $40 de ganancia por cambio de aceite',
    roiFootnote: 'Supone 500 recordatorios mensuales a clientes con servicio pendiente; 5% regresa (25 cambios). El rango cubre $25–$40 de ganancia por cambio de aceite.',
    roiLine: 'Solo un cambio de aceite adicional por semana lo paga.',
    pricingTitle: 'Precio simple y transparente',
    priceSub: '+ Configuración gratis (Ahorra $1,000+ el primer año)',
    incSms: 'Primeros 1,000 SMS incluidos/mes',
    cancelAnytime: 'Sin contratos — cancela cuando quieras',
    perfBonus: 'Modelo de bonificación por desempeño (solo pagas extra cuando los textos traen clientes de vuelta)',
    overageTitle: 'Precios por excedente',
    pickupOverage: 'Mensajes de recogida sobre 1,000/mes → $0.10 c/u',
    reminderOverage: 'Recordatorios → $0.40 c/u (solo cuando se envían)',
    bannerText: 'Acceso temprano: Aceptando solo 10 talleres locales para nuestro programa piloto.',
    howTitle: 'Cómo funciona',
    step1Title: 'Conectamos tu taller',
    step1Sub: 'Toma menos de 10 min',
    step2Title: 'Se envía el texto de recogida',
    step2Sub: 'Se activa cuando el trabajo está listo',
    step3Title: 'Se envía el recordatorio',
    step3Sub: 'Antes del próximo servicio — sin trabajo extra',
    trustedLine: 'Ya confiado por talleres que recuperan miles en negocio recurrente perdido.',
    ctaBigTitle: 'Cada cliente que conservas es uno menos que debes reemplazar.',
    ctaA: 'Inicia tu demo gratis',
    smsReady: 'Hola John, ¡tu Toyota Camry está listo! Cambio de aceite con Sintético (5W-30) hecho a las 65,230 mi. Próximo servicio: 68,230 mi el 12 de dic. de 2025. Gracias por elegir Montebello Lube & Tune — 2130 W Beverly Blvd. Lun–Sáb 8–5. (323) 727-2883. Responde STOP para dejar de recibir mensajes.',
    smsReadyTime: 'Hoy, 12 de agosto, 3:42 PM',
    smsReminder: '¡Hola John! Tu Camry vence pronto: 68,230 mi el 12 de dic. de 2025. Último: 65,230 con Sintético (5W-30). Gracias por elegir Montebello Lube & Tune — 2130 W Beverly Blvd. Lun–Sáb 8–5. (323) 727-2883. Responde STOP para dejar de recibir mensajes.',
    smsReminderTime: '22 de noviembre de 2025 — 10:00 AM',
    quote1: '“Con este sistema ya no me preocupa si los clientes regresan, porque les recuerda automáticamente. Ahora puedo seguir con confianza qué autos vuelven cada vez. El retorno del 500% lo vale por completo.”',
    quote1By: '— Dueño de taller, Montebello',
    quote2: '“Configúralo y olvídalo. Nuestros recordatorios mantienen llenas las bahías.”',
    quote2By: '— Gerente de servicio, Condado de LA',
    founderText: 'Construyo tecnología para ayudar a que los pequeños negocios de servicios prosperen, no para ralentizarlos. Asegurémonos de recordarles a los clientes que ya te aprecian que vuelvan cuando llegue el momento de su próximo servicio.',
    founderSignature: '— David G., Fundador',
    busyCaption: 'Tus bahías — reservadas a tope, semana tras semana.',
  };

  const langToggle = document.getElementById('lang-toggle');
  let isSpanish = false;
  langToggle?.addEventListener('click', () => {
    isSpanish = !isSpanish;
    langToggle.textContent = isSpanish ? 'EN' : 'ES';
    if (isSpanish) {
      setText('hero-title', es.heroTitle);
      setText('hero-sub', es.heroSub);
      setText('founder-hook', es.founderHook);
      setText('why-title', es.whyTitle);
      setText('why-p', es.whyP);
      setText('stat-label', es.statLabel);
      setText('money-title', es.moneyTitle);
      setText('avg-ticket', es.avgTicket);
      setText('variable-cost', es.variableCost);
      setText('profit-per', es.profitPer);
      setText('profit-note', es.profitNote);
      setText('worst-label', es.worstLabel);
      setText('worst-value', es.worstValue);
      setText('worst-sub', es.worstSub);
      setText('best-label', es.bestLabel);
      setText('best-value', es.bestValue);
      setText('best-sub', es.bestSub);
      setText('roi-heading', es.roiHeading);
      setText('ass1-title', es.ass1Title);
      setText('ass2-title', es.ass2Title);
      setText('ass2-value', es.ass2Value);
      setText('bar1-sub', es.bar1Sub);
      setText('bar2-sub', es.bar2Sub);
      setText('roi-footnote', es.roiFootnote);
      setText('roi-line', es.roiLine);
      setText('pricing-title', es.pricingTitle);
      setText('price-sub', es.priceSub);
      setText('inc-sms', es.incSms);
      setText('cancel-anytime', es.cancelAnytime);
      setText('perf-bonus', es.perfBonus);
      setText('overage-title', es.overageTitle);
      setText('pickup-overage', es.pickupOverage);
      setText('reminder-overage', es.reminderOverage);
      setText('banner-text', es.bannerText);
      setText('how-title', es.howTitle);
      setText('step1-title', es.step1Title);
      setText('step1-sub', es.step1Sub);
      setText('step2-title', es.step2Title);
      setText('step2-sub', es.step2Sub);
      setText('step3-title', es.step3Title);
      setText('step3-sub', es.step3Sub);
      setText('trusted-line', es.trustedLine);
      setText('cta-big-title', es.ctaBigTitle);
      document.querySelectorAll('[data-cta]').forEach((el) => (el.textContent = es.ctaA));
      setText('sms-ready', es.smsReady);
      setText('sms-ready-time', es.smsReadyTime);
      setText('sms-reminder', es.smsReminder);
      setText('sms-reminder-time', es.smsReminderTime);
      setText('quote1', es.quote1);
      setText('quote1-by', es.quote1By);
      setText('quote2', es.quote2);
      setText('quote2-by', es.quote2By);
      setText('founder-text', es.founderText);
      setText('founder-signature', es.founderSignature);
      setText('busy-caption', es.busyCaption);
    } else {
      // Reload to reset to original English text
      window.location.reload();
    }
  });

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  // If user scrolls the hero into view again (e.g., after navigating), re-run once
  const hero = document.getElementById('hero');
  if (hero && reminderBubble) {
    const obs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // Restart animation when hero returns into view
          scheduleReminderAnimation(1200);
        }
      }
    }, { threshold: 0.5 });
    obs.observe(hero);
  }
});


