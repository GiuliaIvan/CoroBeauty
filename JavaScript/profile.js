const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

//close sidebar
closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

//change theme
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span").classList.toggle("active");
});

// fill orders in table
Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                        <td>${order.serviceName}</td>
                        <td>${order.dateTime}</td>
                        <td>${order.price}</td>
                        <td class="${
                          order.status === "Declined"
                            ? "danger"
                            : order.status === "Pending"
                            ? "warning"
                            : order.status === "Confirmed" ? "success"
                            : "primary"
                        }">${order.status}</td>
                        <td class="primary">Details</td>
                        `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});


// TOP RIGHT PROFILE SUBMENU
let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-menu");
}