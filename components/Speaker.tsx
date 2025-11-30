import React from 'react';
import { AlertTriangle, Quote, CheckCircle2 } from 'lucide-react';

const Speaker: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50" id="speaker">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-12 gap-12 items-center">
                    
                    {/* Image Column */}
                    <div className="md:col-span-5 order-2 md:order-1 relative">
                        <div className="absolute top-4 -left-4 w-full h-full border-2 border-brand-red rounded-xl hidden md:block"></div>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                                alt="Business Owner" 
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
                                <p className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-1">AI Business OS</p>
                                <p className="text-white text-2xl font-bold">Triết Lý Thực Chiến</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-7 order-1 md:order-2">
                        <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1 mb-6 shadow-sm">
                            <AlertTriangle size={16} className="text-brand-red" />
                            <span className="text-xs font-bold text-brand-red uppercase">Cảnh Báo Từ Chuyên Gia</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-heading font-black text-brand-dark mb-6">
                            TÔI KHÔNG DẠY <br/>
                            <span className="text-brand-red">LÀM GIÀU NHANH</span>
                        </h2>
                        
                        <div className="space-y-4 text-gray-700 text-lg leading-relaxed mb-8">
                            <p>
                                Tôi không hứa anh/chị giàu trong 7 ngày hay 30 ngày. 
                                Tôi không chia sẻ những công thức "bịp" kiểu vài cú click là ra tiền.
                            </p>
                            <p className="font-semibold">
                                Tôi chỉ dạy những gì tôi đã làm thật – đang vận hành thật – và hiệu quả thật. 
                                Kết quả thuộc về anh/chị – người hành động.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-brand-red relative">
                             <Quote className="absolute top-4 right-4 text-gray-100 w-10 h-10" />
                            <h3 className="font-bold text-brand-dark mb-2 uppercase text-sm tracking-wider">Thông điệp cuối</h3>
                            <p className="italic text-gray-600 mb-4">
                                "Anh/chị không cần thêm kiến thức. Anh/chị chỉ cần một hệ thống đúng. <br/>
                                Và khi bước vào chương trình này, tôi sẽ dẫn anh/chị xây dựng hệ thống đó — từng bước – từng phần – tới khi doanh nghiệp tự chạy."
                            </p>
                             <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-brand-gold" />
                                <span className="font-bold text-sm">Cam kết đồng hành 30 ngày sau khóa học</span>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Speaker;