document.addEventListener('DOMContentLoaded', () => {
    const services = [
        {
          id: 1,
          title: 'Pengembangan Website',
          description: 'Pembuatan website profesional untuk bisnis, UMKM, institusi, dan lembaga dengan teknologi modern, cepat, dan aman.',
          features: [
            'Design responsive dan modern',
            'SEO optimization',
            'Keamanan tingkat enterprise',
            'Maintenance dan support'
          ],
          priceRange: 'Rp 3.000.000 - Rp 15.000.000',
          duration: '2-8 minggu',
          popular: true
        },
        {
          id: 2,
          title: 'Instalasi Open Journal Systems (OJS)',
          description: 'Layanan instalasi, konfigurasi, dan maintenance OJS untuk penerbitan jurnal ilmiah Anda secara profesional.',
          features: [
            'Instalasi dan konfigurasi OJS',
            'Custom theme dan branding',
            'Training penggunaan',
            'Maintenance bulanan'
          ],
          priceRange: 'Rp 1.500.000 - Rp 5.000.000',
          duration: '1-2 minggu'
        },
        {
          id: 3,
          title: 'Manajemen Server & VPS',
          description: 'Instalasi dan optimasi VPS, termasuk setup aaPanel, Nginx, dan konfigurasi keamanan untuk performa maksimal.',
          features: [
            'Setup dan konfigurasi VPS',
            'Instalasi aaPanel/cPanel',
            'Security hardening',
            'Monitoring dan maintenance'
          ],
          priceRange: 'Rp 500.000 - Rp 2.000.000/bulan',
          duration: 'Ongoing'
        },
        {
          id: 4,
          title: 'Pendampingan Publikasi Ilmiah',
          description: 'Bantuan publikasi dari submit hingga terbit di SINTA (1-6) dan Scopus (Q2 & Q3), termasuk formatting dan proofreading.',
          features: [
            'Analisis dan pemilihan jurnal',
            'Formatting sesuai guidelines',
            'Proofreading dan editing',
            'Pendampingan hingga publish'
          ],
          priceRange: 'Rp 4.000.000 - Rp 12.000.000',
          duration: '3-8 bulan'
        },
        {
          id: 5,
          title: 'Jasa Penulisan Buku',
          description: 'Kami membantu penulisan dan penerbitan buku ajar, buku referensi, dan monograf, lengkap dengan ISBN dan desain cover.',
          features: [
            'Penulisan dan editing',
            'Design cover profesional',
            'Proses penerbitan ISBN',
            'Marketing dan distribusi'
          ],
          priceRange: 'Rp 7.000.000 - Rp 20.000.000',
          duration: '2-6 bulan'
        },
        {
          id: 6,
          title: 'Konsultasi Teknologi',
          description: 'Butuh saran ahli untuk proyek digital Anda? Tim kami siap membantu Anda menemukan solusi teknologi yang tepat.',
          features: [
            'Analisis kebutuhan teknis',
            'Rekomendasi teknologi',
            'Planning dan roadmap',
            'Implementation guidance'
          ],
          priceRange: 'Rp 400.000 - Rp 1.000.000/jam',
          duration: 'Flexible'
        }
    ];

    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        services.forEach(service => {
            const serviceCard = `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative flex flex-col">
                  ${service.popular ? `
                  <div class="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <i data-lucide="star" class="h-3 w-3 mr-1 fill-white"></i>
                    Popular
                  </div>` : ''}
                  
                  <div class="p-6 flex-grow">
                    <h3 class="text-xl font-semibold text-slate-800 mb-3">
                      ${service.title}
                    </h3>
                    <p class="text-slate-600 mb-4 text-sm">
                      ${service.description}
                    </p>

                    <div class="space-y-2 mb-6">
                      ${service.features.map(feature => `
                        <div class="flex items-center text-sm text-slate-600">
                          <i data-lucide="check-circle" class="h-4 w-4 text-primary-500 mr-2 flex-shrink-0"></i>
                          <span>${feature}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <div class="p-6 border-t">
                    <div class="space-y-2 mb-6">
                      <div class="flex items-center justify-between text-sm">
                        <span class="text-slate-500">Harga:</span>
                        <span class="font-semibold text-slate-800">${service.priceRange}</span>
                      </div>
                      <div class="flex items-center justify-between text-sm">
                        <span class="text-slate-500">Durasi:</span>
                        <span class="font-semibold text-slate-800">${service.duration}</span>
                      </div>
                    </div>

                    <a 
                      href="mailto:layanan@unisgu.edu?subject=Konsultasi Gratis untuk ${service.title}"
                      class="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Konsultasi Gratis</span>
                      <i data-lucide="arrow-right" class="h-4 w-4"></i>
                    </a>
                  </div>
                </div>
            `;
            servicesGrid.innerHTML += serviceCard;
        });
        lucide.createIcons();
    }
});
