//nav bar color
function navBarColor () {
    if (currentPage == "reimbursement") {
        let menuElt = document.getElementById("reimbursement");
        menuElt.classList.add("navhere");
    }
    else if (currentPage == "search") {
        let menuElt = document.getElementById("search");
        menuElt.classList.add("navhere");
    }
    else if (currentPage == "rules") {
        let menuElt = document.getElementById("rules");
        menuElt.classList.add("navhere");
    }
    else if (currentPage == "properties") {
        let menuElt = document.getElementById("properties");
        menuElt.classList.add("navhere");
    }
    };
    
  
  navBarColor ();
  
  console.log("nav created")