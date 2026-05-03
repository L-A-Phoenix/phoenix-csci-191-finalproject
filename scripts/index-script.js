const projects = [
  {
    title: "Project 1",
    details:
      "Aim Trainer built in Java using JOptionPane. It creates a clickeble grid panel and uses the dateTime module to keep score",
    link_text: "View Project",
    href: "",
  },
  {
    title: "Project 2",
    details:
      "Encryption and Decryption of text with multiple algorithms for each, built in Java.",
    link_text: "View Project",
    href: "",
  },
  {
    title: "Project 3",
    details:
      "A Roblox game built in Roblox Studio using Lua. It is a tower defense game where you gamble for towers and play through the story",
    link_text: "View Project",
    href: "",
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
