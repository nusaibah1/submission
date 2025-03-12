$(document).ready(function() {
    const $images = $('.slider-image')
    const $dots = $('.dot')
    const $nextButton = $('.nav-arrow')
    let currentIndex = 0;

    function showSlide(index) {
        // Hide all images
        $images.removeClass('active')
        $dots.removeClass('active')

        // Show selected image
        $images.eq(index).addClass('active')
        $dots.eq(index).addClass('active')
        currentIndex = index;
    }

    $nextButton.on('click', function() {
        currentIndex = (currentIndex + 1) % $images.length
        showSlide(currentIndex)
    });

    // Carasol Indicator (dot) click events
    $dots.on('click', function() {
        const index = $dots.index(this)
        showSlide(index)
    });

    // Auto-rotate slides every 5 seconds
    setInterval(function() {
        currentIndex = (currentIndex + 1) % $images.length
        showSlide(currentIndex);
    }, 5000)
    setInterval(function () {
        currentIndex = (currentIndex + 1) % $images.length
        showSlide(currentIndex);
    }, 5000)
});