import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit, Server, BarChart, GraduationCap, ShieldCheck, Link as LinkIcon, ArrowRight, Play, ExternalLink } from 'lucide-react';

const AiTradingPage = () => {
  const learningModules = [
    {
      title: 'Pengembangan Algoritma Trading AI',
      description: 'Membangun sistem trading cerdas menggunakan machine learning untuk prediksi harga dan strategi adaptif.',
      icon: <BrainCircuit className="h-8 w-8" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      concepts: ['Machine Learning (LSTM, Reinforcement Learning)', 'Analisis Data Time Series', 'Python (Pandas, TensorFlow)'],
      videos: [
        { title: 'LSTM for Stock Prediction', channel: 'freeCodeCamp', url: 'https://www.youtube.com/embed/CbTU92_6_g0', link: 'https://www.youtube.com/watch?v=CbTU92_6_g0' },
        { title: 'Reinforcement Learning for Trading', channel: 'Siraj Raval', url: 'https://www.youtube.com/embed/a-r_i-b5V-s', link: 'https://www.youtube.com/watch?v=a-r_i-b5V-s' },
      ]
    },
    {
      title: 'SaaS Trading Platform',
      description: 'Menawarkan platform cloud-based trading bot dengan model berlangganan (subscription).',
      icon: <Server className="h-8 w-8" />,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      concepts: ['Arsitektur Microservices', 'Integrasi API (Binance, MT5)', 'Real-time Dashboard (WebSockets)'],
      videos: [
        { title: 'Build a SaaS with React & Firebase', channel: 'Fireship', url: 'https://www.youtube.com/embed/pI4438IH-dI', link: 'https://www.youtube.com/watch?v=pI4438IH-dI' },
        { title: 'Connecting to Binance API', channel: 'Computer Science', url: 'https://www.youtube.com/embed/1_n_p3gRr2E', link: 'https://www.youtube.com/watch?v=1_n_p3gRr2E' },
      ]
    },
    {
      title: 'Big Data & Market Sentiment Analysis',
      description: 'Layanan analisis sentimen dari media sosial untuk mendukung prediksi harga aset.',
      icon: <BarChart className="h-8 w-8" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      concepts: ['Natural Language Processing (NLP)', 'Web Scraping (Twitter, Reddit)', 'Visualisasi Data'],
      videos: [
        { title: 'Sentiment Analysis with Python', channel: 'freeCodeCamp', url: 'https://www.youtube.com/embed/3_LAb8m9MpI', link: 'https://www.youtube.com/watch?v=3_LAb8m9MpI' },
        { title: 'Web Scraping with Python', channel: 'Traversy Media', url: 'https://www.youtube.com/embed/gjR6r-p_oJ4', link: 'https://www.youtube.com/watch?v=gjR6r-p_oJ4' },
      ]
    },
    {
      title: 'Konsultasi & Edukasi AI Trading',
      description: 'Membuka kursus atau pelatihan di bidang Fintech AI, dari dasar hingga manajemen risiko.',
      icon: <GraduationCap className="h-8 w-8" />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      concepts: ['Dasar-dasar Fintech', 'Manajemen Risiko Keuangan', 'Etika AI dalam Finansial'],
      videos: [
        { title: 'What is FinTech?', channel: 'Harvard University', url: 'https://www.youtube.com/embed/h9b6i_3-d-A', link: 'https://www.youtube.com/watch?v=h9b6i_3-d-A' },
        { title: 'Financial Risk Management', channel: 'Edspira', url: 'https://www.youtube.com/embed/cWn25_4-c3w', link: 'https://www.youtube.com/watch?v=cWn25_4-c3w' },
      ]
    },
    {
      title: 'Keamanan & Audit Algoritma',
      description: 'Menyediakan jasa audit algoritma trading dan smart contract untuk membangun kepercayaan pengguna.',
      icon: <ShieldCheck className="h-8 w-8" />,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
      concepts: ['Cybersecurity untuk Fintech', 'Audit Smart Contract', 'Penetration Testing'],
      videos: [
        { title: 'Smart Contract Auditing', channel: 'Patrick Collins', url: 'https://www.youtube.com/embed/TwgG-GqV_34', link: 'https://www.youtube.com/watch?v=TwgG-GqV_34' },
        { title: 'Cybersecurity for Finance', channel: 'Simplilearn', url: 'https://www.youtube.com/embed/z5f9-25N_3U', link: 'https://www.youtube.com/watch?v=z5f9-25N_3U' },
      ]
    },
    {
      title: 'Integrasi dengan Blockchain',
      description: 'Membangun Decentralized Finance (DeFi) trading bot di atas jaringan blockchain.',
      icon: <LinkIcon className="h-8 w-8" />,
      color: 'text-teal-500',
      bgColor: 'bg-teal-50',
      concepts: ['Dasar-dasar Blockchain & DeFi', 'Smart Contract (Solidity)', 'Interaksi dengan dApps'],
      videos: [
        { title: 'DeFi Explained', channel: 'Whiteboard Crypto', url: 'https://www.youtube.com/embed/k9HYC0EJU6E', link: 'https://www.youtube.com/watch?v=k9HYC0EJU6E' },
        { title: 'Solidity Tutorial', channel: 'freeCodeCamp', url: 'https://www.youtube.com/embed/gyMwXuJrbJQ', link: 'https://www.youtube.com/watch?v=gyMwXuJrbJQ' },
      ]
    }
  ];

  const VideoCard = ({ video }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-100 relative">
        <iframe
          src={video.url}
          title={video.title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-slate-800 mb-2 line-clamp-2">
          <a 
            href={video.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary-600 transition-colors"
          >
            {video.title}
          </a>
        </h4>
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span>{video.channel}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pusat Pembelajaran AI Trading & Fintech</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Jelajahi masa depan finansial dengan kurikulum terstruktur untuk membangun algoritma trading, platform SaaS, dan solusi fintech berbasis AI.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningModules.map((module, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className={`${module.bgColor} ${module.color} p-3 rounded-lg`}>
                  {module.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{module.title}</h3>
              <p className="text-slate-600 text-sm mb-4 flex-grow">{module.description}</p>
              
              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-slate-700 mb-2">Konsep Kunci:</h4>
                <ul className="space-y-1 text-sm text-slate-600">
                  {module.concepts.map((concept, i) => (
                    <li key={i} className="flex items-center">
                      <ArrowRight className="h-3 w-3 mr-2 text-primary-500" />
                      {concept}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Videos Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Materi Video Pembelajaran</h2>
          <div className="space-y-12">
            {learningModules.map((module, index) => (
              <div key={index}>
                <div className="flex items-center mb-6">
                  <div className={`${module.bgColor} ${module.color} p-3 rounded-lg mr-4`}>
                    {module.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">{module.title}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {module.videos.map((video, vIndex) => (
                    <VideoCard key={vIndex} video={video} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Siap Membangun Masa Depan Fintech?</h2>
          <p className="text-xl mb-6 opacity-90">
            Tingkatkan keahlian Anda ke level selanjutnya dengan pendampingan intensif dari mentor ahli.
          </p>
          <Link
            to="/membership"
            className="bg-white text-secondary-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Lihat Program Membership <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AiTradingPage;
