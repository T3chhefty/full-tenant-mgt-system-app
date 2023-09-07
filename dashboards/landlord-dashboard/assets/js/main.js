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
  let tenantTab = document.querySelector("#tent-tab");
  let rolesTab = document.querySelector("#roles-tab");
  let propertiresTab = document.querySelector("#prop-tab");
  let maintenerTab = document.querySelector("#maintainer-tab");
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
  tenantTab.classList.toggle("dark-mode4");
  rolesTab.classList.toggle("dark-mode4");
  propertiresTab.classList.toggle("dark-mode4");
  maintenerTab.classList.toggle("dark-mode4");
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

// tenants
const tenantSection = document.querySelector(".tenant-section");
const tenantTab = document.querySelector("#tent-tab");
const createTenantBtn = document.querySelector("#create-tenant-btn");

// bread crumbs
const breadcrumb = document.querySelector(".breadcrumb");

// roles
const rolesTab = document.querySelector("#roles-tab");
const createRoleBtn = document.querySelector("#create-roles-btn");
const rolesSection = document.querySelector(".roles-section-cover");

// properties
const propertiesTab = document.querySelector("#prop-tab");
const propertiesSection = document.querySelector(".properties-section");
const createPropertyBtn = document.querySelector("#create-property-btn");

// mainteners
const maintenersTab = document.querySelector("#maintainer-tab");
const createMaintenersBtn = document.querySelector("#create-maintainer-btn");
const maintenersSection = document.querySelector(".maintainers-section");

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

  // tenant tab
  tenantTab.style.color = "#687E9C";
  tenantTab.style.background = "#FDFDFD";

  // properties
  propertiesTab.style.color = "#687E9C";
  propertiesTab.style.background = "#FDFDFD";
  // roles
  rolesTab.style.color = "#687E9C";
  rolesTab.style.background = "#FDFDFD";

  // maintenamce
  maintenersTab.style.color = "#687E9C";
  maintenersTab.style.background = "#FDFDFD";

  //  support
  supportsTab.style.color = "#687E9C";
  supportsTab.style.background = "#FDFDFD";

  // broadcasts
  broadcastTab.style.color = "#687E9C";
  broadcastTab.style.background = "#FDFDFD";

  //  ////////////////////////////////////////////////////////////

  dashboard.style.display = "flex";
  createTenantBtn.style.display = "none";
  tenantSection.style.display = "none";
  rolesSection.style.display = "none";
  createRoleBtn.style.display = "none";
  propertiesSection.style.display = "none";
  createPropertyBtn.style.display = "none";
  maintenersSection.style.display = "none";
  createMaintenersBtn.style.display = "none";
  SupportsSection.style.display = "none";
  broadCastSection.style.display = "none";
  createBroadCastsBtn.style.display = "none";
  breadcrumb.innerHTML = "";
});

// listening to  tenant  tabClick Section
tenantTab.addEventListener("click", () => {
  // setbackground color for tab section
  tenantTab.style.color = "#fff";
  tenantTab.style.background = "#165b87";
  // setbackground color for tab section
  //  dashboard tab
  dashTab.style.color = "#687E9C";
  dashTab.style.background = "#FDFDFD";

  // properties
  propertiesTab.style.color = "#687E9C";
  propertiesTab.style.background = "#FDFDFD";
  // roles
  rolesTab.style.color = "#687E9C";
  rolesTab.style.background = "#FDFDFD";

  // maintenamce
  maintenersTab.style.color = "#687E9C";
  maintenersTab.style.background = "#FDFDFD";

  //  support
  supportsTab.style.color = "#687E9C";
  supportsTab.style.background = "#FDFDFD";

  // broadcasts
  broadcastTab.style.color = "#687E9C";
  broadcastTab.style.background = "#FDFDFD";

  //  ////////////////////////////////////////////////////////////

  createTenantBtn.style.display = "block";
  tenantSection.style.display = "flex";
  dashboard.style.display = "none";
  rolesSection.style.display = "none";
  breadcrumb.innerHTML = "/ Tenants";
  createRoleBtn.style.display = "none";
  propertiesSection.style.display = "none";
  createPropertyBtn.style.display = "none";
  maintenersSection.style.display = "none";
  createMaintenersBtn.style.display = "none";
  SupportsSection.style.display = "none";
  broadCastSection.style.display = "none";
  createBroadCastsBtn.style.display = "none";
});

