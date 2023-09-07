window.addEventListener("load", () => {
  let form = document.querySelector("#form");
  const tenantContainer = document.querySelector(".tenant-container");
  // event to creat new Tenant
  const createTenantButton = document.querySelector("#createTenant");
  // tenant heading section
  const tenantSectionHeader = document.querySelector(".tenant-section-header");
  const tenantPhoto = document.createElement("img");
  const nameAndEmailWrapper = document.createElement("div");
  nameAndEmailWrapper.className = "tenant-name-and-email-wrapper";

  // **************************************
  // declaring Random Elements
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const paragraph = document.createElement("p");
    const div = document.createElement("div");
    // try to add elements on default, if not, then hard code them

  // ***************************************
  form.addEventListener("submit", (e) => {
      e.preventDefault();

        
 
   
  
 

    //  I added these codes for Experiments and practice

    // this will delete a todo item
    delBtn.addEventListener("click", () => {
      activitiesTodo.remove();
    });

    // this will edit/save a todp item

    editBtn.addEventListener("click", () => {
      if (editBtn.innerText == "Edit") {
        todoInput.readOnly = false;
        editBtn.innerText = "Save";
        editBtn.style.backgroundColor = "green";
      } else {
        todoInput.readOnly = true;
        editBtn.innerText = "Edit";
        editBtn.style.backgroundColor = "#000";
      }
    });
    // the edit eventlistener stops here



    // this is for the strikethrough of finisged task
  });
});
