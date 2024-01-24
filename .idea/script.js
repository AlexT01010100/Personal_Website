//navbar scroll feature

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.oneclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (scrollPosition >= offset && scrollPosition < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Find the correct link and add the 'active' class
            let matchingLink = document.querySelector('header .navbar a[href="#' + id + '"]');
            if (matchingLink) {
                matchingLink.classList.add('active');

                // Trigger a reflow to apply the style changes immediately
                void matchingLink.offsetWidth;
            }
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

document.addEventListener("DOMContentLoaded", function () {
    // Selecting the left and right arrows
    const leftArrow = document.querySelector('.bx.bxs-chevron-left');
    const rightArrow = document.querySelector('.bx.bxs-chevron-right');
    const portfolioWrapper = document.querySelector('.portfolio-wrapper');

    // Adding click event listeners to the arrows
    leftArrow.addEventListener('click', function (event) {
        event.preventDefault();
        navigatePortfolio(-1);
    });

    rightArrow.addEventListener('click', function (event) {
        event.preventDefault();
        navigatePortfolio(1);
    });

    // Function to navigate to the next/previous portfolio items
    function navigatePortfolio(direction) {
        const itemWidth = portfolioWrapper.offsetWidth / 3; // Assuming 3 items visible at a time
        const currentPosition = portfolioWrapper.scrollLeft;
        const newPosition = currentPosition + direction * itemWidth;

        portfolioWrapper.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    }
});

//image slider (portfolio)

let scrollContainer = document.querySelector(".portfolio-container");
let back_button = document.getElementById("back_button");
let forward_button = document.getElementById("forward_button");

// scrollContainer.addEventListener("wheel", (evt) => {
//     evt.preventDefault();
//     scrollContainer.scrollLeft += evt.deltaY;
//     scroll.Container.style.scrollBehavior = "auto";
// });

forward_button.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

back_button.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

