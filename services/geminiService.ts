import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize the client safely
let ai: GoogleGenAI | null = null;
try {
    if (API_KEY) {
        ai = new GoogleGenAI({ apiKey: API_KEY });
    }
} catch (error) {
    console.error("Failed to initialize Gemini client:", error);
}

const SYSTEM_INSTRUCTION = `
Bạn là trợ lý AI thông minh của chương trình "AI BUSINESS OS - Hệ Thống Kinh Doanh Tự Động".
Nhiệm vụ của bạn là trả lời các câu hỏi của khách hàng tiềm năng về khóa học, giúp họ hiểu rõ giá trị và đăng ký tham gia.

Thông tin về AI Business OS:
- Mục tiêu: Biến doanh nghiệp thành cỗ máy kiếm tiền tự động trong 90 ngày.
- Công thức: 1 người + AI = Năng suất 5 nhân sự.
- Đối tượng: Chủ Spa, Chủ PMU, Doanh nghiệp nhỏ (SME), người kinh doanh online.
- Lộ trình 2 ngày: 
  + Ngày 1: Phá vỡ mô hình cũ, xây Content Automation, AI Sale Engine.
  + Ngày 2: Hệ thống chăm sóc khách tự động, Nhân bản đội ngũ (AI Team), Kế hoạch 90 ngày.
- Lợi ích: Thoát khỏi vận hành sự vụ, giảm chi phí nhân sự, tăng biên lợi nhuận, tạo dòng tiền lặp lại.
- Quà tặng (Bonus): Bộ công cụ AI, 60 content mẫu, Kịch bản chốt đơn Calita, Group hỗ trợ 30 ngày.
- Giá vé: Ưu đãi đặc biệt 9.900.000đ (Giá gốc 19.900.000đ). Chỉ còn ít suất.
- Liên hệ: Hotline 0899.xxx.xxx, Email support@calita.vn.

Phong cách trả lời:
- Chuyên nghiệp, đánh vào nỗi đau (bận rộn, chi phí cao) và giải pháp (tự động hóa).
- Luôn tạo sự khan hiếm (chỉ còn ít suất).
- Sử dụng tiếng Việt.

Nếu người dùng hỏi về giá vé, hãy nhấn mạnh mức giá ưu đãi 9.9 triệu (giảm từ 19.9 triệu) và quà tặng đi kèm.
`;

export const sendMessageToGemini = async (message: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
    if (!ai) {
        return "Hệ thống AI đang bảo trì (Thiếu API Key). Vui lòng liên hệ hotline để được hỗ trợ.";
    }

    try {
        const model = "gemini-2.5-flash"; // Use flash for fast, responsive chat
        const chat = ai.chats.create({
            model: model,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            },
            history: history
        });

        const result = await chat.sendMessage({ message });
        return result.text || "Xin lỗi, tôi chưa hiểu ý bạn. Bạn có thể hỏi lại không?";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Đã có lỗi xảy ra khi kết nối với trợ lý AI. Vui lòng thử lại sau.";
    }
};