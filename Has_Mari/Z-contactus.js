// Z-contactus.js for submit

function thank_CUS(lname) {

    if (lname.value.length <= 4) {
        alert("Introduce your full Name to register your request!");

        lname.value = ""
    }
    else {
        let clname = lname.value.toUpperCase()
        alert(`Thanks for contacting us ${clname} we will be reaching you soon`)
    }
    return
}