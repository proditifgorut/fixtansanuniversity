import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code, Users, BookOpen, Briefcase, User, BrainCircuit } from 'lucide-react';

const Header = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-primary-800 to-primary-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-secondary-500 p-2 rounded-lg">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">UNISGU</h1>
              <p className="text-xs text-primary-200">Tansan Open Source University</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-primary-200 transition-colors">Beranda</Link>
            <Link to="/belajar-gratis" className="hover:text-primary-200 transition-colors">Belajar Gratis</Link>
            <Link to="/belajar-ai-trading" className="flex items-center hover:text-primary-200 transition-colors">
              <BrainCircuit className="h-4 w-4 mr-1"/>
              AI Trading
            </Link>
            <Link to="/layanan" className="hover:text-primary-200 transition-colors">Layanan</Link>
            <Link to="/membership" className="hover:text-primary-200 transition-colors">Membership</Link>
            {isLoggedIn ? (
              <Link to="/dashboard" className="bg-secondary-500 hover:bg-secondary-600 px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link to="/login" className="bg-secondary-500 hover:bg-secondary-600 px-4 py-2 rounded-lg transition-colors">
                Masuk
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-primary-200">Beranda</Link>
            <Link to="/belajar-gratis" className="block py-2 hover:text-primary-200">Belajar Gratis</Link>
            <Link to="/belajar-ai-trading" className="block py-2 hover:text-primary-200">AI Trading & Fintech</Link>
            <Link to="/layanan" className="block py-2 hover:text-primary-200">Layanan</Link>
            <Link to="/membership" className="block py-2 hover:text-primary-200">Membership</Link>
            {isLoggedIn ? (
              <Link to="/dashboard" className="block py-2 hover:text-primary-200">Dashboard</Link>
            ) : (
              <Link to="/login" className="block py-2 hover:text-primary-200">Masuk</Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
