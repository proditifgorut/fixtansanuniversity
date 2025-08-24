document.addEventListener('DOMContentLoaded', () => {
    const learningContent = [
        {
            id: 1,
            title: 'Dasar-Dasar JavaScript',
            description: 'Pelajari konsep fundamental JavaScript, dari variabel hingga fungsi, untuk membangun pondasi pemrograman web yang kuat.',
            category: 'programming',
            duration: '4 Jam',
            level: 'Pemula',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/W_aUm2N62-U/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/W_aUm2N62-U',
            instructor: 'Web Programming UNPAS',
            rating: 4.9,
            students: 2150
        },
        {
            id: 2,
            title: 'React JS untuk Pemula',
            description: 'Mulai bangun aplikasi web modern dan interaktif dengan library terpopuler, React JS. Cocok untuk Anda yang sudah paham dasar JS.',
            category: 'programming',
            duration: '6 Jam',
            level: 'Menengah',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/kcnG-b_e-gI/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/kcnG-b_e-gI',
            instructor: 'Dea Afrizal',
            rating: 4.9,
            students: 1890
        },
        {
            id: 3,
            title: 'Prinsip Desain UI/UX',
            description: 'Pahami prinsip-prinsip esensial dalam desain antarmuka yang fungsional dan ramah pengguna untuk menciptakan produk digital yang lebih baik.',
            category: 'design',
            duration: '3 Jam',
            level: 'Pemula',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/cK41hA_iVzM/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/cK41hA_iVzM',
            instructor: 'Angga Risky',
            rating: 4.8,
            students: 1765
        },
        {
            id: 4,
            title: 'Strategi Pemasaran Digital',
            description: 'Pelajari strategi pemasaran digital yang efektif, mulai dari SEO, SEM, hingga media sosial untuk meningkatkan jangkauan bisnis Anda.',
            category: 'business',
            duration: '5 Jam',
            level: 'Menengah',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/nLp5h_yK-c8/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/nLp5h_yK-c8',
            instructor: 'Neil Patel',
            rating: 4.7,
            students: 1432
        },
        {
            id: 6,
            title: 'Python untuk Data Science',
            description: 'Kuasai analisis data menggunakan Python, Pandas, dan Matplotlib. Langkah pertama Anda menjadi seorang Data Scientist.',
            category: 'programming',
            duration: '10 Jam',
            level: 'Lanjutan',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/LHBE6Q9XlzI/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/LHBE6Q9XlzI',
            instructor: 'freeCodeCamp.org',
            rating: 4.9,
            students: 2543
        },
        {
            id: 7,
            title: 'Dasar Desain Grafis dengan Canva',
            description: 'Belajar membuat desain visual yang menarik untuk media sosial, presentasi, dan lainnya menggunakan Canva.',
            category: 'design',
            duration: '4 Jam',
            level: 'Pemula',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/6zl-e-h4J2U/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/6zl-e-h4J2U',
            instructor: 'Canva',
            rating: 4.7,
            students: 1389
        },
        {
            id: 8,
            title: 'Fundamental Membangun Startup',
            description: 'Pelajari langkah-langkah kunci dalam membangun startup yang sukses, mulai dari validasi ide hingga mencari pendanaan.',
            category: 'business',
            duration: '7 Jam',
            level: 'Menengah',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/bNpx7gpSqbY/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/bNpx7gpSqbY',
            instructor: 'Y Combinator',
            rating: 4.9,
            students: 1567
        },
        {
            id: 10,
            title: 'Bahasa Arab: Tingkat Fundamental',
            description: 'Pelajari dasar-dasar tata bahasa Arab (Nahwu & Sharaf) dan kosakata esensial untuk pemula.',
            category: 'language',
            duration: '8 Jam',
            level: 'Pemula',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/a_q_yAqaSVE/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/a_q_yAqaSVE',
            instructor: 'Learn Arabic with ArabicPod101',
            rating: 4.8,
            students: 1980
        },
        {
            id: 11,
            title: 'Bahasa Arab: Tingkat Intermediate',
            description: 'Tingkatkan kemampuan percakapan sehari-hari dan pemahaman teks sederhana dalam Bahasa Arab.',
            category: 'language',
            duration: '10 Jam',
            level: 'Menengah',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/Ut_sixc-2Kk/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/Ut_sixc-2Kk',
            instructor: 'Imran Alawiye',
            rating: 4.7,
            students: 1450
        },
        {
            id: 12,
            title: 'Bahasa Arab: Tingkat Advance',
            description: 'Dalam pembahasan sastra, media, dan topik-topik kompleks untuk menguasai Bahasa Arab secara mendalam.',
            category: 'language',
            duration: '12 Jam',
            level: 'Lanjutan',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/sBcvs_94sFA/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/sBcvs_94sFA',
            instructor: 'Al Jazeera Learning',
            rating: 4.9,
            students: 975
        },
        {
            id: 13,
            title: 'Bahasa Mandarin: Tingkat Fundamental',
            description: 'Kuasai Pinyin, nada, dan karakter dasar Bahasa Mandarin untuk memulai percakapan sederhana.',
            category: 'language',
            duration: '9 Jam',
            level: 'Pemula',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/wYp-4i_wQ-Y/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/wYp-4i_wQ-Y',
            instructor: 'Everyday Chinese',
            rating: 4.8,
            students: 2200
        },
        {
            id: 14,
            title: 'Bahasa Mandarin: Tingkat Intermediate',
            description: 'Perluas kosakata Anda dan pelajari struktur kalimat yang lebih kompleks untuk level HSK 3.',
            category: 'language',
            duration: '11 Jam',
            level: 'Menengah',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/s3Z1D2i-I0U/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/s3Z1D2i-I0U',
            instructor: 'Chinese Zero to Hero',
            rating: 4.7,
            students: 1800
        },
        {
            id: 15,
            title: 'Bahasa Mandarin: Tingkat Advance',
            description: 'Fokus pada penggunaan idiom, diskusi topik formal, dan persiapan untuk level HSK 5/6.',
            category: 'language',
            duration: '15 Jam',
            level: 'Lanjutan',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/sFo_S8qD2eI/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/sFo_S8qD2eI',
            instructor: 'Mandarin Corner',
            rating: 4.9,
            students: 1100
        },
        {
            id: 16,
            title: 'Bahasa Persia: Tingkat Fundamental',
            description: 'Pelajari alfabet Persia, pengucapan, dan frasa-frasa dasar untuk komunikasi sehari-hari.',
            category: 'language',
            duration: '7 Jam',
            level: 'Pemula',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/kKa_i_V5w5c/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/kKa_i_V5w5c',
            instructor: 'Persian Pod 101',
            rating: 4.7,
            students: 950
        },
        {
            id: 17,
            title: 'Bahasa Persia: Tingkat Intermediate',
            description: 'Mulai membangun kalimat yang lebih kompleks dan memahami percakapan dalam berbagai konteks.',
            category: 'language',
            duration: '9 Jam',
            level: 'Menengah',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/L3unN2C-4gI/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/L3unN2C-4gI',
            instructor: 'Chai and Conversation',
            rating: 4.8,
            students: 720
        },
        {
            id: 18,
            title: 'Bahasa Persia: Tingkat Advance',
            description: 'Analisis puisi-puisi klasik dari Rumi dan Hafez, serta diskusi topik-topik budaya yang mendalam.',
            category: 'language',
            duration: '11 Jam',
            level: 'Lanjutan',
            thumbnail: 'https://img-wrapper.vercel.app/image?url=https://img.youtube.com/vi/d_K43F_E1yU/maxresdefault.jpg',
            youtubeUrl: 'https://www.youtube.com/embed/d_K43F_E1yU',
            instructor: 'Professor Pouneh Shabani',
            rating: 4.9,
            students: 540
        }
    ];

    let currentPage = 1;
    const itemsPerPage = 6;
    let filteredContent = [...learningContent];

    const learningGrid = document.getElementById('learning-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('video-modal');
    const videoIframe = document.getElementById('video-iframe');
    const closeModalBtn = document.getElementById('close-modal-btn');

    function createContentCard(content) {
        return `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div class="relative">
                    <img src="${content.thumbnail}" alt="${content.title}" class="w-full h-48 object-cover">
                    <div class="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow">
                        ${content.level}
                    </div>
                    <div class="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center shadow">
                        <i data-lucide="clock" class="h-4 w-4 mr-1"></i>
                        ${content.duration}
                    </div>
                </div>
                <div class="p-6 flex flex-col flex-grow">
                    <h3 class="text-xl font-semibold text-slate-800 mb-3">${content.title}</h3>
                    <p class="text-slate-700 text-sm mb-4 flex-grow">${content.description}</p>
                    
                    <div class="mt-auto pt-4 border-t border-slate-100">
                        <div class="flex items-center mb-4">
                            <div class="flex items-center space-x-1 text-yellow-500">
                                <i data-lucide="star" class="h-4 w-4 fill-current"></i>
                                <span class="text-sm font-medium text-slate-700">${content.rating}</span>
                            </div>
                            <span class="text-slate-400 text-sm mx-2">•</span>
                            <span class="text-slate-600 text-sm">${content.students} siswa</span>
                        </div>
                        
                        <div class="flex items-center justify-between">
                            <div class="flex items-center space-x-2">
                                <div class="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                                    <i data-lucide="user" class="h-4 w-4 text-primary-600"></i>
                                </div>
                                <span class="text-sm text-slate-600 font-medium">${content.instructor}</span>
                            </div>
                            <button data-youtube-url="${content.youtubeUrl}" title="Tonton video ${content.title}" class="open-video-btn bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
                                <i data-lucide="play" class="h-4 w-4"></i>
                                <span>Tonton Video</span>
                            </button>
                        </div>
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

    function openModal(url) {
        if (modal && videoIframe) {
            videoIframe.src = url;
            modal.classList.remove('hidden');
            lucide.createIcons(); // Re-render close icon if needed
        }
    }

    function closeModal() {
        if (modal && videoIframe) {
            modal.classList.add('hidden');
            videoIframe.src = ''; // Stop video playback
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-primary-600', 'text-white');
                btn.classList.add('bg-white', 'hover:bg-primary-50', 'text-slate-700', 'border');
            });
            button.classList.remove('bg-white', 'hover:bg-primary-50', 'text-slate-700', 'border');
            button.classList.add('active', 'bg-primary-600', 'text-white');
            const category = button.getAttribute('data-category');
            filterContent(category);
        });
    });

    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        renderContent();
    });

    // Event delegation for video modal
    learningGrid.addEventListener('click', (e) => {
        const button = e.target.closest('.open-video-btn');
        if (button) {
            const url = button.dataset.youtubeUrl;
            openModal(url);
        }
    });

    // Close modal events
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Initial render
    renderContent();
});
