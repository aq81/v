var tablinks = window.document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab (tabname)
{
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
        {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        window.document.getElementById(tabname).classList.add("active-tab");
        
    }
var sidemenu = window.document.getElementById("sidemenu")
function openmenu(){
    sidemenu.style.right="0px"
}
function closemenu(){
    sidemenu.style.right="-200px"
}
