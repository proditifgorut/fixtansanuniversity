import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">UNISGU</h3>
            <p className="text-slate-300 text-sm mb-4">
              Tansan Open Source University - Platform pembelajaran teknologi dan kewirausahaan berbasis komunitas yang terbuka untuk semua.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Beranda</Link></li>
              <li><Link to="/belajar-gratis" className="text-slate-300 hover:text-white transition-colors">Belajar Gratis</Link></li>
              <li><Link to="/belajar-ai-trading" className="text-slate-300 hover:text-white transition-colors">AI Trading</Link></li>
              <li><Link to="/layanan" className="text-slate-300 hover:text-white transition-colors">Layanan</Link></li>
              <li><Link to="/membership" className="text-slate-300 hover:text-white transition-colors">Membership</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-300">Pengembangan Website</span></li>
              <li><span className="text-slate-300">Instalasi OJS</span></li>
              <li><span className="text-slate-300">Manajemen VPS</span></li>
              <li><span className="text-slate-300">Publikasi Ilmiah</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">info@unisgu.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-slate-400" />
                <span className="text-slate-300">Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 UNISGU - Tansan Open Source University. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
