let currentIndex = 0;

function scrollLeft() {
    const scrollerContent = document.querySelector('.scroller-content');
    const images = scrollerContent.querySelectorAll('img');
    const imageWidth = images[0].clientWidth;
    const totalImages = 6;

    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop back to last image if at the start
    scrollerContent.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

function scrollRight() {
    const scrollerContent = document.querySelector('.scroller-content');
    const images = scrollerContent.querySelectorAll('img');
    const imageWidth = images[0].clientWidth;
    const totalImages = images.length;

    currentIndex = (currentIndex + 1) % totalImages; // Loop back to first image if at the end
    scrollerContent.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
}

window.addEventListener('resize', () => {
    const scrollerContent = document.querySelector('.scroller-content');
    const imageWidth = scrollerContent.querySelector('img').clientWidth;
    scrollerContent.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
});
