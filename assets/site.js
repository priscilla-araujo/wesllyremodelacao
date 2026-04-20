(() => {
  const header = document.querySelector("header");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menuPanel = document.querySelector("[data-menu-panel]");
  const lightSections = Array.from(document.querySelectorAll("section.bg-white"));

  const syncHeaderContrast = () => {
    if (!header || !lightSections.length) {
      return;
    }

    const headerRect = header.getBoundingClientRect();
    const headerMidpoint = headerRect.top + headerRect.height * 0.55;

    const overlapsLightSection = lightSections.some((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= headerMidpoint && rect.bottom >= headerMidpoint;
    });

    header.classList.toggle("site-header--contrast", overlapsLightSection);
  };

  if (menuToggle && menuPanel) {
    const closeMenu = () => {
      menuPanel.classList.remove("max-h-80", "pt-4");
      menuPanel.classList.add("max-h-0");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      menuPanel.classList.remove("max-h-0");
      menuPanel.classList.add("max-h-80", "pt-4");
      menuToggle.setAttribute("aria-expanded", "true");
    };

    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeMenu();
        return;
      }

      openMenu();
    });

    menuPanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }

      syncHeaderContrast();
    });
  }

  syncHeaderContrast();
  window.addEventListener("scroll", syncHeaderContrast, { passive: true });

  const reveals = document.querySelectorAll(".reveal-on-scroll");

  if (!reveals.length) {
    return;
  }

  reveals.forEach((element, index) => {
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 0.08}s`;
  });

  if (!("IntersectionObserver" in window)) {
    reveals.forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.15
    }
  );

  reveals.forEach((element) => observer.observe(element));
})();
