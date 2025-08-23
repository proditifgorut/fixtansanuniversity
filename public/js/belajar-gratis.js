document.addEventListener('DOMContentLoaded', () => {
    // Sample learning content data
    const learningContent = [
        {
            id: 1,
            title: 'JavaScript Fundamentals',
            description: 'Pelajari dasar-dasar JavaScript dari variabel hingga function',
            category: 'programming',
            duration: '4 hours',
            level: 'Beginner',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/3b82f6/ffffff?text=JavaScript',
            instructor: 'John Doe',
            rating: 4.8,
            students: 1250
        },
        {
            id: 2,
            title: 'React for Beginners',
            description: 'Membangun aplikasi web modern dengan React JS',
            category: 'programming',
            duration: '6 hours',
            level: 'Intermediate',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/61dafb/000000?text=React',
            instructor: 'Jane Smith',
            rating: 4.9,
            students: 890
        },
        {
            id: 3,
            title: 'UI/UX Design Principles',
            description: 'Prinsip-prinsip dasar design yang user-friendly',
            category: 'design',
            duration: '3 hours',
            level: 'Beginner',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/ec4899/ffffff?text=UI%2FUX',
            instructor: 'Alex Wilson',
            rating: 4.7,
            students: 765
        },
        {
            id: 4,
            title: 'Digital Marketing Strategy',
            description: 'Strategi pemasaran digital yang efektif untuk bisnis',
            category: 'business',
            duration: '5 hours',
            level: 'Intermediate',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/10b981/ffffff?text=Marketing',
            instructor: 'Sarah Johnson',
            rating: 4.6,
            students: 432
        },
        {
            id: 5,
            title: 'English for Business',
            description: 'Bahasa Inggris praktis untuk komunikasi bisnis',
            category: 'language',
            duration: '8 hours',
            level: 'Intermediate',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/f59e0b/ffffff?text=English',
            instructor: 'Mike Brown',
            rating: 4.5,
            students: 678
        },
        {
            id: 6,
            title: 'Python Data Science',
            description: 'Analisis data menggunakan Python dan pandas',
            category: 'programming',
            duration: '10 hours',
            level: 'Advanced',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/3776ab/ffffff?text=Python',
            instructor: 'Dr. Lisa Chen',
            rating: 4.9,
            students: 543
        },
        {
            id: 7,
            title: 'Graphic Design Basics',
            description: 'Dasar-dasar desain grafis menggunakan tools modern',
            category: 'design',
            duration: '4 hours',
            level: 'Beginner',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/8b5cf6/ffffff?text=Design',
            instructor: 'Emma Davis',
            rating: 4.4,
            students: 389
        },
        {
            id: 8,
            title: 'Startup Fundamentals',
            description: 'Membangun startup dari ide hingga eksekusi',
            category: 'business',
            duration: '7 hours',
            level: 'Intermediate',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/ef4444/ffffff?text=Startup',
            instructor: 'Tom Anderson',
            rating: 4.7,
            students: 567
        },
        {
            id: 9,
            title: 'Japanese for Beginners',
            description: 'Belajar bahasa Jepang dari dasar dengan mudah',
            category: 'language',
            duration: '12 hours',
            level: 'Beginner',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/dc2626/ffffff?text=Japanese',
            instructor: 'Kenji Tanaka',
            rating: 4.6,
            students: 234
        }
    ];

    let currentPage = 1;
    const itemsPerPage = 6;
    let filteredContent = [...learningContent];

    const learningGrid = document.getElementById('learning-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function createContentCard(content) {
        return `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div class="relative">
                    <img src="${content.thumbnail}" alt="${content.title}" class="w-full h-48 object-cover">
                    <div class="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ${content.level}
                    </div>
                    <div class="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        ${content.duration}
                    </div>
                </div>
                <div class="p-6">
                    <h3 class="text-xl font-semibold text-slate-800 mb-2">${content.title}</h3>
                    <p class="text-slate-600 text-sm mb-4">${content.description}</p>
                    
                    <div class="flex items-center mb-4">
                        <div class="flex items-center space-x-1 text-yellow-500">
                            <i data-lucide="star" class="h-4 w-4 fill-current"></i>
                            <span class="text-sm font-medium text-slate-700">${content.rating}</span>
                        </div>
                        <span class="text-slate-400 text-sm mx-2">•</span>
                        <span class="text-slate-600 text-sm">${content.students} students</span>
                    </div>
                    
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                <i data-lucide="user" class="h-4 w-4 text-primary-600"></i>
                            </div>
                            <span class="text-sm text-slate-600">${content.instructor}</span>
                        </div>
                        <a href="#" class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                            Mulai Belajar
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    function renderContent() {
        const startIndex = 0;
        const endIndex = currentPage * itemsPerPage;
        const contentToShow = filteredContent.slice(startIndex, endIndex);
        
        learningGrid.innerHTML = contentToShow.map(createContentCard).join('');
        lucide.createIcons();

        // Update load more button visibility
        if (endIndex >= filteredContent.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    function filterContent(category) {
        if (category === 'all') {
            filteredContent = [...learningContent];
        } else {
            filteredContent = learningContent.filter(content => content.category === category);
        }
        currentPage = 1;
        renderContent();
    }

    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-primary-600', 'text-white');
                btn.classList.add('bg-white', 'hover:bg-primary-50', 'text-slate-700', 'border');
            });
            button.classList.remove('bg-white', 'hover:bg-primary-50', 'text-slate-700', 'border');
            button.classList.add('active', 'bg-primary-600', 'text-white');

            // Filter content
            const category = button.getAttribute('data-category');
            filterContent(category);
        });
    });

    // Load more button event listener
    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderContent();
    });

    // Initial render
    renderContent();
});
