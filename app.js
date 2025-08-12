const LinkElement = document.createElement("link");
LinkElement.rel = "stylesheet";
LinkElement.href = "app.css";
document.head.appendChild(LinkElement); 


const skillsData = [
  { name: "C", icon: "💻" },
  { name: "Linux", icon: "🐧" },
  { name: "Assembly", icon: "🔧" },
];

const username = document.createElement("h3");
const picture = document.createElement("img");
const phone = document.createElement("p");
const email = document.createElement("p");
const skillsContainer = document.createElement("div");
const bio = document.createElement("span");

username.textContent = "Kernel King";
phone.textContent = "349-733-9844";
email.textContent = "king@example.com";
bio.textContent ="A true vegetarian with 2 decades of experience, KernelKing is a master of low-level systems programming, working with C, Linux, and Assembly. Currently retired from active projects";

picture.src ="Screenshot 2025-08-11 094759.png";
picture.alt = "Profile Picture";
picture.className = "profile-picture";


username.className = "username";
phone.className = "contact-info phone";
email.className = "contact-info email";
bio.className = "bio";

skillsData.forEach((skill) => {
  const skillDiv = document.createElement("div");
  skillDiv.className = "skill";

  const iconSpan = document.createElement("span");
  iconSpan.className = "icon";
  iconSpan.textContent = skill.icon;

  const textSpan = document.createElement("span");
  textSpan.textContent = skill.name;

  skillDiv.appendChild(iconSpan);
  skillDiv.appendChild(textSpan);
  skillsContainer.appendChild(skillDiv);
});
skillsContainer.className = "skills-container";


const card = document.createElement("div");
card.className = "profile-card";


card.appendChild(picture);
card.appendChild(username);
card.appendChild(phone);
card.appendChild(email);
card.appendChild(skillsContainer);
card.appendChild(bio);

document.getElementById("profileContainer").appendChild(card);
