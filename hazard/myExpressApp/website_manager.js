/**
 * This is a basic script that allows the user to change tabs.
 * @param {*} evt, the current tab.
 * @param {*} loc, location to be changed.
 */
function changeTab(evt, loc) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabs and hide them
    tabcontent = document.getElementsByClassName("tabs");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(loc).style.display = "block";
    evt.currentTarget.className += " active";
  }