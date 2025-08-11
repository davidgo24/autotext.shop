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


