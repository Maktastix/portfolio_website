// JavaScript Application

const website = {};

website.scrollButton = document.getElementById('back_to');

website.scrollButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


website.scrollFunction = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        website.scrollButton.style.display = "flex";
    } else {
        website.scrollButton.style.display = "none";
    }
}

window.onscroll = function() {
    website.scrollFunction();
}

website.init = () => {
    website.scrollFunction();
}

website.init();