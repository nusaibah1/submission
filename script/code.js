$(document).ready(function() {
    const $images = $('.slider-image')
    const $dots = $('.dot')
    const $nextButton = $('.nav-arrow')
    let currentIndex = 0

    function showSlide(index) {
        $images.removeClass('active').eq(index).addClass('active')
        $dots.removeClass('active').eq(index).addClass('active')
        currentIndex = index
     
    }

    $nextButton.on('click', function() {
        currentIndex = (currentIndex + 1) % $images.length
        showSlide(currentIndex)
    })

    $dots.on('click', function() {
        const index = $dots.index(this)
        showSlide(index)
    })

    showSlide(currentIndex)

    setInterval(function() {
        currentIndex = (currentIndex + 1) % $images.length
        showSlide(currentIndex)
    }, 5000)
})