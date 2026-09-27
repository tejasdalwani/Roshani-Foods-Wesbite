document.addEventListener("DOMContentLoaded", () => {
  // Fade-up elements as they enter the viewport.
  const revealItems = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -50px 0px"
    }
  );

  revealItems.forEach((item, index) => {
    // Small stagger effect for cards in the same section.
    item.style.transitionDelay = `${Math.min(index % 6, 5) * 60}ms`;
    observer.observe(item);
  });

  // Smooth-scroll fallback for browsers that don't honor CSS scroll-behavior.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
