// JavaScript Application

const website = {};


// Scroll To Top Function

website.scrollButton = document.getElementById('back_to');

website.scrollButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


website.scrollFunction = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        website.scrollButton.style.display = "flex";
    } else {
        website.scrollButton.style.display = "none";
    }
};

window.onscroll = function() {
    website.scrollFunction();
};


// Hamburger Menu Function

website.menuHamburger = document.getElementById('hamburger');
website.menuClose = document.getElementById('close');
website.menuSlide = document.getElementById('nav_ul');

website.menuHamburger.addEventListener('click', () => {
    website.menuSlide.classList.toggle("active");
    website.menuClose.classList.toggle("visible");
});

website.menuClose.addEventListener('click', () => {
    website.menuSlide.classList.remove("active");
    website.menuClose.classList.remove("visible");
});

document.querySelectorAll('.item').forEach(n => n.addEventListener('click', () => {
    website.menuSlide.classList.remove("active");
    website.menuClose.classList.remove("visible");
}));


website.init = () => {
    website.scrollFunction();
    console.log(website);
};

website.init();