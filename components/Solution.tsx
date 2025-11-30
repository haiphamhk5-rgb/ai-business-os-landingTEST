import React from 'react';
import { Target, Bot, MessageSquare, Repeat, Users, BarChart3 } from 'lucide-react';

const Solution: React.FC = () => {
    const modules = [
        {
            id: "Ngày 1",
            title: "Giải Phẫu & Thiết Kế",
            desc: "Giải phẫu mô hình kinh doanh hiện tại. Tìm điểm 'chảy máu'. Thiết kế lại chân đế doanh nghiệp bằng AI.",
            icon: <Target className="w-6 h-6 text-brand-dark" />
        },
        {
            id: "Ngày 1",
            title: "Content Automation",
            desc: "AI nhận diện brand voice. Tự động hoá tạo caption, reel, video. Lên lịch tự động 60 ngày.",
            icon: <MessageSquare className="w-6 h-6 text-brand-dark" />
        },
        {
            id: "Ngày 1",
            title: "AI Sale Engine",
            desc: "Cỗ máy chốt đơn tự động. Chatbot AI cá nhân hóa. Script xử lý từ chối. Video chốt đơn 30-60s.",
            icon: <Bot className="w-6 h-6 text-brand-dark" />
        },
        {
            id: "Ngày 2",
            title: "Chăm Sóc & Upsell",
            desc: "Quy trình AI chăm khách 7-30-90 ngày. Tự động nhắc lịch, feedback. Khách quay lại x2 chỉ bằng 1 flow.",
            icon: <Repeat className="w-6 h-6 text-brand-dark" />
        },
        {
            id: "Ngày 2",
            title: "AI Team OS",
            desc: "Nhân bản đội ngũ. AI đào tạo nhân sự mới. AI tạo checklist, SOP, KPI. Báo cáo tự chạy.",
            icon: <Users className="w-6 h-6 text-brand-dark" />
        },
        {
            id: "Ngày 2",
            title: "Kế Hoạch 90 Ngày",
            desc: "Setup toàn bộ hệ thống ngay trong lớp. Chuyển doanh nghiệp sang trạng thái 'Tự Động'.",
            icon: <BarChart3 className="w-6 h-6 text-brand-dark" />
        }
    ];

    return (
        <section className="py-24 bg-brand-dark text-white relative overflow-hidden" id="content">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-pattern opacity-10"></div>
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">
                        LỘ TRÌNH <span className="text-brand-red">2 NGÀY</span> THỰC CHIẾN
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Đây không phải lớp "xài tool cho vui". Đây là hệ thống hoàn chỉnh giúp <span className="text-white font-bold">1 người + AI = Năng suất của 5 nhân sự</span>.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((mod, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:border-brand-red/50 transition-all duration-300 group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-brand-gold rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    {mod.icon}
                                </div>
                                <span className="text-sm font-black text-brand-red bg-brand-red/10 px-3 py-1 rounded uppercase tracking-wider">
                                    {mod.id}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-gold transition-colors">
                                {mod.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {mod.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="#register" className="inline-block bg-brand-red text-white font-bold py-4 px-12 rounded hover:bg-red-700 transition transform hover:scale-105 shadow-xl uppercase tracking-wider">
                        Đăng ký nhận ưu đãi ngay
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Solution;