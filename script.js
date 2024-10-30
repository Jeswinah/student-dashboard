const buttons = document.querySelectorAll(".btn");
let ButtonValue = ""; 

buttons.forEach(button => {
    button.addEventListener("click", function() {
        ButtonValue = this.value;  
        const phoneNumber = document.getElementById("input").value;
        const iframe = document.getElementById("iframebox");

        if (phoneNumber) { 
            iframe.src = `https://www.sxcce.edu.in/mobile/${ButtonValue}.php?ph=${phoneNumber}`;
        } else {
            alert("Please enter a mobile number");
        } 
        console.log(ButtonValue);  
    });
});


const hamburger = document.getElementById("hbr");
hamburger.addEventListener("click", () => {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle('active'); 
});
