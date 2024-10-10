

// Side navbar

var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.left="0"
}

function closeNavbar()
{
    sidenav.style.left="-70%"
}


// Search function

var treasuretab = document.getElementById("tres")
var search = document.getElementById("search")
var treasurelist = treasuretab.querySelectorAll("div")

search.addEventListener("keyup", function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0; count<treasurelist.length;count=count+1)
    {
        var treasurename = treasurelist[count].querySelector("p").textContent

        if(treasurename.toUpperCase().indexOf(enteredValue)<0)
        {
            treasurelist[count].style.display="none"
        }

        else{
            treasurelist[count].style.display="block"
        }
    }
}
)