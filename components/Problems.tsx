import React from 'react';
import { TrendingDown, Users, DollarSign, BrainCircuit } from 'lucide-react';

const Problems: React.FC = () => {
    const problems = [
        {
            icon: <Users size={32} className="text-white" />,
            title: "Nhân Sự & Chi Phí",
            desc: "Chi phí nhân sự tăng 20–35%. Chủ doanh nghiệp phụ thuộc đội ngũ, không nhân bản được hệ thống, kiệt sức vì gánh team."
        },
        {
            icon: <DollarSign size={32} className="text-white" />,
            title: "Marketing Đắt Đỏ",
            desc: "Chi phí Marketing tăng gấp 3 lần. Stress vì marketing không ổn định, không biết khách đến từ đâu."
        },
        {
            icon: <TrendingDown size={32} className="text-white" />,
            title: "Doanh Nghiệp Biến Mất",
            desc: "40% doanh nghiệp nhỏ ngành làm đẹp – dịch vụ sẽ biến mất vì không cập nhật AI và vận hành tự động hóa."
        },
        {
            icon: <BrainCircuit size={32} className="text-white" />,
            title: "Thiếu Hệ Thống",
            desc: "Tiếp tục làm theo cách cũ? Bận rộn nhưng không tăng thu. Sai sót thuế, kế toán, pháp lý dẫn đến tiền phạt."
        }
    ];

    return (
        <section className="py-24 bg-white relative" id="about">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2 block">THỊ TRƯỜNG ĐANG THAY ĐỔI MẠNH</span>
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark mb-6 leading-tight">
                        NẾU 12 THÁNG TỚI VẪN LÀM THEO CÁCH CŨ <br/>
                        <span className="text-brand-red">DOANH NGHIỆP SẼ ĐI VỀ ĐÂU?</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Vấn đề không phải anh/chị không giỏi. Vấn đề là mô hình cũ không còn phù hợp.
                    </p>
                    <p className="text-brand-dark font-bold text-xl">
                         AI BUSINESS OS có mặt để giải quyết điều đó.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((item, index) => (
                        <div key={index} className="group relative bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="mb-6 w-16 h-16 rounded-2xl bg-brand-dark group-hover:bg-brand-red transition-colors flex items-center justify-center shadow-lg rotate-3 group-hover:rotate-0">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-red transition-colors">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                            
                            {/* Decorative line */}
                            <div className="absolute bottom-0 left-0 h-1 bg-brand-red w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problems;