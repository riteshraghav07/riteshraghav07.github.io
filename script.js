document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle functionality
  const themeSwitch = document.getElementById("theme-switch")
  const body = document.body

  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    body.className = savedTheme
    themeSwitch.checked = savedTheme === "dark-theme"
  } else {
    // Check if user prefers dark mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDark) {
      body.className = "dark-theme"
      themeSwitch.checked = true
    }
  }

  // Theme switch event listener
  themeSwitch.addEventListener("change", function () {
    if (this.checked) {
      body.className = "dark-theme"
      localStorage.setItem("theme", "dark-theme")
    } else {
      body.className = "light-theme"
      localStorage.setItem("theme", "light-theme")
    }
  })

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerHeight = document.querySelector("header").offsetHeight
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Form submission (prevent default for demo)
  const contactForm = document.querySelector(".contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      alert("Thank you for your message! This is a demo form, so no message was actually sent.")
      this.reset()
    })
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header")
    if (window.scrollY > 50) {
      header.style.padding = "10px 0"
    } else {
      header.style.padding = "20px 0"
    }
  })
})
