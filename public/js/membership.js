document.addEventListener('DOMContentLoaded', () => {
    // Membership plans data
    const membershipPlans = [
        {
            name: 'Student',
            price: 'Rp 99,000',
            period: '/bulan',
            description: 'Perfect untuk pelajar dan mahasiswa',
            features: [
                'Akses semua course gratis',
                'Basic community access',
                'Monthly webinar',
                'Email support',
                'Basic certificate'
            ],
            buttonText: 'Pilih Student',
            buttonClass: 'bg-primary-600 hover:bg-primary-700 text-white',
            popular: false,
            discount: '50% OFF untuk pelajar'
        },
        {
            name: 'Professional',
            price: 'Rp 299,000',
            period: '/bulan',
            description: 'Ideal untuk profesional dan career growth',
            features: [
                'Semua benefit Student',
                'Premium course access',
                'Priority community access',
                'Weekly live sessions',
                'Personal project review',
                'Industry-recognized certificate',
                'Job referral network'
            ],
            buttonText: 'Pilih Professional',
            buttonClass: 'bg-secondary-500 hover:bg-secondary-600 text-white',
            popular: true,
            discount: null
        },
        {
            name: 'Enterprise',
            price: 'Rp 799,000',
            period: '/bulan',
            description: 'Untuk perusahaan dan team development',
            features: [
                'Semua benefit Professional',
                'Team management dashboard',
                'Custom corporate training',
                '1-on-1 mentoring sessions',
                'Priority support',
                'Custom project development',
                'White-label certificates',
                'Dedicated account manager'
            ],
            buttonText: 'Hubungi Sales',
            buttonClass: 'bg-accent-600 hover:bg-accent-700 text-white',
            popular: false,
            discount: 'Custom pricing available'
        }
    ];

    // FAQ data
    const faqData = [
        {
            question: 'Apa perbedaan antara paket Student, Professional, dan Enterprise?',
            answer: 'Paket Student cocok untuk pelajar dengan akses dasar. Professional memberikan akses penuh dan mentoring untuk career growth. Enterprise dirancang untuk perusahaan dengan fitur team management dan custom training.'
        },
        {
            question: 'Apakah saya bisa upgrade atau downgrade paket kapan saja?',
            answer: 'Ya, Anda bisa mengubah paket membership kapan saja. Perubahan akan berlaku pada periode billing berikutnya. Jika upgrade, Anda langsung mendapat akses ke fitur tambahan.'
        },
        {
            question: 'Apakah ada garansi uang kembali?',
            answer: 'Kami menyediakan garansi 30 hari uang kembali untuk semua paket. Jika tidak puas, Anda bisa request refund dalam 30 hari pertama.'
        },
        {
            question: 'Bagaimana cara mengakses konten setelah menjadi member?',
            answer: 'Setelah pembayaran dikonfirmasi, Anda akan mendapat email dengan credential untuk mengakses member area. Semua konten dapat diakses melalui dashboard member.'
        },
        {
            question: 'Apakah sertifikat yang diberikan diakui industri?',
            answer: 'Ya, sertifikat kami diakui oleh banyak perusahaan partner. Sertifikat Professional dan Enterprise memiliki nilai lebih tinggi untuk career advancement.'
        },
        {
            question: 'Bisakah saya membeli membership untuk tim/perusahaan?',
            answer: 'Tentu! Paket Enterprise dirancang khusus untuk perusahaan. Kami juga menyediakan custom package untuk kebutuhan spesifik organisasi Anda.'
        }
    ];

    // Render membership plans
    const membershipContainer = document.getElementById('membership-plans');
    if (membershipContainer) {
        membershipPlans.forEach(plan => {
            const planCard = `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative ${plan.popular ? 'ring-2 ring-secondary-500 scale-105' : ''}">
                    ${plan.popular ? `
                        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div class="bg-secondary-500 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center">
                                <i data-lucide="star" class="h-4 w-4 mr-1 fill-white"></i>
                                Most Popular
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="p-8">
                        <div class="text-center mb-8">
                            <h3 class="text-2xl font-bold text-slate-800 mb-2">${plan.name}</h3>
                            <div class="mb-2">
                                <span class="text-4xl font-bold text-slate-800">${plan.price}</span>
                                <span class="text-slate-500 text-lg">${plan.period}</span>
                            </div>
                            ${plan.discount ? `
                                <div class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                                    ${plan.discount}
                                </div>
                            ` : ''}
                            <p class="text-slate-600 mt-4">${plan.description}</p>
                        </div>
                        
                        <ul class="space-y-4 mb-8">
                            ${plan.features.map(feature => `
                                <li class="flex items-start">
                                    <div class="flex-shrink-0">
                                        <i data-lucide="check-circle" class="h-5 w-5 text-green-500 mt-0.5"></i>
                                    </div>
                                    <span class="text-slate-600 ml-3">${feature}</span>
                                </li>
                            `).join('')}
                        </ul>
                        
                        <button class="w-full py-4 px-6 rounded-lg font-semibold transition-colors ${plan.buttonClass}">
                            ${plan.buttonText}
                        </button>
                        
                        <p class="text-center text-slate-500 text-sm mt-4">
                            No hidden fees • Cancel anytime
                        </p>
                    </div>
                </div>
            `;
            membershipContainer.innerHTML += planCard;
        });
        lucide.createIcons();
    }

    // Render FAQ
    const faqContainer = document.getElementById('faq-container');
    if (faqContainer) {
        faqData.forEach((faq, index) => {
            const faqItem = `
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <button class="faq-trigger w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors" data-faq="${index}">
                        <span class="font-semibold text-slate-800">${faq.question}</span>
                        <i data-lucide="chevron-down" class="h-5 w-5 text-slate-500 transform transition-transform faq-icon-${index}"></i>
                    </button>
                    <div class="faq-content-${index} px-6 pb-4 hidden">
                        <p class="text-slate-600">${faq.answer}</p>
                    </div>
                </div>
            `;
            faqContainer.innerHTML += faqItem;
        });
        lucide.createIcons();

        // FAQ toggle functionality
        document.querySelectorAll('.faq-trigger').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const faqIndex = trigger.getAttribute('data-faq');
                const content = document.querySelector(`.faq-content-${faqIndex}`);
                const icon = document.querySelector(`.faq-icon-${faqIndex}`);
                
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.classList.add('rotate-180');
                } else {
                    content.classList.add('hidden');
                    icon.classList.remove('rotate-180');
                }
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
