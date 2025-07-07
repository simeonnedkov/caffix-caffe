document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle")
  const mobileNav = document.getElementById("mobile-nav")

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", () => {
      // Toggle the display of the mobile navigation
      if (mobileNav.style.display === "flex") {
        mobileNav.style.display = "none"
      } else {
        mobileNav.style.display = "flex"
      }
    })
  }
})
