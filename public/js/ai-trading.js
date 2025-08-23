document.addEventListener('DOMContentLoaded', () => {
    // Learning modules data
    const learningModules = [
        {
            id: 1,
            title: 'Foundation of AI Trading',
            description: 'Memahami dasar-dasar trading dengan bantuan AI dan machine learning',
            lessons: 8,
            duration: '3 weeks',
            level: 'Beginner',
            completed: 0
        },
        {
            id: 2,
            title: 'Market Analysis with Python',
            description: 'Analisis pasar menggunakan Python, pandas, dan libraries data science',
            lessons: 12,
            duration: '4 weeks',
            level: 'Intermediate',
            completed: 0
        },
        {
            id: 3,
            title: 'Machine Learning Models',
            description: 'Membangun model ML untuk prediksi harga dan pattern recognition',
            lessons: 15,
            duration: '6 weeks',
            level: 'Advanced',
            completed: 0
        },
        {
            id: 4,
            title: 'Algorithmic Trading Strategies',
            description: 'Implementasi strategi trading otomatis dengan backtesting',
            lessons: 10,
            duration: '4 weeks',
            level: 'Expert',
            completed: 0
        },
        {
            id: 5,
            title: 'Risk Management & Portfolio Optimization',
            description: 'Manajemen risiko dan optimasi portfolio menggunakan AI',
            lessons: 8,
            duration: '3 weeks',
            level: 'Advanced',
            completed: 0
        }
    ];

    // Pricing plans data
    const pricingPlans = [
        {
            name: 'Basic',
            price: 'Gratis',
            period: '',
            description: 'Akses konten dasar dan community',
            features: [
                'Akses module Foundation',
                'Community Discord',
                'Basic trading simulator',
                'Weekly newsletter'
            ],
            buttonText: 'Mulai Gratis',
            buttonClass: 'bg-primary-600 hover:bg-primary-700 text-white',
            popular: false
        },
        {
            name: 'Pro',
            price: 'Rp 299,000',
            period: '/bulan',
            description: 'Akses penuh + mentoring group',
            features: [
                'Semua konten Basic',
                'Akses semua modules premium',
                'Live trading sessions',
                'Group mentoring (2x/minggu)',
                'Advanced trading tools',
                'Portfolio analysis'
            ],
            buttonText: 'Pilih Pro',
            buttonClass: 'bg-secondary-500 hover:bg-secondary-600 text-white',
            popular: true
        },
        {
            name: 'Expert',
            price: 'Rp 599,000',
            period: '/bulan',
            description: 'Mentoring personal + trading capital',
            features: [
                'Semua konten Pro',
                'Personal mentoring (1-on-1)',
                'Custom trading bot development',
                'Real capital allocation',
                'Priority support',
                'Profit sharing program'
            ],
            buttonText: 'Pilih Expert',
            buttonClass: 'bg-accent-600 hover:bg-accent-700 text-white',
            popular: false
        }
    ];

    // Render learning modules
    const learningModulesContainer = document.getElementById('learning-modules');
    if (learningModulesContainer) {
        learningModules.forEach((module, index) => {
            const moduleCard = `
                <div class="flex flex-col md:flex-row items-start md:items-center p-6 bg-white rounded-xl shadow-lg border border-slate-200">
                    <div class="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <div class="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            ${index + 1}
                        </div>
                    </div>
                    <div class="flex-grow">
                        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div class="mb-4 md:mb-0">
                                <h3 class="text-xl font-semibold text-slate-800 mb-2">${module.title}</h3>
                                <p class="text-slate-600 mb-3">${module.description}</p>
                                <div class="flex flex-wrap gap-4 text-sm text-slate-500">
                                    <span class="flex items-center">
                                        <i data-lucide="book-open" class="h-4 w-4 mr-1"></i>
                                        ${module.lessons} lessons
                                    </span>
                                    <span class="flex items-center">
                                        <i data-lucide="clock" class="h-4 w-4 mr-1"></i>
                                        ${module.duration}
                                    </span>
                                    <span class="flex items-center">
                                        <i data-lucide="trending-up" class="h-4 w-4 mr-1"></i>
                                        ${module.level}
                                    </span>
                                </div>
                            </div>
                            <div class="flex flex-col items-start md:items-end">
                                <div class="w-32 bg-slate-200 rounded-full h-2 mb-2">
                                    <div class="bg-primary-600 h-2 rounded-full" style="width: ${module.completed}%"></div>
                                </div>
                                <span class="text-sm text-slate-500 mb-3">${module.completed}% completed</span>
                                <button class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                                    ${module.completed > 0 ? 'Continue' : 'Start Learning'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            learningModulesContainer.innerHTML += moduleCard;
        });
        lucide.createIcons();
    }

    // Render pricing plans
    const pricingContainer = document.getElementById('pricing-plans');
    if (pricingContainer) {
        pricingPlans.forEach(plan => {
            const planCard = `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative ${plan.popular ? 'ring-2 ring-secondary-500' : ''}">
                    ${plan.popular ? `
                        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div class="bg-secondary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                                Most Popular
                            </div>
                        </div>
                    ` : ''}
                    
                    <div class="p-6 text-center">
                        <h3 class="text-2xl font-bold text-slate-800 mb-2">${plan.name}</h3>
                        <div class="mb-4">
                            <span class="text-3xl font-bold text-slate-800">${plan.price}</span>
                            <span class="text-slate-500">${plan.period}</span>
                        </div>
                        <p class="text-slate-600 mb-6">${plan.description}</p>
                        
                        <ul class="space-y-3 mb-8 text-left">
                            ${plan.features.map(feature => `
                                <li class="flex items-center">
                                    <i data-lucide="check" class="h-5 w-5 text-green-500 mr-3 flex-shrink-0"></i>
                                    <span class="text-slate-600">${feature}</span>
                                </li>
                            `).join('')}
                        </ul>
                        
                        <button class="w-full py-3 px-6 rounded-lg font-medium transition-colors ${plan.buttonClass}">
                            ${plan.buttonText}
                        </button>
                    </div>
                </div>
            `;
            pricingContainer.innerHTML += planCard;
        });
        lucide.createIcons();
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
