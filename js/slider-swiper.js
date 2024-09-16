// Initialize Swiper
var swiper = new Swiper('#box-slider', {
    slidesPerView: 1,
    spaceBetween: 15, // Add gap between slides
    loop: false, // Disable looping
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        575: {
            slidesPerView: 2.5,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 4.5,
            spaceBetween: 30
        }
    }
});

// Handle tab click and content toggle
$(".swiper-item-button").click(function() {
    // Remove active class from all buttons and their parent containers
    $(".swiper-item-button").removeClass("active");
    $(".nav-link").removeClass("active");

    // Add active class to the clicked tab's parent and button
    $(this).addClass('active');
    $(this).find('button').addClass('active');

    // Get the ID of the related content
    var getid = $(this).data('id');
    
    // Remove active class from all content
    $(".data-text").removeClass('active');
    
    // Add active class to the content that matches the clicked tab's data-id
    $("#" + getid).addClass("active");
});
