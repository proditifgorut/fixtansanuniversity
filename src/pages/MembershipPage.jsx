import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Users, Code, BookOpen, Zap } from 'lucide-react';

const MembershipPage = () => {
  const membershipPlans = [
    {
      id: 1,
      name: 'Paket Bulanan',
      description: 'Fleksibel, cocok untuk mencoba.',
      pricePerMonth: 2500000,
      duration: 1,
      totalPrice: 2500000,
      popular: false
    },
    {
      id: 2,
      name: 'Paket 3 Bulan',
      description: 'Kombinasi terbaik untuk hasil optimal.',
      pricePerMonth: 1800000,
      duration: 3,
      totalPrice: 5400000,
      popular: true
    },
    {
      id: 3,
      name: 'Paket 6 Bulan',
      description: 'Komitmen penuh untuk transformasi karir.',
      pricePerMonth: 1500000,
      duration: 6,
      totalPrice: 9000000,
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Mentoring 1-on-1',
      description: 'Bimbingan personal dari mentor berpengalaman industri dengan track record yang terbukti'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'AI-Powered Learning',
      description: 'Pembelajaran coding dengan bantuan AI tools seperti GitHub Copilot, ChatGPT, dan Claude untuk produktivitas maksimal'
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Kurikulum Terstruktur',
      description: 'Learning path yang disusun sistematis dari basic hingga advanced dengan real-world projects'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Portfolio Development',
      description: 'Bimbingan membangun portfolio yang menarik perhatian recruiter dan meningkatkan peluang kerja'
    }
  ];

  const learningPaths = [
    {
      title: 'Fullstack Website Developer',
      duration: '3-6 bulan',
      description: 'Kuasai seni membangun aplikasi web modern dari front-end hingga back-end, database, dan deployment.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript/TypeScript', 'HTML/CSS'],
      aiTools: ['GitHub Copilot untuk code completion', 'ChatGPT untuk debugging', 'Figma AI untuk design']
    },
    {
      title: 'Fullstack Mobile Developer',
      duration: '4-6 bulan',
      description: 'Bangun aplikasi mobile cross-platform yang andal, dari desain UI/UX hingga integrasi API dan publikasi ke app store.',
      technologies: ['React Native', 'Flutter', 'Firebase', 'REST API', 'State Management'],
      aiTools: ['Cursor AI untuk development', 'Claude untuk architecture planning', 'Midjourney untuk UI inspiration']
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership Premium</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Dapatkan pendampingan intensif untuk menjadi Fullstack Developer profesional dengan bantuan AI tools terkini. 
            Transformasi karir Anda dimulai dari sini.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Mengapa Premium Membership?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Jalur Pembelajaran Premium
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {learningPaths.map((path, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                <p className="text-slate-600 mb-4">{path.description}</p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-slate-500">Durasi: </span>
                  <span className="text-sm font-semibold">{path.duration}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-slate-700 mb-2">Teknologi yang Dipelajari:</h4>
                  <div className="flex flex-wrap gap-2">
                    {path.technologies.map((tech, i) => (
                      <span key={i} className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-slate-700 mb-2">AI Tools Integration:</h4>
                  <ul className="space-y-1">
                    {path.aiTools.map((tool, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-center">
                        <Check className="h-3 w-3 text-primary-500 mr-1 flex-shrink-0" />
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">
            Pilih Paket Membership
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipPlans.map((plan) => (
              <div key={plan.id} className={`bg-white rounded-xl shadow-lg overflow-hidden relative flex flex-col ${plan.popular ? 'ring-2 ring-secondary-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-4 right-4 bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </div>
                )}
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-slate-800">
                      {formatPrice(plan.pricePerMonth)}
                      <span className="text-sm font-normal text-slate-500">/bulan</span>
                    </div>
                    <div className="text-sm text-slate-500">
                      Total: {formatPrice(plan.totalPrice)} untuk {plan.duration} bulan
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary-500 mr-2" />
                      Mentoring 1-on-1 personal
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary-500 mr-2" />
                      Akses semua materi premium
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary-500 mr-2" />
                      AI tools integration training
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary-500 mr-2" />
                      Portfolio development
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary-500 mr-2" />
                      Job placement assistance
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-primary-500 mr-2" />
                      Certificate of completion
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 pt-0">
                  {/* FIX: Changed button to a functional Link */}
                  <Link
                    to="/login"
                    className={`w-full py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                      plan.popular 
                        ? 'bg-secondary-500 hover:bg-secondary-600 text-white' 
                        : 'bg-primary-600 hover:bg-primary-700 text-white'
                    }`}
                  >
                    <span>Pilih Paket</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Tools Highlight */}
        <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-6">
            🤖 Belajar Coding dengan AI Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold mb-2">GitHub Copilot</h4>
              <p className="text-sm text-slate-600">AI pair programmer yang membantu menulis code lebih cepat dan efisien</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">ChatGPT & Claude</h4>
              <p className="text-sm text-slate-600">Assistant AI untuk debugging, code review, dan problem solving</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Cursor & Windsurf</h4>
              <p className="text-sm text-slate-600">IDE dengan AI integration untuk development experience yang maksimal</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Mulai Transformasi Karir Anda
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Bergabunglah dengan ratusan developer yang telah sukses mengubah karir mereka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* FIX: Changed buttons to functional links */}
            <a href="mailto:layanan@unisgu.edu?subject=Konsultasi Gratis Membership" className="bg-secondary-500 hover:bg-secondary-600 px-8 py-3 rounded-lg font-semibold transition-colors">
              Konsultasi Gratis
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="border-2 border-white hover:bg-white hover:text-primary-800 px-8 py-3 rounded-lg font-semibold transition-colors">
              WhatsApp: +62 812-3456-7890
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipPage;
