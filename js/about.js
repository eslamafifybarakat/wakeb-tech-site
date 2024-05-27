const aboutTestimonialEn = [
    {
        id: 1,
        description:
            'Our knowledge of the Kingdoms strategy for artificial intelligence and the goals of the Kingdoms Vision 2030 in this context contributed to directing the company in the optimal direction. We have developed a strategy that is in line with national strategies and market opportunities to include a set of goals and initiatives for the companys expansion. One of our most importan goals is to be one of the three most important companies in the Kingdom of Saudi Arabia that specializes in these technologies',
        imgUrl: './images/about/testimonials/1.webp',
        name: 'MAJED A ALGARNI',
        position: 'WAKEB CEO'
    },
    {
        id: 2,
        description:
            'Our knowledge of the Kingdoms strategy for artificial intelligence and the goals of the Kingdoms Vision 2030 in this context contributed to directing the company in the optimal direction. We have developed a strategy that is in line with national strategies and market opportunities to include a set of goals and initiatives for the companys expansion. One of our most importan goals is to be one of the three most important companies in the Kingdom of Saudi Arabia that specializes in these technologies',
        imgUrl: './images/about/testimonials/1.webp',
        name: 'MAJED A ALGARNI',
        position: 'WAKEB CEO'
    },
    {
        id: 3,
        description:
            'Our knowledge of the Kingdoms strategy for artificial intelligence and the goals of the Kingdoms Vision 2030 in this context contributed to directing the company in the optimal direction. We have developed a strategy that is in line with national strategies and market opportunities to include a set of goals and initiatives for the companys expansion. One of our most importan goals is to be one of the three most important companies in the Kingdom of Saudi Arabia that specializes in these technologies',
        imgUrl: './images/about/testimonials/1.webp',
        name: 'MAJED A ALGARNI',
        position: 'WAKEB CEO'
    }
];
const aboutTestimonialAr = [
    {
        id: 1,
        description:
            'معرفتنا باستراتيجية المملكة للذكاء الاصطناعي وأهداف رؤية المملكة 2030 في هذا السياق ساهمت في توجيه الشركة في الاتجاه الأمثل. لقد قمنا بتطوير استراتيجية تتماشى مع الاستراتيجيات الوطنية وفرص السوق لتضم مجموعة من الأهداف والمبادرات لتوسيع الشركة. واحدة من أهم أهدافنا هي أن نكون واحدة من أهم ثلاث شركات في المملكة العربية السعودية المتخصصة في هذه التقنيات',
        imgUrl: './images/about/testimonials/1.webp',
        name: 'ماجد أحمد القرني',
        position: 'الرئيس التنفيذي لشركة واكب'
    },
    {
        id: 2,
        description:
            'معرفتنا بإستراتيجية المملكة للذكاء الاصطناعي وأهداف رؤية المملكة 2030 في هذا السياق ساهمت في توجيه الشركة في الاتجاه الأمثل. لقد قمنا بتطوير استراتيجية تتماشى مع الاستراتيجيات الوطنية وفرص السوق لتضم مجموعة من الأهداف والمبادرات لتوسيع الشركة. واحدة من أهم أهدافنا هي أن نكون واحدة من أهم ثلاث شركات في المملكة العربية السعودية المتخصصة في هذه التقنيات',
        imgUrl: './images/about/testimonials/1.webp',
        name: 'ماجد أحمد القرني',
        position: 'الرئيس التنفيذي لشركة واكب'
    },
    {
        id: 3,
        description:
            'معرفتنا بإستراتيجية المملكة للذكاء الاصطناعي وأهداف رؤية المملكة 2030 في هذا السياق ساهمت في توجيه الشركة في الاتجاه الأمثل. لقد قمنا بتطوير استراتيجية تتماشى مع الاستراتيجيات الوطنية وفرص السوق لتضم مجموعة من الأهداف والمبادرات لتوسيع الشركة. واحدة من أهم أهدافنا هي أن نكون واحدة من أهم ثلاث شركات في المملكة العربية السعودية المتخصصة في هذه التقنيات',
        imgUrl: './images/about/testimonials/1.webp',
        name: 'ماجد أحمد القرني',
        position: 'الرئيس التنفيذي لشركة واكب'
    }
];

var currentURL = window.location.href;
const aboutTestimonial = currentURL.includes('ar') ? aboutTestimonialAr : aboutTestimonialEn;

const aboutTestimonialList = document.querySelector('.testimonial-items');
aboutTestimonialList.innerHTML = '';
aboutTestimonial.forEach(item => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="text-white-color py-4">
    <div class="row align-items-center testimonial-width">
        <div class="col-lg-7 order-lg-1 order-2">
            <p class="description fs-6 mb-0">
            ${item.description}
            </p>
        </div>
        <div class="col-lg-5 order-lg-2 order-1">
            <div class="p-4">
                <div class="person-img m-auto">
                    <img src="${item.imgUrl}" alt="">
                </div>
                <div class="info m-auto">
                    <h3 class="fs-5-2 mt-4">
                    ${item.name}
                    </h3>
                    <small class="fs-6-1 text-white-50 mt-1">
                    ${item.position}
                    </small>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
    aboutTestimonialList.appendChild(div);
});

setTimeout(() => {
    $('.testimonial-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        nav: false,
        // vertical: true,
        // verticalSwiping: true,
        autoplay: true,
        speed: 2000,
        fade: true,
        rtl: currentURL.includes('ar') ? true : false
    });
}, 100);


