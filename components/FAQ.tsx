import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
    const faqs = [
        {
            q: "Tôi không rành công nghệ/kỹ thuật thì có học được không?",
            a: "Chắc chắn được. AI Business OS được thiết kế để đơn giản hóa mọi thứ. Chúng tôi không dạy code hay kỹ thuật phức tạp. Chúng tôi dạy tư duy sử dụng công cụ đã có sẵn (được đóng gói) để ra kết quả ngay tại lớp."
        },
        {
            q: "Chương trình này phù hợp với ngành nghề nào?",
            a: "Đặc biệt tối ưu cho Spa, Thẩm mỹ viện (PMU), Bán lẻ, Thời trang và các doanh nghiệp dịch vụ. Bất kỳ mô hình nào cần tìm kiếm khách hàng (marketing), chăm sóc khách hàng (sale) và quản lý nhân sự đều áp dụng được."
        },
        {
            q: "Tôi đã từng học về AI rồi, khóa này có gì khác?",
            a: "Đây không phải khóa học dạy 'prompt' (câu lệnh) hay giới thiệu tool. Đây là khóa học về HỆ THỐNG. Chúng tôi hướng dẫn cách kết nối AI vào quy trình kinh doanh thực tế để tạo ra tiền và giảm nhân sự, chứ không chỉ là chat vui vẻ."
        },
        {
            q: "Nếu học xong tôi chưa làm được thì sao?",
            a: "Bạn sẽ được tham gia Group hỗ trợ riêng 30 ngày sau khóa học. Đội ngũ support của Calita sẽ đồng hành, giải đáp thắc mắc và hỗ trợ kỹ thuật cho đến khi bạn vận hành được hệ thống."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-brand-dark mb-12">
                    CÂU HỎI THƯỜNG GẶP
                </h2>

                <div className="space-y-4">
                    {faqs.map((item, idx) => (
                        <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                            <button 
                                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition text-left"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            >
                                <span className="font-bold text-gray-800 pr-4">{item.q}</span>
                                {openIndex === idx ? <ChevronUp className="text-gray-500 flex-shrink-0" /> : <ChevronDown className="text-gray-500 flex-shrink-0" />}
                            </button>
                            {openIndex === idx && (
                                <div className="p-5 bg-white text-gray-600 border-t border-gray-200 leading-relaxed">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;