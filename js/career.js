var currentURL = window.location.href;

const jobsEn = [
    {
        id: 1, title: 'Big Data Developer', description: 'At Wakeb ,we need big data developer to design the architecture of our big data platform · Perform and oversee tasks such as writing scripts, calling APIs, web scraping, and writing'
    },
    {
        id: 1, title: 'Big Data Developer', description: 'At Wakeb ,we need big data developer to design the architecture of our big data platform · Perform and oversee tasks such as writing scripts, calling APIs, web scraping, and writing'
    },
    {
        id: 1, title: 'Big Data Developer', description: 'At Wakeb ,we need big data developer to design the architecture of our big data platform · Perform and oversee tasks such as writing scripts, calling APIs, web scraping, and writing'
    }, {
        id: 1, title: 'Big Data Developer', description: 'At Wakeb ,we need big data developer to design the architecture of our big data platform · Perform and oversee tasks such as writing scripts, calling APIs, web scraping, and writing'
    }
]
const jobsAr = [
    {
        id: 1, title: 'مطور بيانات كبيرة', description: 'في ويكيب، نحتاج إلى مطور بيانات كبيرة لتصميم بنية منصتنا للبيانات الكبيرة · أداء وإشراف المهام مثل كتابة النصوص، استدعاء واجهات برمجة التطبيقات، جمع البيانات من الويب، والكتابة'
    },
    {
        id: 2, title: 'مطور بيانات كبيرة', description: 'في ويكيب، نحتاج إلى مطور بيانات كبيرة لتصميم بنية منصتنا للبيانات الكبيرة · أداء وإشراف المهام مثل كتابة النصوص، استدعاء واجهات برمجة التطبيقات، جمع البيانات من الويب، والكتابة'
    },
    {
        id: 3, title: 'مطور بيانات كبيرة', description: 'في ويكيب، نحتاج إلى مطور بيانات كبيرة لتصميم بنية منصتنا للبيانات الكبيرة · أداء وإشراف المهام مثل كتابة النصوص، استدعاء واجهات برمجة التطبيقات، جمع البيانات من الويب، والكتابة'
    }, {
        id: 4, title: 'مطور بيانات كبيرة', description: 'في ويكيب، نحتاج إلى مطور بيانات كبيرة لتصميم بنية منصتنا للبيانات الكبيرة · أداء وإشراف المهام مثل كتابة النصوص، استدعاء واجهات برمجة التطبيقات، جمع البيانات من الويب، والكتابة'
    }
];

const jobs = currentURL.includes('-ar') ? jobsAr : jobsEn;
function createJobs() {
    var jobsItems = $(`.jobs-items`);
    jobs.forEach(function (item) {
        var slide = $(`
        <div class="px-3">
        <div class="job-card h-100">
                        <div
                            class="d-flex flex-column justify-content-between gap-4 job-content h-100 position-relative">
                            <div class="job-overlay position-absolute"></div>
                            <div>
                                <h4 class="text-white-color text-uppercase job-title">
                                    ${item.title}
                                </h4>
                                <p class="text-white-50 fs-5-2 mt-4 job-description">
                                ${item.description}
                                </p>
                            </div>
                            <div class="d-flex justify-content-between gap-3 flex-wrap">
                                <div class="case-icon d-flex justify-content-center align-items-center arrow-bg mb-0">
                                    <img src="./images/home/cases/arrow.svg" alt="arrow">
                                </div>
                                <a  data-bs-toggle="modal" data-bs-target="#applyJobModal"
                                    class="text-white-color d-flex gap-3 align-items-center text-uppercase fs-8 apply-now-btn">
                                    ${currentURL.includes('-ar') ? 'قدم الان' : 'Apply Now'}
                                    <span>
                                        <svg width="8" height="15" viewBox="0 0 8 15" fill="none" class="scaleX-rtl"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M0.292893 1.01164C0.683417 0.621119 1.31658 0.621119 1.70711 1.01164L7.70711 7.01164C8.09763 7.40217 8.09763 8.03533 7.70711 8.42586L1.70711 14.4259C1.31658 14.8164 0.683417 14.8164 0.292893 14.4259C-0.0976311 14.0353 -0.0976311 13.4022 0.292893 13.0116L5.58579 7.71875L0.292893 2.42586C-0.0976311 2.03533 -0.0976311 1.40217 0.292893 1.01164Z"
                                                fill="white" />
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div></div>
        `);
        slide.find('.apply-now-btn').click(function () {
            console.log('kk');
            // $('#applyJobModal').addClass('show').addClass('d-block');;
        });
        jobsItems.append(slide);
    });
    makeJobsSlide();
}
createJobs();
function makeJobsSlide() {
    setTimeout(() => {
        $('.jobs-items').slick({
            autoplay: true,
            speed: 1000,
            dots: false,
            infinite: true,
            loop: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            rtl: currentURL.includes('-ar') ? true : false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2.5,
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }, 500);
}

// ====================program stepper============
let currentStep = 0;

function changeStep(step) {
    // Hide current step content
    document.getElementById(`step${currentStep + 1}`) ? document.getElementById(`step${currentStep + 1}`).style.display = 'none' : '';

    // Update current step
    currentStep = step;

    // Show new step content
    document.getElementById(`step${currentStep + 1}`) ? document.getElementById(`step${currentStep + 1}`).style.display = 'block' : '';

    // Update progress bar
    const progressPercentage = (currentStep + 1) * (100 / 3); // Assuming 8 steps
    setProgress(progressPercentage);
    // Update step styles
    updateStepStyles();
}
function setProgress(progressPercentage) {
    const progressBar = document.getElementById('progressBar');
    const stepNumber = document.getElementById('stepNumber');

    // Update progress bar width and content
    progressBar ? progressBar.style.width = `${progressPercentage}%` : '';
    progressBar ? progressBar.innerText = `${Math.round(progressPercentage)}%` : '';

    // Update step number
    stepNumber ? stepNumber.innerText = currentStep + 1 : '';
}
function updateStepStyles() {
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        if (index <= currentStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

changeStep(0);

// ===============Phone===============
$(function () {
    $('#txtPhone').val(code);
    $("#country").change(function () {
        let value = "+" + $(this).val();
        $('#txtPhone').val(value);
    })
    var code = "+966"; // Assigning value from model.
    $('#txtPhone').val(code);
    $('#txtPhone').intlTelInput();
    // $('#txtPhone').intlTelInput({
    //     onlyCountries: ['sa', 'eg']
    // });
});