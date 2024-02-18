// Navbar With Humberger Menu
const navbar = document.querySelector('.navbar');
const links = document.querySelector('.links');
navbar.addEventListener('click', () => {
    links.classList.toggle('showlinks');
})



// Slider Using JavaScript
let i = 0;
let images = [];
images[0] = '1.jpg';
images[1] = '2.jpg';
images[2] = '3.jpg';
function changImg() {
    document.getElementById('slider').src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
}
setInterval(changImg,3000)


// Time Display Using JavaScript
setInterval(() => {
    let span = document.getElementById('time');
    let time = new Date();
    let date = time.toLocaleDateString();
    time = time.toLocaleTimeString();
    span.innerHTML = '<strong>Current Time is:</strong> ' + time + ' And <strong>Current Date is:</strong> ' + date;

}, 1000);


// Collapse Using JavaScript
function collapse(){
let text = document.querySelector('.text');
text.classList.toggle('collapse');
}

