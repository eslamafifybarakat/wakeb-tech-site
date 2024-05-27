// const blogData = [
//     // Your blog items here
//     { title: 'Blog 1', content: 'Content 1' },
//     { title: 'Blog 2', content: 'Content 2' },
//     { title: 'Blog 23', content: 'Content 2' },
//     { title: 'Blog2 2', content: 'Content 2' },
//     { title: 'Blog 12', content: 'Content 2' },
//     { title: 'Blog 42', content: 'Content 2' },
//     { title: 'Blog 52', content: 'Content 2' },
//     { title: 'Blog 82', content: 'Content 2' },
//     { title: 'Blog 92', content: 'Content 2' },
//     { title: 'Blog 71', content: 'Content 1' },
//     { title: 'Blog 29', content: 'Content 2' },
//     { title: 'Blog 42', content: 'Content 2' },
//     { title: 'Blog 222', content: 'Content 2' },
//     { title: 'Blog 112', content: 'Content 2' },
//     { title: 'Blog 32', content: 'Content 2' },
//     { title: 'Blog 2', content: 'Content 2' },
//     { title: 'Blog 2', content: 'Content 2' },
//     { title: 'Blog 2', content: 'Content 2' },
//     { title: 'Blog 312', content: 'Content 2' },
//     { title: 'Blog 422', content: 'Content 2' },
//     { title: 'Blog 512', content: 'Content 2' },
//     { title: 'Blog 982', content: 'Content 2' },
//     { title: 'Blog 492', content: 'Content 2' },
//     { title: 'Blog 731', content: 'Content 1' },
//     { title: 'Blog 229', content: 'Content 2' },
//     // ...
// ];

// const itemsPerPage = 6;
// let currentPage = 1;
// function displayBlogs(page) {
//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const slicedBlogs = blogData.slice(startIndex, endIndex);

//     const blogList = document.getElementById('blog-list');
//     blogList.innerHTML = '';

//     slicedBlogs.forEach(blog => {
//         const li = document.createElement('li');
//         li.classList.add('blog-item');
//         li.textContent = `${blog.title}: ${blog.content}`;
//         blogList.appendChild(li);
//     });
// }

// function updatePagination() {
//     const totalPages = Math.ceil(blogData.length / itemsPerPage);
//     const paginationList = document.getElementById('pagination-list');
//     paginationList.innerHTML = '';

//     for (let i = 1; i <= totalPages; i++) {
//         const li = document.createElement('li');
//         li.classList.add('pagination-item');
//         li.textContent = i;
//         if (i === currentPage) {
//             li.classList.add('active');
//         }


//         li.addEventListener('click', () => {
//             currentPage = i;
//             displayBlogs(currentPage);
//             updatePagination();
//         });

//         paginationList.appendChild(li);
//     }
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');

//     prevBtn.disabled = currentPage === 1;
//     nextBtn.disabled = currentPage === totalPages;
// }


// function init() {
//     displayBlogs(currentPage);
//     updatePagination();
// }

// init();

// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// prevBtn.addEventListener('click', () => {
//     if (currentPage > 1) {
//         currentPage--;
//         displayBlogs(currentPage);
//         updatePagination();
//         console.log('Current Page:', currentPage);
//     }
// });

// nextBtn.addEventListener('click', () => {
//     const totalPages = Math.ceil(blogData.length / itemsPerPage);
//     if (currentPage < totalPages) {
//         currentPage++;
//         displayBlogs(currentPage);
//         updatePagination();
//         console.log('Current Page:', currentPage);
//     }
// });


// ================================

// Sample blog data
const blogDataEn = [
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' Wakeb solutions in Marketing and Advertising', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  Artificial Intelligence solutions in Business', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' How Artificial Intelligence is Shaping Our Worldg', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'Wakab solutions in the marketing sector', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    How artificial intelligence is shaping our world', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'AI automates iterative learning and discovery through data', description: ' Welcome to our AI Image Generation website, where creativity meets technology! Harnessing the power of artificial intelligence, we bring you a world of limitless possibilities for image creation and transformation.'
    },

];
const blogDataAr = [
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 1,
        imgUrl: './images/blogs/wakeb-solutions.webp', altText: 'wakeb-solutions', title: ' حلول واكب في مجال التسويق والإعلان', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 2,
        imgUrl: './images/blogs/artificial-Intelligence.webp', altText: 'artificial-Intelligence', title: '  حلول الذكاء الاصطناعي في الأعمال', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 3,
        imgUrl: './images/blogs/how-artificial-Intelligence.webp', altText: 'how-artificial-Intelligence', title: ' كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 4,
        imgUrl: './images/blogs/wakab-solutions-in-marketing.webp', altText: 'wakab-solutions-in-marketing', title: 'حلول وكاب في قطاع التسويق', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 5,
        imgUrl: './images/blogs/ai.webp', altText: 'artificial-Intelligence', title: '    كيف يشكل الذكاء الاصطناعي عالمنا؟', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },
    {
        id: 6,
        imgUrl: './images/blogs/ai-automates-iterative-learning.webp', altText: 'ai-automates-iterative-learning', title: 'يقوم الذكاء الاصطناعي بأتمتة التعلم والاكتشاف التكراري من خلال البيانات', description: 'مرحبًا بك في موقعنا لتكوين الصور بواسطة الذكاء الاصطناعي، حيث يلتقي الإبداع  بالتكنولوجيا! باستخدام قوة الذكاء الاصطناعي، نقدم لك عالمًا من الإمكانيات اللامحدودة لإنشاء وتحويل الصور.'
    },

];
var currentURL = window.location.href;
const blogData = currentURL.includes('ar') ? blogDataAr : blogDataEn;
const itemsPerPage = 9;
let currentPage = 1;

