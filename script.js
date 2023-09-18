/*=============== toggle icon navbar ===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*=============== scroll sections active link ===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*=============== sticky navbar ===============*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*=============== remove toggle icon and navbar when click navbar link (scroll) ===============*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}; 

    /*=============== scroll reveal ===============*/

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact .Email_btn', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .nfts, .contact .social-media', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .contact p', { origin: 'right' });

    /*=============== typed js ===============*/

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Backend Developer', 'Open-Source Contributor'],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 1100,
    loop: true
});


    /*=============== About Section - Card Swap ===============*/


let stack = document.querySelector(".stack");

    [...stack.children].reverse().forEach(i => stack.append(i));

    stack.addEventListener("click", swap);

    function swap(e) {
        let card = document.querySelector(".card:last-child");
        if (e.target !== card) return;
        card.style.animation = "swap 700ms forwards";

        setTimeout(() => {
            card.style.animation = "";
            stack.prepend(card);
        }, 700);
    }