// listening to RolesTabClick

rolesTab.addEventListener("click", () => {
  // setbackground color for tab section
  rolesTab.style.color = "#fff";
  rolesTab.style.background = "#165b87";
  // setbackground color for tab section

  // dashboard tab
  dashTab.style.color = "#687E9C";
  dashTab.style.background = "#FDFDFD";

  // tenant tab
  tenantTab.style.color = "#687E9C";
  tenantTab.style.background = "#FDFDFD";

  // roles
  propertiesTab.style.color = "#687E9C";
  propertiesTab.style.background = "#FDFDFD";

  // maintenamce
  maintenersTab.style.color = "#687E9C";
  maintenersTab.style.background = "#FDFDFD";

  //  support
  supportsTab.style.color = "#687E9C";
  supportsTab.style.background = "#FDFDFD";

  // broadcasts
  broadcastTab.style.color = "#687E9C";
  broadcastTab.style.background = "#FDFDFD";

  //  ////////////////////////////////////////////////////////////

  rolesSection.style.display = "block";
  breadcrumb.innerHTML = "/ Roles";
  createRoleBtn.style.display = "block";
  dashboard.style.display = "none";
  tenantSection.style.display = "none";
  createTenantBtn.style.display = "none";
  propertiesSection.style.display = "none";
  createPropertyBtn.style.display = "none";
  maintenersSection.style.display = "none";
  createMaintenersBtn.style.display = "none";
  SupportsSection.style.display = "none";
  broadCastSection.style.display = "none";
  createBroadCastsBtn.style.display = "none";
});

// listening to properties click

propertiesTab.addEventListener("click", () => {
  // setbackground color for tab section
  propertiesTab.style.color = "#fff";
  propertiesTab.style.background = "#165b87";
  // setbackground color for tab section

  // dashboard tab
  dashTab.style.color = "#687E9C";
  dashTab.style.background = "#FDFDFD";

  // tenant tab
  tenantTab.style.color = "#687E9C";
  tenantTab.style.background = "#FDFDFD";

  // roles
  rolesTab.style.color = "#687E9C";
  rolesTab.style.background = "#FDFDFD";

  // properties
  maintenersTab.style.color = "#687E9C";
  maintenersTab.style.background = "#FDFDFD";

  //  maintainers
  supportsTab.style.color = "#687E9C";
  supportsTab.style.background = "#FDFDFD";

  // broadcasts
  broadcastTab.style.color = "#687E9C";
  broadcastTab.style.background = "#FDFDFD";

  //  ////////////////////////////////////////////////////////////

  propertiesSection.style.display = "block";
  rolesSection.style.display = "none";
  breadcrumb.innerHTML = "/ Properties";
  createRoleBtn.style.display = "none";
  dashboard.style.display = "none";
  tenantSection.style.display = "none";
  createTenantBtn.style.display = "none";
  createPropertyBtn.style.display = "block";
  maintenersSection.style.display = "none";
  createMaintenersBtn.style.display = "none";
  SupportsSection.style.display = "none";
  broadCastSection.style.display = "none";
  createBroadCastsBtn.style.display = "none";
});

// listening to mainteners tab click

maintenersTab.addEventListener("click", () => {
  // setbackground color for tab section
  maintenersTab.style.color = "#fff";
  maintenersTab.style.background = "#165b87";
  // setbackground color for tab section

  // dashboard tab
  dashTab.style.color = "#687E9C";
  dashTab.style.background = "#FDFDFD";

  // tenant tab
  tenantTab.style.color = "#687E9C";
  tenantTab.style.background = "#FDFDFD";

  // roles
  rolesTab.style.color = "#687E9C";
  rolesTab.style.background = "#FDFDFD";

  // properties
  propertiesTab.style.color = "#687E9C";
  propertiesTab.style.background = "#FDFDFD";

  //  maintainers
  supportsTab.style.color = "#687E9C";
  supportsTab.style.background = "#FDFDFD";

  // broadcasts
  broadcastTab.style.color = "#687E9C";
  broadcastTab.style.background = "#FDFDFD";

  //  ////////////////////////////////////////////////////////////

  maintenersSection.style.display = "block";
  createMaintenersBtn.style.display = "block";
  propertiesSection.style.display = "none";
  rolesSection.style.display = "none";
  breadcrumb.innerHTML = "/ Maintainers";
  createRoleBtn.style.display = "none";
  dashboard.style.display = "none";
  tenantSection.style.display = "none";
  createTenantBtn.style.display = "none";
  createPropertyBtn.style.display = "none";
  SupportsSection.style.display = "none";
  broadCastSection.style.display = "none";
  createBroadCastsBtn.style.display = "none";
});

