document.addEventListener("DOMContentLoaded", () => {
  // 1. Логіка Бургер-меню
  const burger = document.querySelector(".burger-menu");
  const headerBottom = document.querySelector(".header-bottom");

  if (burger && headerBottom) {
    burger.addEventListener("click", () => {
      headerBottom.classList.toggle("active");
      burger.classList.toggle("open");
    });
  }

  // 2. Модальне вікно
  const modal = document.getElementById("quoteModal");
  const triggers = document.querySelectorAll(".trigger-modal");
  const closeBtn = document.querySelector(".modal-close");

  if (modal) {
    triggers.forEach((btn) =>
      btn.addEventListener("click", () => modal.classList.add("active")),
    );
    if (closeBtn)
      closeBtn.addEventListener("click", () =>
        modal.classList.remove("active"),
      );

    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  // 3. Swiper Initialization (Слайдер Відгуків)
  if (
    typeof Swiper !== "undefined" &&
    document.querySelector(".testimonial-swiper")
  ) {
    const swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
      breakpoints: {
        // Від 768px (планшет) показувати 2 слайди
        768: {
          slidesPerView: 2,
        },
      },
    });
  }
});

// Скрипт для роботи вкладок (Tabs) у секції About
      document.addEventListener("DOMContentLoaded", () => {
        const tabs = document.querySelectorAll(".tab-btn");
        tabs.forEach((tab) => {
          tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            // Тут можна додати логіку зміни тексту нижче, якщо потрібно
          });
        });
      });


document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    if (!form.classList.contains('no-override')) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Відправлено!');
      });
    }
  });
});