import React from 'react';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const ServicesPage = () => {
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

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Profesional</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Tim ahli komunitas UNISGU siap membantu mewujudkan proyek digital Anda dengan kualitas enterprise dan harga yang kompetitif.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow relative">
              {service.popular && (
                <div className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="h-3 w-3 mr-1" />
                  Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 text-primary-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Harga:</span>
                    <span className="font-semibold text-slate-800">{service.priceRange}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Durasi:</span>
                    <span className="font-semibold text-slate-800">{service.duration}</span>
                  </div>
                </div>

                <button className="w-full mt-6 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                  <span>Konsultasi Gratis</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
            Proses Kerja Kami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="font-semibold mb-2">Konsultasi</h3>
              <p className="text-sm text-slate-600">
                Diskusi kebutuhan dan scope project secara detail
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="font-semibold mb-2">Proposal</h3>
              <p className="text-sm text-slate-600">
                Penyusunan proposal teknis dan timeline project
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-sm text-slate-600">
                Eksekusi project dengan update progress berkala
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-600">4</span>
              </div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-sm text-slate-600">
                Serah terima project dan training penggunaan
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Siap Memulai Proyek Anda?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Konsultasi gratis untuk membahas kebutuhan dan solusi terbaik untuk project Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-secondary-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors">
              WhatsApp: +62 812-3456-7890
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-secondary-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Email: layanan@unisgu.edu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
