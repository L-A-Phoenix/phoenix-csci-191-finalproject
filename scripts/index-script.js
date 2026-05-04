//Modal Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
const projects = [
  {
    title: "Project 1",
    details: "A replication of the masalamt website built using HTML and CSS.",
    link_text: "View Project",
    href: "https://github.com/L-A-Phoenix/phoenix-csci-191-project1.git",
  },
  {
    title: "Project 2",
    details:
      "All of my projects I have created grouped up in a single website built using HTML, CSS, and JavaScript.",
    link_text: "View Project",
    href: "https://github.com/L-A-Phoenix/phoenix-csci-191-project2.git",
  },
  {
    title: "Project 3",
    details:
      "A website built using HTML, CSS, and JavaScript that is used as practive throughout the semester.",
    link_text: "View Project",
    href: "https://github.com/L-A-Phoenix/phoenix-csci-191-practice.git",
  },
];

let modal = document.getElementById("project-modal");
let modal_title = document.getElementById("modal-title");
let modal_details = document.getElementById("modal-details");
let modal_link = document.getElementById("modal-link");
let modal_close = document.getElementById("modal-close");

const card_buttons = document.querySelectorAll(".project-card");

function openModalByIndex(index) {
  const project = projects[index];
  if (!project) return;

  modal_title.textContent = project.title;
  modal_details.textContent = project.details;
  modal_link.textContent = project.link_text;
  modal.showModal();

  document.body.style.overflow = "hidden";
}

function onCardClicked(event) {
  const clicked_card = event.currentTarget;
  const index = Number(clicked_card.dataset.index);
  openModalByIndex(index);
}

for (let i = 0; i < card_buttons.length; i++) {
  card_buttons[i].addEventListener("click", onCardClicked);
}

modal_close.addEventListener("click", function () {
  modal.close();
});

modal.addEventListener("close", function () {
  document.body.style.overflow = "";
});
//Modal Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//Theme Code vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
let themeButton = document.querySelector("#theme-toggle");
let hero = document.querySelector("#hero");

function handleClick() {
  if (document.body.classList.contains("light")) {
    themeButton.textContent = "☀️";
  } else {
    themeButton.textContent = "🌙";
  }
  document.body.classList.toggle("light");
}

themeButton.addEventListener("click", handleClick);
//Theme Code ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