// listening to Suppots tab click
supportsTab.addEventListener("click", () => {
  // setbackground color for tab section
  supportsTab.style.color = "#fff";
  supportsTab.style.background = "#165b87";
  // setbackground color for tab section
  // ////////////////////////////////////////////////////////////
  //  setting other color on active

  // dashboard tab
  dashTab.style.color = "#687E9C";
  dashTab.style.background = "#FDFDFD";

  // tenant tab
  tenantTab.style.color = "#687E9C";
  tenantTab.style.background = "#FDFDFD";

  // roles
  rolesTab.style.color = "#687E9C";
  rolesTab.style.background = "#FDFDFD";

  // properties
  propertiesTab.style.color = "#687E9C";
  propertiesTab.style.background = "#FDFDFD";

  //  maintainers
  maintenersTab.style.color = "#687E9C";
  maintenersTab.style.background = "#FDFDFD";

  // broadcasts
  broadcastTab.style.color = "#687E9C";
  broadcastTab.style.background = "#FDFDFD";

  //  ////////////////////////////////////////////////////////////

  SupportsSection.style.display = "block";
  maintenersSection.style.display = "none";
  createMaintenersBtn.style.display = "none";
  propertiesSection.style.display = "none";
  rolesSection.style.display = "none";
  breadcrumb.innerHTML = "/ Supports";
  createRoleBtn.style.display = "none";
  dashboard.style.display = "none";
  tenantSection.style.display = "none";
  createTenantBtn.style.display = "none";
  createPropertyBtn.style.display = "none";
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

  // tenant tab
  tenantTab.style.color = "#687E9C";
  tenantTab.style.background = "#FDFDFD";

  // roles
  rolesTab.style.color = "#687E9C";
  rolesTab.style.background = "#FDFDFD";

  // properties
  propertiesTab.style.color = "#687E9C";
  propertiesTab.style.background = "#FDFDFD";

  //  maintainers
  maintenersTab.style.color = "#687E9C";
  maintenersTab.style.background = "#FDFDFD";
  // supports
  supportsTab.style.color = "#687E9C";
  supportsTab.style.background = "#FDFDFD";

  broadCastSection.style.display = "block";
  createBroadCastsBtn.style.display = "block";
  SupportsSection.style.display = "none";
  maintenersSection.style.display = "none";
  createMaintenersBtn.style.display = "none";
  propertiesSection.style.display = "none";
  rolesSection.style.display = "none";
  breadcrumb.innerHTML = "/ Broadcast";
  createRoleBtn.style.display = "none";
  dashboard.style.display = "none";
  tenantSection.style.display = "none";
  createTenantBtn.style.display = "none";
  createPropertyBtn.style.display = "none";
});

// create new tenant section

// variables to br toggled
let createTenantForm = document.querySelector(".form-container");
// function to Toggle form
function toggleForm() {
  createTenantForm.style.display = "block";
  createTenantForm.classList.toggle("hide-element");
}

// create property function to toggle

// variables to br toggled
let createPropertyForm = document.querySelector(".property-form-container");
// function to Toggle form
function togglePropertyForm() {
  createPropertyForm.style.display = "block";
  createPropertyForm.classList.toggle("hide-element");
}

// roles form to toggle

// variables to br toggled
let createRolesForm = document.querySelector(".roles-form-container");
// function to Toggle form
function toggleRolesForm() {
  createRolesForm.style.display = "block";
  createRolesForm.classList.toggle("hide-element");
}

// maintainers form to toggle
// variables to br toggled
let createMaintainerForm = document.querySelector(".maintainer-form-container");
// function to Toggle form
function toggleMaintainerForm() {
  createMaintainerForm.style.display = "block";
  createMaintainerForm.classList.toggle("hide-element");
}
// Broadcast form to toggle
// variables to br toggled
let createBroadcastForm = document.querySelector(".broadcast-form-container");
// function to Toggle form
function toggleBroadcastForm() {
  createBroadcastForm.style.display = "block";
  createBroadcastForm.classList.toggle("hide-element");
}
