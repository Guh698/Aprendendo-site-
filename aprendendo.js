document.addEventListener("DOMContentLoaded", function () {
  const navLink = document.querySelector('nav a[href="#plataforms"]');
  const content = document.querySelector(".plataforms");

  if (navLink && content) {
    navLink.addEventListener("mouseenter", function () {
      content.classList.add("show");
    });

    navLink.addEventListener("mouseleave", function () {
      content.classList.remove("show");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navLink = document.querySelector('nav a[href="#materials"]');
  const content = document.querySelector(".materials");

  if (navLink && content) {
    navLink.addEventListener("mouseenter", function () {
      content.classList.add("show");
    });

    navLink.addEventListener("mouseleave", function () {
      content.classList.remove("show");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navLink = document.querySelector('nav a[href="#aluno"]');
  const content = document.querySelector(".aluno");

  if (navLink && content) {
    navLink.addEventListener("mouseenter", function () {
      content.classList.add("show");
    });

    navLink.addEventListener("mouseleave", function () {
      content.classList.remove("show");
    });
  }
});
