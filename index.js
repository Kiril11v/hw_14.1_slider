
const slides = document.querySelectorAll('.team_slide');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;

slides.forEach((_, index) => { // create dots..
    const dot = document.createElement('div');
    dot.classList.add('dot-style');
    if(index === 0) {
        dot.classList.add('active');
    }

    dot.addEventListener('click', ()=>{ // click on dot
        currentIndex = index;
        showSlide(currentIndex);
        updateDots();
        deleteArrows();
    })

    dotsContainer.appendChild(dot); 
})

function showSlide (index) { // show slide
    const slidesContainer = document.querySelector('.team_slides');
    const slideWidth = slides[0].clientWidth; // width one slide
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`; // - width shifts left 1 * 300 = -300px
}

function updateDots() {   // update dots..
    const allDots = document.querySelectorAll('.dot-style');
    allDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    })
}

function deleteArrows() { // delete arrows
    if (currentIndex === 0) {  // delete prevBtn
        prevBtn.style.display = 'none';
    }
    else{
        prevBtn.style.display = 'block';
    }

    if (currentIndex === slides.length - 1) { // delete nextBtn
        nextBtn.style.display = 'none';
    }
    else {
        nextBtn.style.display = 'block';
    }
}

prevBtn.addEventListener('click', () => {
    if(currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
        updateDots();
        deleteArrows();
    }
})

nextBtn.addEventListener('click', () => {
    if(currentIndex < slides.length - 1) { // 0 < 3 - 1;
        currentIndex++;
        showSlide(currentIndex);
        updateDots();
        deleteArrows();
    }
})