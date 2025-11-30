import React from 'react';
import { Facebook, Youtube, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                             <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center text-white font-bold">A</div>
                            <span className="font-heading font-bold text-xl">AI BUSINESS OS</span>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Biến doanh nghiệp thành cỗ máy kiếm tiền tự động.<br/>
                            Giải phóng lãnh đạo - Tăng biên lợi nhuận - Nhân bản hệ thống.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition"><Youtube size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-red transition"><Instagram size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 border-l-4 border-brand-red pl-3">LIÊN HỆ HỖ TRỢ</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-brand-red flex-shrink-0" />
                                <span>TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-brand-red flex-shrink-0" />
                                <span>0899.xxx.xxx (08:00 - 17:30)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-brand-red flex-shrink-0" />
                                <span>support@calita.vn</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 border-l-4 border-brand-red pl-3">THÔNG TIN PHÁP LÝ</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#" className="hover:text-white transition">Về chúng tôi</a></li>
                            <li><a href="#" className="hover:text-white transition">Chính sách bảo mật</a></li>
                            <li><a href="#" className="hover:text-white transition">Điều khoản dịch vụ</a></li>
                            <li><a href="#" className="hover:text-white transition">Chính sách hoàn tiền</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; 2025 AI Business OS. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;