function displayBlogs(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    let slicedBlogs = [];

    if (blogData.length <= itemsPerPage) {
        slicedBlogs = blogData;
    } else {
        const firstThree = blogData.slice(0, 3);
        const lastThree = blogData.slice(-3);

        if (page === 1) {
            slicedBlogs = [...firstThree, ...blogData.slice(3, 9)];
        } else if (page === Math.ceil(blogData.length / itemsPerPage)) {
            slicedBlogs = [...blogData.slice(-9, -3), ...lastThree];
        } else {
            slicedBlogs = blogData.slice(startIndex - 1, endIndex - 1);
        }
    }

    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = '';

    slicedBlogs.forEach(blog => {
        const li = document.createElement('li');
        // li.classList.add('blog-item');
        li.classList.add('blog-item', 'col-md-6', 'col-lg-4', 'mb-4');
        li.innerHTML = `
        <article>
            <div class="article-img w-100 mb-3">
                <img src="${blog.imgUrl}" alt="${blog.altText}"
                    class="w-100 h-100 shadow-sm">
            </div>
            <div class="d-flex justify-content-between flex-column gap-3 text-md-start text-center">
                <div>
                    <h2 class="fs-5-2 lh-sm text-white-color article-title">
                        ${blog.title}
                    </h2>
                    <p class="fs-6-1 ls-1 text-white-50 mt-2 fw-lighter article-description mb-0">
                    ${blog.description}
                    </p>
                </div>
                <a href="${currentURL.includes('ar') ? './blog-details-ar.html' : './blog-details.html'}"
                    class="d-flex align-items-center justify-content-center justify-content-md-start gap-4">
                    <span
                        class="arrow-icon rounded-circle d-flex justify-content-center align-items-center scaleX-rtl">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.6309 6.33869C12.5833 6.21599 12.5119 6.10379 12.4209 6.00869L7.42094 1.00869C7.32774 0.915449 7.21704 0.841489 7.09514 0.791029C6.97334 0.740569 6.84284 0.7146 6.71094 0.7146C6.44464 0.7146 6.18924 0.820389 6.00094 1.00869C5.90774 1.10193 5.83374 1.21262 5.78324 1.33444C5.73284 1.45627 5.70684 1.58683 5.70684 1.71869C5.70684 1.98499 5.81264 2.24039 6.00094 2.42869L9.30094 5.71869H1.71094C1.44572 5.71869 1.19137 5.82409 1.00383 6.01159C0.816298 6.19909 0.710938 6.45349 0.710938 6.71869C0.710938 6.98389 0.816298 7.23829 1.00383 7.42579C1.19137 7.61329 1.44572 7.71869 1.71094 7.71869H9.30094L6.00094 11.0087C5.90724 11.1017 5.83284 11.2123 5.78204 11.3341C5.73124 11.456 5.70514 11.5867 5.70514 11.7187C5.70514 11.8507 5.73124 11.9814 5.78204 12.1033C5.83284 12.2251 5.90724 12.3357 6.00094 12.4287C6.09394 12.5224 6.20454 12.5968 6.32634 12.6476C6.44824 12.6984 6.57894 12.7245 6.71094 12.7245C6.84294 12.7245 6.97364 12.6984 7.09554 12.6476C7.21734 12.5968 7.32794 12.5224 7.42094 12.4287L12.4209 7.42869C12.5119 7.33359 12.5833 7.22149 12.6309 7.09869C12.7309 6.85519 12.7309 6.58219 12.6309 6.33869Z"
                                fill="white" />
                        </svg>
                    </span>
                    <span class="text-white-color">
                    ${currentURL.includes('ar') ? 'اقرا المزيد' : 'Read more'}
                    </span>
                </a>
            </div>
        </article>
        `;
        blogList.appendChild(li);
    });
}

