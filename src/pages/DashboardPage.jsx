import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { BookOpen, Code, Users, Settings, Bell, Calendar, TrendingUp, Award } from 'lucide-react';

const DashboardPage = ({ isLoggedIn }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const stats = [
    { title: 'Lessons Completed', value: '24/48', icon: <BookOpen className="h-6 w-6" />, color: 'bg-blue-500' },
    { title: 'Projects', value: '3', icon: <Code className="h-6 w-6" />, color: 'bg-green-500' },
    { title: 'Community Points', value: '1,250', icon: <Users className="h-6 w-6" />, color: 'bg-purple-500' },
    { title: 'Certificates', value: '2', icon: <Award className="h-6 w-6" />, color: 'bg-orange-500' }
  ];

  const recentLessons = [
    { title: 'React Hooks Advanced', progress: 75, status: 'In Progress' },
    { title: 'Node.js Authentication', progress: 100, status: 'Completed' },
    { title: 'Database Design', progress: 50, status: 'In Progress' },
    { title: 'API Development', progress: 100, status: 'Completed' }
  ];

  const upcomingEvents = [
    { title: 'Frontend Workshop', date: '2024-01-15', time: '14:00' },
    { title: 'Code Review Session', date: '2024-01-18', time: '10:00' },
    { title: 'Project Presentation', date: '2024-01-22', time: '16:00' }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Dashboard</h1>
          <p className="text-slate-600">Selamat datang kembali! Mari lanjutkan perjalanan belajar Anda.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-600 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                </div>
                <div className={`${stat.color} text-white p-3 rounded-lg`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Recent Lessons */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Recent Lessons</h2>
              <div className="space-y-4">
                {recentLessons.map((lesson, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-800">{lesson.title}</h3>
                      <div className="mt-2">
                        <div className="flex items-center justify-between text-sm text-slate-600 mb-1">
                          <span>Progress</span>
                          <span>{lesson.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-primary-600 h-2 rounded-full" 
                            style={{ width: `${lesson.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        lesson.status === 'Completed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {lesson.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Path Progress */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Learning Path Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">Fullstack Web Developer</h3>
                    <span className="text-sm text-slate-600">50% Complete</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-sm text-slate-600 mt-2">Module 3 of 6 completed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Upcoming Events
              </h2>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-3 border border-slate-200 rounded-lg">
                    <h3 className="font-medium text-slate-800 text-sm">{event.title}</h3>
                    <p className="text-xs text-slate-600">{event.date} at {event.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Continue Learning
                </button>
                <button className="w-full bg-secondary-500 hover:bg-secondary-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  Join Community Chat
                </button>
                <button className="w-full border border-slate-300 hover:bg-slate-50 text-slate-700 py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                <Bell className="h-5 w-5 mr-2" />
                Notifications
              </h2>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-800">New lesson available in React module</p>
                  <p className="text-xs text-blue-600 mt-1">2 hours ago</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800">Project submission approved</p>
                  <p className="text-xs text-green-600 mt-1">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
