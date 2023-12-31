const faBars = `
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="icon" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
  </svg>
`;

const faTimes = `
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" class="icon" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
  </svg>
`;

const faChevronDown = `
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="icon" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
  </svg>
`;

const faChevronUp = `
  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="icon" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
  </svg>
`;

const navigationItem = (link, currentUrl) => {
  const active = currentUrl && currentUrl.startsWith(link.link);
  return `
    <li>
      <a href=${link.link}
        ${active ? ' aria-current="page" class="active"' : ""}>${link.name}</a>
      ${link.subMenu ? navigationLevel(link.subMenu, false) : ""}
    </li>
    `;
};

const navigationLevel = (links, isRoot, currentUrl) => {
  let html = "";

  if (isRoot) {
    html += `
      <button
        class="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded="false"
        onClick="handleMenuToggle(this)">
          ${faBars}${faTimes}
      </button>    
    `;
  } else {
    html += `
      <button
        class="submenu-toggle"
        aria-label="Toggle submenu"
        aria-expanded="false"
        onClick="handleMenuToggle(this)">
          ${faChevronDown}${faChevronUp}
      </button>
    `;
  }

  html += `
    <ul>
      ${links.map((link) => navigationItem(link, currentUrl)).join("")}
    </ul>
    `;
  return html;
};

module.exports = (links, currentUrl) => {
  return `
    <nav class="primary-nav">${navigationLevel(links, true, currentUrl)}</nav>
    <style>
      .menu-toggle[aria-expanded="false"] svg:last-child,
      .submenu-toggle[aria-expanded="false"] svg:last-child {
        display: none;  
      }
      .menu-toggle[aria-expanded="true"] svg:first-child,
      .submenu-toggle[aria-expanded="true"] svg:first-child {
        display: none;  
      }
    </style>
    <script>
      const handleMenuToggle = (button) => {
        button.setAttribute("aria-expanded", button.getAttribute("aria-expanded") !== "true");
        button.nextElementSibling.classList.toggle("submenu-open");
      }
    </script>
  `;
};
