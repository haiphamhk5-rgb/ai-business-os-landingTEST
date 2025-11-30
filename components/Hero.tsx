
import React from 'react';
import { Calendar, MapPin, ArrowRight, Zap, Clock } from 'lucide-react';

interface HeroProps {
    onOpenPayment?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenPayment }) => {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-brand-dark text-white" id="home">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-brand-dark/80 z-10"></div>
                {/* Simulated tech/business background */}
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                    alt="AI Business Background" 
                    className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-brand-gold/50 rounded-full px-4 py-1.5 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                            <span className="text-brand-gold text-xs md:text-sm font-bold uppercase tracking-wider">Chương trình 2 ngày thực chiến</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-[1.1] tracking-tighter">
                            BIẾN DOANH NGHIỆP THÀNH <br className="hidden md:block" />
                            <span className="text-brand-red inline-block">CỖ MÁY KIẾM TIỀN</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600 font-extrabold block mt-2">
                                TỰ ĐỘNG TRONG 90 NGÀY
                            </span>
                        </h1>
                        
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed font-light border-l-4 border-brand-red pl-6">
                            Dành riêng cho <strong>Chủ Spa, Chủ PMU, Doanh Nghiệp Nhỏ</strong>.<br/>
                            Người đã biết AI nhưng chưa ra hệ thống.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 pt-2">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red border border-brand-red/20">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-semibold uppercase">Công thức</p>
                                    <p className="font-bold text-white text-lg">1 Người + AI = 5 Nhân Sự</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center text-brand-red border border-brand-red/20">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-semibold uppercase">Địa điểm</p>
                                    <p className="font-bold text-white text-lg">TP. Hồ Chí Minh</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4">
                            <button 
                                onClick={() => onOpenPayment && onOpenPayment()}
                                className="group relative overflow-hidden bg-brand-red text-white font-bold py-4 px-10 rounded text-lg uppercase tracking-wider shadow-[0_4px_14px_0_rgba(217,4,41,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(217,4,41,0.23)] hover:-translate-y-1 text-center cursor-pointer"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Giữ Suất Ngay
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>
                            <a href="#about" className="flex items-center justify-center gap-2 text-white font-semibold py-4 px-8 rounded border border-gray-600 hover:bg-white/5 transition uppercase tracking-wide">
                                Xem chi tiết
                            </a>
                        </div>
                    </div>

                    {/* Right Image/Graphic */}
                    <div className="lg:col-span-5 relative hidden lg:block h-full min-h-[600px]">
                        {/* Graphical Elements */}
                        <div className="absolute top-10 right-0 w-64 h-64 bg-brand-red rounded-full filter blur-[120px] opacity-20 animate-pulse-slow"></div>
                        <div className="absolute bottom-10 left-0 w-64 h-64 bg-brand-gold rounded-full filter blur-[120px] opacity-10"></div>
                        
                        <div className="relative z-10 mt-10">
                            <div className="relative">
                                {/* Abstract Frame */}
                                <div className="absolute -inset-4 border-2 border-brand-gold/30 rounded-2xl transform rotate-6"></div>
                                <div className="absolute -inset-4 border-2 border-brand-red/30 rounded-2xl transform -rotate-3"></div>
                                
                                <img 
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                                    alt="Business Automation" 
                                    className="relative rounded-xl shadow-2xl w-full max-w-md mx-auto object-cover border border-gray-800"
                                />
                                
                                {/* Floating Badge */}
                                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-lg shadow-xl max-w-[250px] border-b-4 border-brand-red">
                                    <div className="flex gap-2 mb-2 items-center">
                                        <Clock className="text-brand-gold fill-current" size={16} />
                                        <span className="font-bold text-brand-dark text-xs uppercase">Mục tiêu 2025</span>
                                    </div>
                                    <p className="font-bold text-gray-900 text-sm">"Thoát khỏi vận hành sự vụ. Tạo dòng tiền lặp lại (Recurring Revenue)."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
