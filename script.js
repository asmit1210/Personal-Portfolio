let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>= offset && top<offset+height){
                navLinks.forEach(links=>{
                links.classList.remove('active')
                document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Form submission handling
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Show alert
    alert('Your response has been submitted');

    // Reset the form fields
    this.reset();
});
