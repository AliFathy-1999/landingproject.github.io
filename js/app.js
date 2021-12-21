//Define Global Variables
let listSection = document.querySelectorAll("section");
let sectionCount = listSection.length;
let NavbarList = document.getElementById("navbar__list");
let CreateFragment = document.createDocumentFragment();
let dataNav;
let createList;
// Create the navbar dynamically
listSection.forEach((element) => {
  dataNav = element.getAttribute("data-nav");
  createList = document.createElement("li");
  createList.textContent = dataNav;
  CreateFragment.appendChild(createList);
  // Clicking on section list items from navigation menu to scroll into suitable sections (smootly by css)
  createList.addEventListener("click", () => {
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});
// add fragments (li) to (ul) list
NavbarList.appendChild(CreateFragment);
//  styling for active states with getBoundingClientRect
window.onscroll = function () {
  listSection.forEach((activeSection) => {
    let reactBound = activeSection.getBoundingClientRect();
    // Set sections as active
    if (reactBound.top >= 0 && reactBound.top <= 250) {
      activeSection.classList.add("your-active-class");
      activeSection.style.borderBottom = "2px solid white";
    } else {
      activeSection.classList.remove("your-active-class");
    }
  });
};
