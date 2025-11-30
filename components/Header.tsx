
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
    onOpenPayment?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenPayment }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Về Chương Trình', href: '#about' },
        { name: 'Lộ Trình 2 Ngày', href: '#content' },
        { name: 'Triết Lý', href: '#speaker' },
        { name: 'Ưu Đãi', href: '#register' },
    ];

    const handleCtaClick = (e: React.MouseEvent) => {
        if (onOpenPayment) {
            e.preventDefault();
            onOpenPayment();
        }
    };

    return (
        <>
            {/* Top Bar for Urgency */}
            <div className="bg-brand-red text-white text-xs md:text-sm py-2 text-center font-bold tracking-wide hidden md:block">
                🔥 1 NGƯỜI + AI = NĂNG SUẤT 5 NHÂN SỰ - ĐĂNG KÝ NGAY ĐỂ NHẬN ƯU ĐÃI
            </div>

            <header className={`fixed top-0 md:top-auto left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-brand-red rounded flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:bg-white group-hover:text-brand-red transition-colors">A</div>
                        <div className="flex flex-col">
                            <span className={`font-heading font-black text-2xl leading-none ${isScrolled ? 'text-white' : 'text-white'} tracking-tighter`}>
                                AI <span className="text-brand-red">BUSINESS OS</span>
                            </span>
                            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Automation System</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className={`text-sm font-bold uppercase tracking-wide hover:text-brand-gold transition relative group ${isScrolled ? 'text-gray-200' : 'text-gray-100'}`}
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        
                        <div className="flex items-center gap-2 text-white mr-2">
                             <Phone size={16} className="text-brand-gold" />
                             <span className="font-bold">0899.xxx.xxx</span>
                        </div>

                        <button 
                            onClick={handleCtaClick}
                            className="bg-brand-red text-white px-6 py-2.5 rounded hover:bg-red-600 transition shadow-[0_0_15px_rgba(217,4,41,0.5)] font-bold uppercase text-sm border border-transparent hover:border-brand-gold cursor-pointer"
                        >
                            Giữ Suất Ngay
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-2xl p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark border-t border-gray-800 shadow-xl p-4 flex flex-col gap-4 animate-fade-in-up">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                className="text-white font-bold uppercase tracking-wide py-2 border-b border-gray-800 hover:text-brand-gold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button 
                            onClick={(e) => {
                                setIsMobileMenuOpen(false);
                                handleCtaClick(e);
                            }}
                            className="bg-brand-red text-white text-center py-3 rounded font-bold uppercase mt-2 shadow-lg w-full"
                        >
                            Đăng Ký Ngay
                        </button>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;
