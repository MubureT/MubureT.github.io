// Toggle icon navbar
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(section => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    // Sticky navbar
    const header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);

    // Remove toggle icon and navbar when clicking navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js animation
const typedOptions = {
    strings: ['Backend Developer', 'Frontend Developer', 'Programmer', 'Software Engineer', 'Database Developer', 'Full stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
};

const typed = new Typed('.multiple-text', typedOptions);

const typedOptions2 = {
    strings: ['Python', 'JavaScript', 'HTML', 'CSS', 'C#', 'SQL', 'C++', 'React', 'Angular', 'MongoDB', 'AWS'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
};

const typed2 = new Typed('.multiple-text2', typedOptions2);

// Send email on submit
const form = document.querySelector('form');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail() {
    const bodyMessage = `Full name: ${fullname.value}<br>Email: ${email.value}<br>Phone: ${phone.value}<br>Subject: ${subject.value}<br>Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "mubureterrance.portfolio@gmail.com",
        Password: "AD0554CA9A169397C82923BC8B3784E960EF",
        To: 'mubureterrance.portfolio@gmail.com',
        From: "mubureterrance.portfolio@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(response => {
        if (response === "OK") {
            Swal.fire('Success!', 'Message sent successfully!', 'success');
        }
    });
}

function checkInputs() {
    const items = document.querySelectorAll('.item');

    items.forEach(item => {
        if (item.value === "") {
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }

        item.addEventListener("keyup", () => {
            if (item.value !== "") {
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            } else {
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        });
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    // Only send email if there are no errors
    const errors = document.querySelectorAll('.error');
    if (errors.length === 0) {
        sendEmail();
    }
});
