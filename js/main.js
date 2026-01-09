document.addEventListener("DOMContentLoaded", function () {
  const createMobileMenuButton = () => {
    const button = document.createElement("button");
    button.className = "mobile-menu-toggle";
    button.innerHTML = '<i class="fas fa-bars"></i>';
    button.style.cssText = `
      display: none;
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #56a2e8;
      color: white;
      border: none;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      cursor: pointer;
      z-index: 1000;
    `;

    button.addEventListener("click", () => {
      document.querySelector(".sidebar").classList.toggle("active");
    });

    document.body.appendChild(button);

    if (window.innerWidth <= 992) {
      button.style.display = "flex";
      button.style.alignItems = "center";
      button.style.justifyContent = "center";
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 992) {
        button.style.display = "flex";
        button.style.alignItems = "center";
        button.style.justifyContent = "center";
      } else {
        button.style.display = "none";
        document.querySelector(".sidebar").classList.remove("active");
      }
    });
  };

  createMobileMenuButton();

  document.addEventListener("click", (e) => {
    const sidebar = document.querySelector(".sidebar");
    const menuToggle = document.querySelector(".mobile-menu-toggle");

    if (
      sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      sidebar.classList.remove("active");
    }
  });
});
