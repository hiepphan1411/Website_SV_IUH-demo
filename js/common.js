// Prevent multiple initializations
let sidebarInitialized = false;

function initializeSidebar() {
  if (sidebarInitialized) return;
  sidebarInitialized = true;

  const navParents = document.querySelectorAll(".nav-parent");

  navParents.forEach((parent) => {
    parent.addEventListener("click", function (e) {
      e.preventDefault();
      const navGroup = this.parentElement;

      if (!navGroup.classList.contains("nav-group")) return;

      const isOpen = navGroup.classList.contains("open");

      document.querySelectorAll(".nav-group").forEach((group) => {
        group.classList.remove("open");
        group.querySelector(".nav-parent").classList.remove("active");
      });

      if (!isOpen) {
        navGroup.classList.add("open");
        this.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".nav-subitem").forEach((subitem) => {
    subitem.addEventListener("click", function (e) {
      e.stopPropagation();

      document.querySelectorAll(".nav-subitem").forEach((item) => {
        item.classList.remove("active");
      });

      this.classList.add("active");
    });
  });

  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const sidebar = document.getElementById("sidebar");
  let sidebarOverlay = document.getElementById("sidebarOverlay");

  if (!sidebarOverlay) {
    sidebarOverlay = document.createElement("div");
    sidebarOverlay.id = "sidebarOverlay";
    sidebarOverlay.className = "sidebar-overlay";
    document.body.appendChild(sidebarOverlay);
  }

  if (hamburgerMenu && sidebar) {
    hamburgerMenu.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.classList.toggle("active");
      sidebarOverlay.classList.toggle("active");
    });

    sidebarOverlay.addEventListener("click", function () {
      sidebar.classList.remove("active");
      sidebarOverlay.classList.remove("active");
    });

    const navItems = sidebar.querySelectorAll(".nav-item, .nav-subitem");
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove("active");
          sidebarOverlay.classList.remove("active");
        }
      });
    });
  }
}

// Toggle sidebar functionality
let sidebarToggleInitialized = false;

function initializeSidebarToggle() {
  if (sidebarToggleInitialized) return;
  sidebarToggleInitialized = true;

  const sidebarToggle = document.getElementById("sidebarToggle");
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main-content");

  let overlay = document.getElementById("sidebarOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "sidebarOverlay";
    overlay.className = "sidebar-overlay";
    document.body.appendChild(overlay);
  }

  if (sidebarToggle && sidebar && mainContent) {
    mainContent.classList.add("sidebar-open");

    sidebarToggle.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.classList.toggle("collapsed");
      const icon = this.querySelector("i");

      if (sidebar.classList.contains("collapsed")) {
        mainContent.classList.remove("sidebar-open");
        mainContent.classList.add("sidebar-collapsed");
        icon.className = "fas fa-chevron-right";
      } else {
        mainContent.classList.add("sidebar-open");
        mainContent.classList.remove("sidebar-collapsed");
        icon.className = "fas fa-chevron-left";
      }
    });
  }

  // Mobile hamburger menu
  if (hamburgerMenu && sidebar && overlay) {
    hamburgerMenu.addEventListener("click", function (e) {
      e.preventDefault();
      sidebar.classList.toggle("active");
      overlay.classList.toggle("active");
    });

    overlay.addEventListener("click", function () {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });

    // Close on navigation
    const navItems = sidebar.querySelectorAll(".nav-item, .nav-subitem");
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove("active");
          overlay.classList.remove("active");
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const observer = new MutationObserver(function (mutations) {
    const sidebarToggle = document.getElementById("sidebarToggle");
    if (sidebarToggle) {
      initializeSidebarToggle();
      observer.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
