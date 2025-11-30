
import React, { useState } from 'react';
import { X, CheckCircle, Copy, Loader2, CreditCard } from 'lucide-react';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    packageName?: string;
    price?: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, packageName, price }) => {
    const [step, setStep] = useState<1 | 2>(1); // 1: Info Form, 2: QR Payment
    const [isLoading, setIsLoading] = useState(false);
    
    // Form State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        note: ''
    });

    if (!isOpen) return null;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call to save lead (Google Sheets / CRM)
        setTimeout(() => {
            setIsLoading(false);
            setStep(2); // Move to Payment Step
        }, 1500);
    };

    // Bank Info (Replace with your actual info)
   const bankInfo = {
    bankName: "MB Bank",
    accountNum: "676666776666",
    accountName: "PHAM LE HAI",
    amount: price ? price.replace(/\D/g, '') : "0",
    content: `AIBOS - ${formData.name} - ${formData.phone}`,
};

    };

    // VietQR Link generation
    const qrLink = `https://img.vietqr.io/image/${bankInfo.bankName}-${bankInfo.accountNum}-compact2.jpg?amount=${bankInfo.amount}&addInfo=${bankInfo.content}&accountName=${bankInfo.accountName}`;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
                
                {/* Header */}
                <div className="bg-brand-red p-4 flex justify-between items-center text-white">
                    <h3 className="font-bold text-lg flex items-center gap-2">
                        <CreditCard size={20} />
                        {step === 1 ? 'Thông Tin Đăng Ký' : 'Thanh Toán Chuyển Khoản'}
                    </h3>
                    <button onClick={onClose} className="hover:bg-white/20 p-1 rounded transition">
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {step === 1 ? (
                        /* STEP 1: LEAD FORM */
                        <form onSubmit={handleSubmitForm} className="space-y-4">
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mb-4">
                                <p className="text-sm text-gray-500 uppercase font-bold">Gói đăng ký:</p>
                                <p className="text-xl font-black text-brand-dark">{packageName || "AI Business OS"}</p>
                                <p className="text-brand-red font-bold text-lg">{price}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Họ và Tên *</label>
                                <input 
                                    required 
                                    name="name"
                                    type="text" 
                                    placeholder="Nhập họ tên của bạn"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Số Điện Thoại *</label>
                                <input 
                                    required 
                                    name="phone"
                                    type="tel" 
                                    placeholder="Nhập số điện thoại (Zalo)"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                    name="email"
                                    type="email" 
                                    placeholder="example@gmail.com"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-brand-red text-white font-bold py-4 rounded-lg text-lg hover:bg-red-700 transition transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2"
                            >
                                {isLoading ? <Loader2 className="animate-spin" /> : 'Tiếp Tục Thanh Toán'}
                            </button>
                            <p className="text-xs text-center text-gray-400 mt-2">Thông tin của bạn được bảo mật tuyệt đối.</p>
                        </form>
                    ) : (
                        /* STEP 2: QR CODE */
                        <div className="text-center">
                            <div className="mb-6 bg-green-50 text-green-700 p-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium">
                                <CheckCircle size={16} />
                                Đã ghi nhận thông tin đăng ký!
                            </div>

                            <p className="text-gray-600 mb-4">Vui lòng quét mã QR bên dưới để hoàn tất giữ chỗ:</p>
                            
                            <div className="mx-auto w-64 h-64 border-2 border-gray-200 rounded-xl overflow-hidden mb-6 shadow-inner">
                                <img src={qrLink} alt="VietQR Code" className="w-full h-full object-contain" />
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg text-left text-sm space-y-2 mb-6">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Ngân hàng:</span>
                                    <span className="font-bold">{bankInfo.bankName}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Số tài khoản:</span>
                                    <div className="flex gap-2">
                                        <span className="font-bold">{bankInfo.accountNum}</span>
                                        <button className="text-brand-red hover:underline"><Copy size={14}/></button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Chủ tài khoản:</span>
                                    <span className="font-bold">{bankInfo.accountName}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Nội dung:</span>
                                    <span className="font-bold text-brand-red">{bankInfo.content}</span>
                                </div>
                                <div className="flex justify-between border-t border-gray-200 pt-2 mt-2">
                                    <span className="text-gray-500">Số tiền:</span>
                                    <span className="font-bold text-xl text-brand-red">
                                        {parseInt(bankInfo.amount).toLocaleString('vi-VN')}đ
                                    </span>
                                </div>
                            </div>

                            <p className="text-xs text-gray-500 italic mb-6">
                                * Sau khi chuyển khoản, vui lòng chụp màn hình và gửi cho support nếu cần hỗ trợ gấp.
                            </p>

                            <button 
                                onClick={onClose}
                                className="w-full bg-gray-200 text-gray-800 font-bold py-3 rounded-lg hover:bg-gray-300 transition"
                            >
                                Tôi Đã Chuyển Khoản Xong
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
