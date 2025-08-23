import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Code, BookOpen, Globe, Star, ChevronRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tansan Open Source University
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Bergabunglah dengan komunitas global yang berkolaborasi membangun masa depan teknologi melalui pembelajaran terbuka dan kontribusi nyata
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/belajar-gratis"
                className="bg-secondary-500 hover:bg-secondary-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <BookOpen className="h-5 w-5" />
                <span>Mulai Belajar Gratis</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/membership"
                className="border-2 border-white hover:bg-white hover:text-primary-800 px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Bergabung Komunitas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose UNISGU */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Mengapa Memilih UNISGU?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Platform pembelajaran yang didorong oleh komunitas, terbuka untuk semua, dan fokus pada kontribusi nyata
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pembelajaran Kolaboratif</h3>
              <p className="text-slate-600">
                Belajar bersama komunitas global yang saling mendukung dan berbagi pengetahuan
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Open Source First</h3>
              <p className="text-slate-600">
                Semua materi pembelajaran dan proyek menggunakan teknologi open source terkini
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Akses Global</h3>
              <p className="text-slate-600">
                Platform virtual yang dapat diakses dari mana saja, kapan saja, tanpa batasan geografis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Preview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Jalur Pembelajaran Tersedia
            </h2>
            <p className="text-xl text-slate-600">
              Pilih jalur pembelajaran yang sesuai dengan minat dan tujuan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Fullstack Web Developer</h3>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  Gratis
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                Pelajari pengembangan web modern dari frontend hingga backend dengan teknologi terkini
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-600">
                  <ChevronRight className="h-4 w-4 text-primary-500 mr-2" />
                  React.js & JavaScript Modern
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <ChevronRight className="h-4 w-4 text-primary-500 mr-2" />
                  Node.js & Express.js
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <ChevronRight className="h-4 w-4 text-primary-500 mr-2" />
                  Database & API Development
                </li>
              </ul>
              <Link
                to="/belajar-gratis"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Mulai Belajar
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Mobile Developer</h3>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  Gratis
                </span>
              </div>
              <p className="text-slate-600 mb-4">
                Bangun aplikasi mobile cross-platform dengan React Native dan Flutter
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-slate-600">
                  <ChevronRight className="h-4 w-4 text-primary-500 mr-2" />
                  React Native & Flutter
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <ChevronRight className="h-4 w-4 text-primary-500 mr-2" />
                  Mobile UI/UX Design
                </li>
                <li className="flex items-center text-sm text-slate-600">
                  <ChevronRight className="h-4 w-4 text-primary-500 mr-2" />
                  App Store Deployment
                </li>
              </ul>
              <Link
                to="/belajar-gratis"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Mulai Belajar
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Testimoni Komunitas
            </h2>
            <p className="text-xl text-slate-600">
              Apa kata mereka yang sudah bergabung dengan UNISGU
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Komunitas UNISGU sangat supportive! Saya berhasil membangun portfolio yang solid dan mendapat pekerjaan sebagai developer."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                  alt="Ahmad Fadli"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Ahmad Fadli</p>
                  <p className="text-sm text-slate-500">Frontend Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Materi pembelajaran di UNISGU sangat up-to-date dengan industri. Mentor-mentornya juga berpengalaman dan siap membantu."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                  alt="Sari Indah"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Sari Indah</p>
                  <p className="text-sm text-slate-500">Mobile Developer</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Platform open source UNISGU memungkinkan saya berkontribusi pada proyek nyata sambil belajar. Pengalaman yang luar biasa!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="Rizki Pratama"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-medium">Rizki Pratama</p>
                  <p className="text-sm text-slate-500">Fullstack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Memulai Perjalanan Anda?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan developer yang telah memulai karir mereka bersama UNISGU
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/belajar-gratis"
              className="bg-secondary-500 hover:bg-secondary-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Mulai Belajar Sekarang
            </Link>
            <Link
              to="/layanan"
              className="border-2 border-white hover:bg-white hover:text-primary-800 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Lihat Layanan Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
