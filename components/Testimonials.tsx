import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const Testimonials: React.FC = () => {
    const reviews: Testimonial[] = [
        {
            name: "Chị Thanh Mai",
            role: "Chủ Chuỗi Spa, TP.HCM",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            content: "Tôi từng stress vì đội ngũ content làm việc kém hiệu quả. Sau 2 ngày, tôi đã có hệ thống tự động tạo bài viết và hình ảnh chuẩn brand. Khách inbox được AI trả lời ngay lập tức, doanh thu tăng 30% tháng đầu."
        },
        {
            name: "Anh Tuấn Anh",
            role: "CEO, Hệ thống Bán lẻ",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            content: "AI Sale Engine là thứ đáng tiền nhất. Nó tự động follow khách hàng cũ, nhắc lịch và upsell mà không cần tôi nhắc nhở nhân viên. Tôi đã tiết kiệm được chi phí cho 3 nhân sự telesale."
        },
        {
            name: "Chị Lan Phương",
            role: "Founder PMU Academy",
            avatar: "https://randomuser.me/api/portraits/women/67.jpg",
            content: "Tôi không rành công nghệ nhưng quy trình được hướng dẫn rất dễ hiểu. Thích nhất là phần AI đào tạo nhân sự, giúp tôi nhân bản đội ngũ thợ nhanh chóng mà không tốn công cầm tay chỉ việc."
        }
    ];

    return (
        <section className="py-20 bg-brand-dark text-white" id="testimonials">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">HỌC VIÊN ĐÃ ĐẠT ĐƯỢC GÌ?</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Kết quả thực tế khi áp dụng AI Business OS vào doanh nghiệp.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition relative">
                            <Quote className="absolute top-6 right-6 text-brand-red opacity-30 w-10 h-10" />
                            <div className="flex items-center gap-4 mb-6">
                                <img 
                                    src={review.avatar} 
                                    alt={review.name} 
                                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-gold"
                                />
                                <div>
                                    <h4 className="font-bold text-lg">{review.name}</h4>
                                    <p className="text-gray-400 text-sm">{review.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-300 italic leading-relaxed">"{review.content}"</p>
                            <div className="flex gap-1 mt-4 text-brand-gold text-sm">
                                ★★★★★
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;