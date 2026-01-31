document.addEventListener("DOMContentLoaded", () => {
  const page = document.getElementById("page");
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (href && href.endsWith(".html")) {
      link.addEventListener("click", e => {
        e.preventDefault();
        page.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = href;
        }, 400);
      });
    }
  });
});
