import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, Play, ExternalLink, Globe, Code, Smartphone, Palette, ArrowRight, BrainCircuit } from 'lucide-react';

const FreeLearningPage = () => {
  const [activeTab, setActiveTab] = useState('teknologi');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const learningPaths = {
    teknologi: {
      title: "Teknologi & Pemrograman",
      icon: <Code className="h-6 w-6" />,
      sections: [
        {
          id: 'web-fullstack',
          title: 'Fullstack Web Development',
          description: 'Pembelajaran komprehensif pengembangan web dari frontend hingga backend',
          videos: [
            {
              title: 'HTML & CSS Dasar',
              channel: 'freeCodeCamp',
              duration: '11:08:03',
              url: 'https://www.youtube.com/embed/mU6anWqZJcc',
              link: 'https://www.youtube.com/watch?v=mU6anWqZJcc'
            },
            {
              title: 'JavaScript Lengkap untuk Pemula',
              channel: 'freeCodeCamp',
              duration: '3:26:42',
              url: 'https://www.youtube.com/embed/PkZNo7MFNFg',
              link: 'https://www.youtube.com/watch?v=PkZNo7MFNFg'
            },
            {
              title: 'React JS Tutorial Lengkap',
              channel: 'freeCodeCamp',
              duration: '11:55:27',
              url: 'https://www.youtube.com/embed/bMknfKXIFA8',
              link: 'https://www.youtube.com/watch?v=bMknfKXIFA8'
            },
            {
              title: 'Node.js dan Express.js Tutorial',
              channel: 'freeCodeCamp',
              duration: '8:16:48',
              url: 'https://www.youtube.com/embed/Oe421EPjeBE',
              link: 'https://www.youtube.com/watch?v=Oe421EPjeBE'
            }
          ]
        },
        {
          id: 'mobile-dev',
          title: 'Mobile Development',
          description: 'Pengembangan aplikasi mobile dengan React Native dan Flutter',
          videos: [
            {
              title: 'React Native Tutorial Lengkap',
              channel: 'freeCodeCamp',
              duration: '13:31:08',
              url: 'https://www.youtube.com/embed/0-S5a0eXPoc',
              link: 'https://www.youtube.com/watch?v=0-S5a0eXPoc'
            },
            {
              title: 'Flutter Tutorial untuk Pemula',
              channel: 'freeCodeCamp',
              duration: '37:11:09',
              url: 'https://www.youtube.com/embed/VPvVD8t02U8',
              link: 'https://www.youtube.com/watch?v=VPvVD8t02U8'
            },
            {
              title: 'Kotlin untuk Android Development',
              channel: 'freeCodeCamp',
              duration: '9:15:51',
              url: 'https://www.youtube.com/embed/F9UC9DY-vIU',
              link: 'https://www.youtube.com/watch?v=F9UC9DY-vIU'
            }
          ]
        },
        {
          id: 'frameworks',
          title: 'Framework Combinations',
          description: 'Kombinasi framework populer untuk development modern',
          videos: [
            {
              title: 'React + Tailwind CSS Project',
              channel: 'Traversy Media',
              duration: '1:32:15',
              url: 'https://www.youtube.com/embed/dFgzHOX84xQ',
              link: 'https://www.youtube.com/watch?v=dFgzHOX84xQ'
            },
            {
              title: 'React + TypeScript Tutorial',
              channel: 'freeCodeCamp',
              duration: '1:30:39',
              url: 'https://www.youtube.com/embed/FJDVKeh7RJI',
              link: 'https://www.youtube.com/watch?v=FJDVKeh7RJI'
            },
            {
              title: 'Next.js 13 Full Course',
              channel: 'freeCodeCamp',
              duration: '9:01:25',
              url: 'https://www.youtube.com/embed/wm5gMKuwSYk',
              link: 'https://www.youtube.com/watch?v=wm5gMKuwSYk'
            },
            {
              title: 'Vue.js 3 Crash Course',
              channel: 'Traversy Media',
              duration: '1:51:44',
              url: 'https://www.youtube.com/embed/qZXt1Aom3Cs',
              link: 'https://www.youtube.com/watch?v=qZXt1Aom3Cs'
            }
          ]
        },
        {
          id: 'backend',
          title: 'Backend Development',
          description: 'Server-side development dengan berbagai teknologi',
          videos: [
            {
              title: 'Python Django Full Course',
              channel: 'freeCodeCamp',
              duration: '4:20:07',
              url: 'https://www.youtube.com/embed/F5mRW0jo-U4',
              link: 'https://www.youtube.com/watch?v=F5mRW0jo-U4'
            },
            {
              title: 'PHP Laravel untuk Pemula',
              channel: 'freeCodeCamp',
              duration: '6:30:00',
              url: 'https://www.youtube.com/embed/MFh0Fd7BsjE',
              link: 'https://www.youtube.com/watch?v=MFh0Fd7BsjE'
            },
            {
              title: 'MongoDB Crash Course',
              channel: 'Traversy Media',
              duration: '1:39:35',
              url: 'https://www.youtube.com/embed/-56x56UppqQ',
              link: 'https://www.youtube.com/watch?v=-56x56UppqQ'
            }
          ]
        },
        {
          id: 'devops',
          title: 'DevOps & Deployment',
          description: 'CI/CD, containerization, dan cloud deployment',
          videos: [
            {
              title: 'Docker Tutorial Lengkap',
              channel: 'freeCodeCamp',
              duration: '3:10:47',
              url: 'https://www.youtube.com/embed/fqMOX6JJhGo',
              link: 'https://www.youtube.com/watch?v=fqMOX6JJhGo'
            },
            {
              title: 'Kubernetes untuk Pemula',
              channel: 'freeCodeCamp',
              duration: '4:21:05',
              url: 'https://www.youtube.com/embed/X48VuDVv0do',
              link: 'https://www.youtube.com/watch?v=X48VuDVv0do'
            },
            {
              title: 'AWS Cloud Practitioner',
              channel: 'freeCodeCamp',
              duration: '4:02:48',
              url: 'https://www.youtube.com/embed/3hLmDS179YE',
              link: 'https://www.youtube.com/watch?v=3hLmDS179YE'
            }
          ]
        }
      ]
    },
    bahasa: {
      title: "Bahasa Asing",
      icon: <Globe className="h-6 w-6" />,
      sections: [
        {
          id: 'english',
          title: 'Bahasa Inggris',
          description: 'Pembelajaran bahasa Inggris dari dasar hingga mahir',
          levels: {
            fundamental: [
              {
                title: 'English Grammar Basics',
                channel: 'Learn English with Emma',
                duration: '45:30',
                url: 'https://www.youtube.com/embed/YgBBLkLUcTI',
                link: 'https://www.youtube.com/watch?v=YgBBLkLUcTI'
              },
              {
                title: 'Basic English Conversation',
                channel: 'English with Lucy',
                duration: '1:02:15',
                url: 'https://www.youtube.com/embed/sQEr4tEOg7k',
                link: 'https://www.youtube.com/watch?v=sQEr4tEOg7k'
              }
            ],
            intermediate: [
              {
                title: 'Business English Course',
                channel: 'freeCodeCamp',
                duration: '2:30:45',
                url: 'https://www.youtube.com/embed/1wEP7qGCx9Y',
                link: 'https://www.youtube.com/watch?v=1wEP7qGCx9Y'
              },
              {
                title: 'IELTS Speaking Practice',
                channel: 'IELTS Advantage',
                duration: '1:15:20',
                url: 'https://www.youtube.com/embed/m8hP8s91VCA',
                link: 'https://www.youtube.com/watch?v=m8hP8s91VCA'
              }
            ],
            advanced: [
              {
                title: 'Advanced English Pronunciation',
                channel: 'Sounds American',
                duration: '2:45:30',
                url: 'https://www.youtube.com/embed/QkEfMbqZegE',
                link: 'https://www.youtube.com/watch?v=QkEfMbqZegE'
              },
              {
                title: 'Academic English Writing',
                channel: 'Writing Skills',
                duration: '3:20:15',
                url: 'https://www.youtube.com/embed/k8QTzXjJKHM',
                link: 'https://www.youtube.com/watch?v=k8QTzXjJKHM'
              }
            ]
          }
        },
        {
          id: 'mandarin',
          title: 'Bahasa Mandarin',
          description: 'Pembelajaran bahasa Mandarin dari dasar hingga mahir',
          levels: {
            fundamental: [
              {
                title: 'Chinese Pinyin & Pronunciation',
                channel: 'ChinesePod',
                duration: '1:30:20',
                url: 'https://www.youtube.com/embed/3wHRbDVZ4Wk',
                link: 'https://www.youtube.com/watch?v=3wHRbDVZ4Wk'
              },
              {
                title: 'Basic Chinese Characters',
                channel: 'Learn Chinese Now',
                duration: '2:15:45',
                url: 'https://www.youtube.com/embed/kF8I_r9H7Ks',
                link: 'https://www.youtube.com/watch?v=kF8I_r9H7Ks'
              }
            ],
            intermediate: [
              {
                title: 'HSK 3 Vocabulary',
                channel: 'Chinese Learning',
                duration: '3:45:30',
                url: 'https://www.youtube.com/embed/Kc4aUlDV0Cc',
                link: 'https://www.youtube.com/watch?v=Kc4aUlDV0Cc'
              },
              {
                title: 'Chinese Grammar Patterns',
                channel: 'Mandarin Corner',
                duration: '2:20:15',
                url: 'https://www.youtube.com/embed/rM9wWZGp65Y',
                link: 'https://www.youtube.com/watch?v=rM9wWZGp65Y'
              }
            ],
            advanced: [
              {
                title: 'Business Chinese',
                channel: 'Chinese Business',
                duration: '4:10:20',
                url: 'https://www.youtube.com/embed/eLm8uOAJAiU',
                link: 'https://www.youtube.com/watch?v=eLm8uOAJAiU'
              },
              {
                title: 'Advanced Chinese Literature',
                channel: 'Chinese Culture',
                duration: '3:55:45',
                url: 'https://www.youtube.com/embed/2YyS2zZoF5A',
                link: 'https://www.youtube.com/watch?v=2YyS2zZoF5A'
              }
            ]
          }
        },
        {
          id: 'persian',
          title: 'Bahasa Persia (Farsi)',
          description: 'Pembelajaran bahasa Persia dari dasar hingga mahir',
          levels: {
            fundamental: [
              {
                title: 'Persian Alphabet & Pronunciation',
                channel: 'Learn Persian',
                duration: '1:45:30',
                url: 'https://www.youtube.com/embed/oHg5SJYRHA0',
                link: 'https://www.youtube.com/watch?v=oHg5SJYRHA0'
              },
              {
                title: 'Basic Persian Phrases',
                channel: 'Persian Learning',
                duration: '1:20:15',
                url: 'https://www.youtube.com/embed/rKZOUb7UzJk',
                link: 'https://www.youtube.com/watch?v=rKZOUb7UzJk'
              }
            ],
            intermediate: [
              {
                title: 'Persian Grammar Essentials',
                channel: 'Farsi Language',
                duration: '2:35:20',
                url: 'https://www.youtube.com/embed/zOGOASDjqQY',
                link: 'https://www.youtube.com/watch?v=zOGOASDjqQY'
              },
              {
                title: 'Persian Conversation Practice',
                channel: 'Persian Speaking',
                duration: '1:55:40',
                url: 'https://www.youtube.com/embed/WJODXl29oT8',
                link: 'https://www.youtube.com/watch?v=WJODXl29oT8'
              }
            ],
            advanced: [
              {
                title: 'Persian Poetry & Literature',
                channel: 'Persian Culture',
                duration: '3:20:15',
                url: 'https://www.youtube.com/embed/fLKyJKA1n9I',
                link: 'https://www.youtube.com/watch?v=fLKyJKA1n9I'
              },
              {
                title: 'Advanced Persian Writing',
                channel: 'Persian Academic',
                duration: '2:45:30',
                url: 'https://www.youtube.com/embed/bKdF3mEJBSM',
                link: 'https://www.youtube.com/watch?v=bKdF3mEJBSM'
              }
            ]
          }
        }
      ]
    }
  };

  const VideoCard = ({ video, showEmbed = false }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gray-100 relative">
        {showEmbed ? (
          <iframe
            src={video.url}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
            <Play className="h-12 w-12 text-primary-600" />
          </div>
        )}
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
          <span>{video.duration}</span>
        </div>
        <a
          href={video.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center mt-3 text-primary-600 hover:text-primary-700 text-sm font-medium"
        >
          Tonton di YouTube
          <ExternalLink className="h-3 w-3 ml-1" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Belajar Gratis</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Akses ribuan materi pembelajaran teknologi dan bahasa asing secara gratis. 
            Semua video dipilih dari sumber terpercaya untuk membantu perjalanan belajar Anda.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* AI Trading CTA */}
        <div className="mb-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-white p-3 rounded-lg mr-4 shadow-md">
              <BrainCircuit className="h-8 w-8 text-primary-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">Baru: Jalur Belajar AI Trading & Fintech</h3>
              <p className="text-slate-600">Selami dunia finansial modern dengan kurikulum khusus AI.</p>
            </div>
          </div>
          <Link
            to="/belajar-ai-trading"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center space-x-2"
          >
            <span>Mulai Belajar AI</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {Object.entries(learningPaths).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === key
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-slate-600 hover:bg-primary-50'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8">
          {learningPaths[activeTab].sections.map((section) => (
            <div key={section.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-1">
                      {section.title}
                    </h3>
                    <p className="text-slate-600">{section.description}</p>
                  </div>
                  {expandedSections[section.id] ? (
                    <ChevronDown className="h-5 w-5 text-slate-400" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-slate-400" />
                  )}
                </div>
              </button>

              {expandedSections[section.id] && (
                <div className="px-6 pb-6">
                  {/* Technology sections with direct videos */}
                  {section.videos && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {section.videos.map((video, index) => (
                        <VideoCard key={index} video={video} showEmbed={true} />
                      ))}
                    </div>
                  )}

                  {/* Language sections with levels */}
                  {section.levels && (
                    <div className="space-y-8">
                      {Object.entries(section.levels).map(([level, videos]) => (
                        <div key={level}>
                          <h4 className="text-lg font-semibold text-slate-800 mb-4 capitalize">
                            Level {level === 'fundamental' ? 'Dasar' : level === 'intermediate' ? 'Menengah' : 'Lanjutan'}
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {videos.map((video, index) => (
                              <VideoCard key={index} video={video} showEmbed={true} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-12 bg-gradient-to-r from-secondary-50 to-accent-50 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            💡 Tips Belajar Efektif
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li>• Buat jadwal belajar yang konsisten dan realistis</li>
            <li>• Praktikkan langsung setiap materi yang dipelajari</li>
            <li>• Bergabung dengan komunitas untuk diskusi dan networking</li>
            <li>• Buat proyek portfolio untuk menunjukkan kemampuan Anda</li>
            <li>• Jangan ragu untuk bertanya di forum komunitas UNISGU</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FreeLearningPage;
