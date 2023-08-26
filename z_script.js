// Z_script
function thanks (lname){
    let welHead=document.getElementById('#idh')
    if (lname.value.length <= 4)
    { 
        alert("Introduce your full Name to get your gift");welHead.innerHTML="Welcome "; 
        lname.value=""
        return}
    welHead.style.color="green"
    welHead.style.textAlign="justify"
    let clname=lname.value.toUpperCase()
    let secretCode
    secretCode="ZK"+Math.floor(Math.random() * 10000)
    welHead.
    innerHTML=`WELCOME dear ${clname} your secret code is  ${secretCode} <br> your gift awaits you when you visit our restaurant in the next coming  3 weeks`
    
}
// Get the modal
var modal = document.getElementById("modal");
var btn = document.getElementById("openBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
    btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function show(num) {
    alert(num)
    switch (num) {
        case 1:
            document.getElementById('Z-image1')
                .style.display = "block";
            break;
        case 2:
            document.getElementById('Z-image2')
                .style.display = "block";
            break;
        case 3:
            document.getElementById('Z-image3')
                .style.display = "block";
            break;
        default:
    }
   
}

