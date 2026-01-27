document.addEventListener("DOMContentLoaded", function () {
  const navParents = document.querySelectorAll(".nav-parent");

  navParents.forEach((parent) => {
    parent.addEventListener("click", function () {
      const navGroup = this.parentElement;
      const isOpen = navGroup.classList.contains("open");

      // Close all other dropdowns
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

  // Mobile Sidebar Toggle
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");

  if (hamburgerMenu && sidebar && sidebarOverlay) {
    hamburgerMenu.addEventListener("click", function () {
      sidebar.classList.toggle("active");
      sidebarOverlay.classList.toggle("active");
    });

    sidebarOverlay.addEventListener("click", function () {
      sidebar.classList.remove("active");
      sidebarOverlay.classList.remove("active");
    });

    // Close sidebar when clicking on menu items on mobile
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
});
