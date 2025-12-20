
/*
    Services in nav bar 
*/
let servesbtn = document.getElementById("dropdown");
let servesdown = document.getElementById("drop-menu");

servesbtn.onmouseover = function () {
    servesdown.classList.toggle('show');
};

servesbtn.onmouseout = function () {
    servesdown.classList.remove('show');
}

// 
let websites = document.getElementById("websites");
let video = document.getElementById("video");
let mobapp = document.getElementById("mobapp");

websites.onclick = function () {
    if (!text1.classList.contains('show')) {
        text1.classList.toggle('show');
        title1.innerHTML = 'WEBSITES ▽';
        text2.classList.remove('show');
        title2.innerHTML = 'VIDEO △';
        text3.classList.remove('show');
        title3.innerHTML = 'MOBILE △';
    } else {
        text1.classList.remove('show');
        title1.innerHTML = 'WEBSITES △';
    }
}

video.onclick = function () {
    if (!text2.classList.contains('show')) {
        text2.classList.toggle('show')
        title2.innerHTML = 'VIDEO ▽';
        text1.classList.remove('show');
        title1.innerHTML = 'WEBSITES △';
        text3.classList.remove('show');
        title3.innerHTML = 'MOBILE △';
    } else {
        text2.classList.remove('show')
        title2.innerHTML = 'VIDEO △';
    }
}

mobapp.onclick = function () {
    if (!text3.classList.contains('show')) {
        text3.classList.toggle('show');
        title3.innerHTML = 'MOBILE ▽';
        text2.classList.remove('show')
        title2.innerHTML = 'VIDEO △';
        text1.classList.remove('show')
        title1.innerHTML = 'WEBSITES △';
    } else {
        text3.classList.remove('show')
        title3.innerHTML = 'MOBILE △';
    }
}


/*
    THEAM ☀️🌙
*/

let theambtn = document.getElementById("theam");

theambtn.onclick = function () {
    document.body.classList.contains('dark') ?
        document.body.classList.remove('dark') : document.body.classList.toggle('dark');
    theambtn.innerHTML = document.body.classList.contains("dark") ? "☀️" : "🌙";

}

/* 
    Theam mobail
*/ 

let theam = document.getElementById("theam-btn");

theam.onclick = function () {
    document.body.classList.contains('dark') ?
        document.body.classList.remove('dark') : document.body.classList.toggle('dark');
    theam.innerHTML = document.body.classList.contains("dark") ? "☀️" : "🌙";

}





/*
    SERVICES 
*/
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");

let text1 = document.querySelector("#card1 p");
let text2 = document.querySelector("#card2 p");
let text3 = document.querySelector("#card3 p");

let title1 = document.querySelector("#card1 h2");
let title2 = document.querySelector("#card2 h2");
let title3 = document.querySelector("#card3 h2");

card1.onclick = function () {
    if (!text1.classList.contains('show')) {
        text1.classList.toggle('show');
        title1.innerHTML = 'WEBSITES ▽';
        text2.classList.remove('show');
        title2.innerHTML = 'VIDEO △';
        text3.classList.remove('show');
        title3.innerHTML = 'MOBILE △';
    } else {
        text1.classList.remove('show');
        title1.innerHTML = 'WEBSITES △';
    }
}

card2.onclick = function () {
    if (!text2.classList.contains('show')) {
        text2.classList.toggle('show')
        title2.innerHTML = 'VIDEO ▽';
        text1.classList.remove('show');
        title1.innerHTML = 'WEBSITES △';
        text3.classList.remove('show');
        title3.innerHTML = 'MOBILE △';
    } else {
        text2.classList.remove('show')
        title2.innerHTML = 'VIDEO △';
    }
}

card3.onclick = function () {
    if (!text3.classList.contains('show')) {
        text3.classList.toggle('show');
        title3.innerHTML = 'MOBILE ▽';
        text2.classList.remove('show')
        title2.innerHTML = 'VIDEO △';
        text1.classList.remove('show')
        title1.innerHTML = 'WEBSITES △';
    } else {
        text3.classList.remove('show')
        title3.innerHTML = 'MOBILE △';
    }
}

/*
    SLIDERS
*/

document.querySelectorAll(".slider").forEach(slider => {

    const slides = slider.querySelectorAll(".slide");
    const next = slider.querySelector(".next-btn");
    const prev = slider.querySelector(".prev-btn");

    let index = 0;

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    next.onclick = () => {
        index++;
        index = index >= slides.length ? 0 : index;
        showSlide(index);
    };

    prev.onclick = () => {
        index--;
        index = index < 0 ? slides.length-1 : index;
        showSlide(index);
    };

});



let form = document.querySelector('form');
let popup = document.getElementById('popup'); 
let close = document.getElementById('close');

form.onsubmit = function (e) {
    e.preventDefault();
    
    if (form.checkValidity()) {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
        form.reset();
    }
    
}

close.onclick = function() {
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
}




const lines = document.getElementById('lines');
const mobileMenu = document.getElementById('mobile-menu');

lines.onclick = function() {
    mobileMenu.classList.toggle('show'); // تضيف/تزيل الكلاس لإظهار القائمة
};

document.body.addEventListener('click', function(e) {
    // لو العنصر اللي ضغطت عليه مش داخل القائمة ولا الأيقونة
    if (!mobileMenu.contains(e.target) && !lines.contains(e.target)) {
        mobileMenu.classList.remove('show'); // اغلق القائمة
        overlay.classList.remove('show');    // اغلق الـoverlay لو عندك
    }
});
