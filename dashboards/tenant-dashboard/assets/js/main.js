// switch mode functionality
function mode() {
  let sideBar = document.querySelector(".side-bar");
  let DasboardTitleSection = document.querySelector(".dashboard-title-section");
  let mainSection = document.querySelector(".main-section");
  let detailSection = document.querySelector(".details-section");
  let dashboadHeader = document.querySelector(".dashboard-header");
  let placeMarker = document.querySelector(".place-marker");
  // side-bar-tabs
  let dashboardTabh = document.querySelector(".dash-tab");

  let supportsTab = document.querySelector("#supports-tab");
  let broadcastTab = document.querySelector("#broadcast-tab");

  // main Propertie content containers
  let totalProperties = document.querySelector("#t-prop");
  let totalTenant = document.querySelector("#t-tent");
  let totalExpenses = document.querySelector("#t-exp");
  let totalIncome = document.querySelector("#t-income");
  let body = document.querySelector("#body");
  // some toggle Here

  body.classList.toggle("dark-mode");
  sideBar.classList.toggle("dark-mode3");
  mainSection.classList.toggle("dark-mode");
  DasboardTitleSection.classList.toggle("dark-mode");
  detailSection.classList.toggle("dark-mode2");
  dashboadHeader.classList.toggle("dark-mode2");
  placeMarker.classList.toggle("dark-mode2");
  //  // main Propertie content containers
  totalProperties.classList.toggle("dark-mode2");
  totalTenant.classList.toggle("dark-mode2");
  totalExpenses.classList.toggle("dark-mode2");
  totalIncome.classList.toggle("dark-mode2");
  // side bar tabs
  dashboardTabh.classList.toggle("dark-mode4");
  supportsTab.classList.toggle("dark-mode4");
  broadcastTab.classList.toggle("dark-mode4");
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", mode);

// end switch mode functionality

// some js for dashboad functionality

// dashboard
const dashboard = document.querySelector(".dashboard-contents");
const dashTab = document.querySelector(".dash-tab");



// bread crumbs
const breadcrumb = document.querySelector(".breadcrumb");







// supports

const supportsTab = document.querySelector("#supports-tab");
const createSupportssBtn = document.querySelector("#create-support-btn");
const SupportsSection = document.querySelector(".supports-section");

// broadcast
const broadcastTab = document.querySelector("#broadcast-tab");
const createBroadCastsBtn = document.querySelector("#create-broadcast-btn");
const broadCastSection = document.querySelector(".broadcast-section");

// Deafault for dashboard on active

// listening to a click on the dashboard tab
dashTab.addEventListener("click", () => {
  // setbackground color for tab section
  dashTab.style.color = "#fff";
  dashTab.style.background = "#165b87";
  // setbackground color for tab section

  // other colors
  // broadcast tab :
  broadcastTab.style.color = "#687E9C";
  broadcastTab.style.background = "#FDFDFD";
  //  support
  supportsTab.style.color = "#687E9C";
  supportsTab.style.background = "#FDFDFD";
  createSupportssBtn.style.display = "none";

  // broadcasts
  broadcastTab.style.color = "#687E9C";
  broadcastTab.style.background = "#FDFDFD";

  //  ////////////////////////////////////////////////////////////

  dashboard.style.display = "flex";
  SupportsSection.style.display = "none";
  broadCastSection.style.display = "none";
  createBroadCastsBtn.style.display = "none";
  breadcrumb.innerHTML = "";
});


// listening to Suppots tab click
supportsTab.addEventListener("click", () => {
  // setbackground color for tab section
  supportsTab.style.color = "#fff";
  supportsTab.style.background = "#165b87";
  createSupportssBtn.style.display = "block";
  // setbackground color for tab section
  // ////////////////////////////////////////////////////////////
  //  setting other color on active

  // dashboard tab
  dashTab.style.color = "#687E9C";
  dashTab.style.background = "#FDFDFD";

  // broadcasts
  broadcastTab.style.color = "#687E9C";
  broadcastTab.style.background = "#FDFDFD";

  //  ////////////////////////////////////////////////////////////

  SupportsSection.style.display = "block";
  breadcrumb.innerHTML = "/ Supports";
  dashboard.style.display = "none";
  broadCastSection.style.display = "none";
  createBroadCastsBtn.style.display = "none";
});

// listening to Broadcast tab click
broadcastTab.addEventListener("click", () => {
  // setbackground color for tab section
  broadcastTab.style.color = "#fff";
  broadcastTab.style.background = "#165b87";
  // setbackground color for tab section

  // dashboard tab
  dashTab.style.color = "#687E9C";
  dashTab.style.background = "#FDFDFD";

  // supports
  supportsTab.style.color = "#687E9C";
  supportsTab.style.background = "#FDFDFD";
  SupportsSection.style.display = "none";
  createSupportssBtn.style.display = "none";

  broadCastSection.style.display = "block";
  createBroadCastsBtn.style.display = "none";
  breadcrumb.innerHTML = "/ Broadcast";
  dashboard.style.display = "none";
});
