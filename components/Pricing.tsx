
import React from 'react';
import { Check, Gift, Clock } from 'lucide-react';
import { PricingTier } from '../types';

interface PricingProps {
    onOpenPayment: (name: string, price: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenPayment }) => {
    const tiers: PricingTier[] = [
        {
            name: "VÉ TIÊU CHUẨN",
            price: "19.900.000đ",
            features: [
                "Tham dự 2 ngày huấn luyện",
                "Tài liệu cơ bản",
                "Không có quà tặng",
                "Không có support 1:1"
            ],
            cta: "Đã Hết Vé"
        },
        {
            name: "ƯU ĐÃI ĐẶC BIỆT",
            price: "9.900.000đ",
            isPopular: true,
            features: [
                "Vé tham dự 2 ngày thực chiến",
                "Bộ công cụ AI Business OS (4.9tr)",
                "Bộ 60 content tự động (2.0tr)",
                "Kịch bản chốt đơn AI Calita (3.0tr)",
                "Sách '90 ngày tự động hóa'",
                "Group hỗ trợ riêng 30 ngày"
            ],
            cta: "Đăng Ký Giữ Suất Ngay"
        },
        {
            name: "VIP MENTORING",
            price: "Liên Hệ",
            features: [
                "Quyền lợi vé Ưu Đãi",
                "Ăn trưa cùng Chuyên gia",
                "1:1 Setup hệ thống tại DN",
                "Audit vận hành chuyên sâu",
                "Hỗ trợ kỹ thuật trọn đời"
            ],
            cta: "Liên Hệ Tư Vấn"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="register">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-brand-dark mb-4">
                        HỌC PHÍ <span className="text-brand-red">CHƯƠNG TRÌNH</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Chỉ áp dụng cho 30 người đầu tiên. Ai vào trước – giữ chỗ trước.
                    </p>
                </div>

                {/* Urgency Bar */}
                <div className="max-w-4xl mx-auto bg-red-100 border border-red-200 text-red-800 p-4 rounded-lg mb-10 flex items-center justify-center gap-2 animate-pulse">
                    <Clock size={20} />
                    <span className="font-bold text-sm md:text-base">HIỆN TẠI CHỈ CÒN 9/100 SUẤT - 527 NGƯỜI ĐANG XEM TRANG NÀY</span>
                </div>

                {/* Pricing Table */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                    {tiers.map((tier, idx) => (
                        <div 
                            key={idx} 
                            className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${
                                tier.isPopular 
                                ? 'shadow-2xl scale-105 border-2 border-brand-red z-10' 
                                : 'shadow-lg border border-gray-200 opacity-80 hover:opacity-100'
                            }`}
                        >
                            {tier.isPopular && (
                                <div className="bg-brand-red text-white text-center text-xs font-bold py-2 uppercase tracking-widest">
                                    Đăng ký ngay hôm nay
                                </div>
                            )}
                            <div className="p-8 pb-0">
                                <h3 className="text-xl font-bold text-gray-500 mb-2 uppercase tracking-wide">{tier.name}</h3>
                                <div className="text-brand-dark text-4xl font-heading font-black mb-6">{tier.price}</div>
                                <div className="h-px w-full bg-gray-100 mb-6"></div>
                            </div>
                            
                            <div className="p-8 pt-0 flex-1">
                                <ul className="space-y-4 mb-8">
                                    {tier.features.map((feat, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700 text-sm font-medium">
                                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Check className="text-green-600 w-3 h-3" />
                                            </div>
                                            <span>{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                {tier.isPopular && (
                                    <div className="bg-brand-gold/10 p-4 rounded-lg mb-6 border border-brand-gold/30">
                                        <div className="flex items-center gap-2 text-brand-dark font-bold mb-2">
                                            <Gift size={18} />
                                            <span>BONUS (TRỊ GIÁ 4.900.000đ)</span>
                                        </div>
                                        <p className="text-xs text-gray-600">Tặng kèm Bộ công cụ AI + 60 Content mẫu + Sách điện tử.</p>
                                    </div>
                                )}
                            </div>

                            <div className="p-8 pt-0 mt-auto">
                                <button 
                                    onClick={() => {
                                        if (tier.cta === "Đã Hết Vé") return;
                                        onOpenPayment(tier.name, tier.price);
                                    }}
                                    disabled={tier.cta === "Đã Hết Vé"}
                                    className={`w-full py-4 rounded font-bold uppercase tracking-wide transition-all duration-300 transform hover:-translate-y-1 ${
                                    tier.cta === "Đã Hết Vé"
                                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                    : tier.isPopular 
                                        ? 'bg-brand-red text-white hover:bg-red-700 shadow-lg shadow-red-500/30' 
                                        : 'bg-gray-800 text-white hover:bg-gray-900'
                                }`}>
                                    {tier.cta}
                                </button>
                                {tier.isPopular && (
                                    <p className="text-center text-xs text-gray-400 mt-3 italic">
                                        * Cam kết hoàn tiền nếu không hài lòng
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