function updatePagination() {
    const totalPages = Math.ceil(blogData.length / itemsPerPage);
    const paginationList = document.getElementById('pagination-list');
    paginationList.innerHTML = '';

    const renderPaginationItems = (start, end) => {
        for (let i = start; i <= end; i++) {
            const li = document.createElement('li');
            li.classList.add('pagination-item');
            li.textContent = i;

            if (i === currentPage) {
                li.classList.add('active');
            }

            li.addEventListener('click', () => {
                currentPage = i;
                displayBlogs(currentPage);
                updatePagination();
                console.log('Current Page:', currentPage);
            });

            paginationList.appendChild(li);
        }
    };

    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    if (totalPages <= 6) {
        renderPaginationItems(1, totalPages);
    } else {
        if (currentPage <= 3) {
            renderPaginationItems(1, 3);
            const ellipsis = document.createElement('li');
            ellipsis.textContent = '...';
            paginationList.appendChild(ellipsis);
            renderPaginationItems(totalPages - 1, totalPages);
        }
        else if (currentPage >= totalPages - 2) {
            renderPaginationItems(1, 2);
            const ellipsis = document.createElement('li');
            ellipsis.textContent = '...';
            paginationList.appendChild(ellipsis);
            renderPaginationItems(totalPages - 2, totalPages);
        }
        else {
            renderPaginationItems(1, 2);
            const ellipsis1 = document.createElement('li');
            ellipsis1.textContent = '...';
            paginationList.appendChild(ellipsis1);
            renderPaginationItems(currentPage - 1, currentPage + 1);
            const ellipsis2 = document.createElement('li');
            ellipsis2.textContent = '...';
            paginationList.appendChild(ellipsis2);
            renderPaginationItems(totalPages - 1, totalPages);
        }
    }
}

function init() {
    displayBlogs(currentPage);
    updatePagination();
}

init();

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayBlogs(currentPage);
        updatePagination();
        console.log('Current Page:', currentPage);
    }
});

nextBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(blogData.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayBlogs(currentPage);
        updatePagination();
        console.log('Current Page:', currentPage);
    }
});



// ======================================
// function displayBlogs(page) {
//     const startIndex = (page - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     let slicedBlogs = [];

//     if (blogData.length <= itemsPerPage) {
//         slicedBlogs = blogData;
//     } else {
//         const firstThree = blogData.slice(0, 3);
//         const lastThree = blogData.slice(-3);

//         if (page === 1) {
//             slicedBlogs = [...firstThree, ...blogData.slice(3, 6)];
//         } else if (page === Math.ceil(blogData.length / itemsPerPage)) {
//             slicedBlogs = [...blogData.slice(-6, -3), ...lastThree];
//         } else {
//             slicedBlogs = blogData.slice(startIndex - 1, endIndex - 1);
//         }
//     }

//     const blogList = document.getElementById('blog-list');
//     blogList.innerHTML = '';

//     slicedBlogs.forEach(blog => {
//         const li = document.createElement('li');
//         li.classList.add('blog-item');
//         li.textContent = `${blog.title}: ${blog.content}`;
//         blogList.appendChild(li);
//     });
// }

// function updatePagination() {
//     const totalPages = Math.ceil(blogData.length / itemsPerPage);
//     const paginationList = document.getElementById('pagination-list');
//     paginationList.innerHTML = '';

//     const renderPaginationItems = (start, end) => {
//         const ellipsis = document.createElement('li');
//         ellipsis.textContent = '...';

//         let ellipsisDisplayed = false;

//         for (let i = start; i <= end; i++) {
//             const li = document.createElement('li');
//             li.classList.add('pagination-item');
//             li.textContent = i;

//             if (i === currentPage) {
//                 li.classList.add('active');
//             }

//             li.addEventListener('click', () => {
//                 currentPage = i;
//                 displayBlogs(currentPage);
//                 updatePagination();
//                 console.log('Current Page:', currentPage);
//             });

//             paginationList.appendChild(li);

//             if (i === totalPages - 2) {
//                 // If current page is close to the end, display ellipsis
//                 ellipsisDisplayed = true;
//             }
//         }

//         if (end < totalPages - 1 && !ellipsisDisplayed) {
//             paginationList.appendChild(ellipsis);
//         }
//     };

//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');

//     prevBtn.disabled = currentPage === 1;
//     nextBtn.disabled = currentPage === totalPages;

//     if (totalPages <= 6) {
//         renderPaginationItems(1, totalPages);
//     } else {
//         if (currentPage <= 3) {
//             renderPaginationItems(1, 4);
//         } else if (currentPage >= totalPages - 2) {
//             renderPaginationItems(totalPages - 5, totalPages);
//         } else {
//             renderPaginationItems(currentPage - 2, currentPage + 2);
//         }
//     }
// }

// function init() {
//     displayBlogs(currentPage);
//     updatePagination();
// }

// init();

// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// prevBtn.addEventListener('click', () => {
//     if (currentPage > 1) {
//         currentPage--;
//         displayBlogs(currentPage);
//         updatePagination();
//         console.log('Current Page:', currentPage);
//     }
// });

// nextBtn.addEventListener('click', () => {
//     const totalPages = Math.ceil(blogData.length / itemsPerPage);
//     if (currentPage < totalPages) {
//         currentPage++;
//         displayBlogs(currentPage);
//         updatePagination();
//         console.log('Current Page:', currentPage);
//     }
// });
// =====================