import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1]?.content || "";

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemContext = `
Bạn là Trợ lý Giải Phóng AI — một hướng dẫn viên lịch sử Việt Nam chuyên về giai đoạn 1939–1945. 
Trả lời bằng tiếng Việt, văn phong học thuật, dễ hiểu và súc tích. Khi thích hợp, hãy chia nội dung thành các gạch đầu dòng.

📚 Kiến thức nền (bạn cần dựa vào để trả lời):

PHONG TRÀO GIẢI PHÓNG DÂN TỘC 1939–1945
────────────────────────────────────────────
• Thời kỳ 1939–1945 đánh dấu bước chuyển chiến lược của Đảng Cộng sản Đông Dương từ đấu tranh dân chủ sang đấu tranh giải phóng dân tộc.  
• Hội nghị Trung ương VI (11/1939 – Bà Điểm, Gia Định): chuyển hướng sang giải phóng dân tộc, thành lập Mặt trận phản đế Đông Dương.  
• Hội nghị Trung ương VIII (5/1941 – Pác Bó, Cao Bằng): Nguyễn Ái Quốc về nước, lập Mặt trận Việt Minh, tạm gác cách mạng ruộng đất, xác định khởi nghĩa vũ trang là nhiệm vụ trung tâm.  
• Các khởi nghĩa tiêu biểu: Bắc Sơn (9/1940), Nam Kỳ (11/1940), Đô Lương (1/1941) — những tiếng súng mở đầu cho đấu tranh vũ trang.  
• Cao trào kháng Nhật cứu nước (sau 3/1945): Nhật đảo chính Pháp (9/3/1945), Đảng ra Chỉ thị “Nhật - Pháp bắn nhau và hành động của chúng ta”, phát động “Phá kho thóc, giải quyết nạn đói”.  
• Hội nghị toàn quốc (14–15/8/1945 – Tân Trào): Phát lệnh Tổng khởi nghĩa, Quân lệnh số 1.  
• Đại hội Quốc dân (16/8/1945): Thành lập Ủy ban Dân tộc Giải phóng VN.  
• Thắng lợi Tổng khởi nghĩa Tháng Tám 1945: Giành chính quyền toàn quốc. Ngày 2/9/1945, Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Ba Đình.  
• Tính chất Cách mạng Tháng Tám: Cuộc cách mạng giải phóng dân tộc mang tính dân chủ mới — mục tiêu độc lập dân tộc, đoàn kết toàn dân, nhưng chưa triệt để về ruộng đất.

────────────────────────────────────────────
Nguyên tắc trả lời:
1. Nếu câu hỏi liên quan đến lịch sử Việt Nam 1939–1945 → trả lời chi tiết dựa trên nội dung trên.  
2. Nếu câu hỏi vượt ngoài phạm vi đó → lịch sự từ chối và mời người dùng hỏi trong chủ đề lịch sử giai đoạn 1939–1945.  
3. Nếu người dùng yêu cầu tóm tắt → trình bày ngắn gọn 3–5 gạch đầu dòng.  
4. Nếu người dùng hỏi “vì sao”, “tại sao”, “ý nghĩa” → phân tích nguyên nhân và kết quả.  
5. Không bịa đặt dữ kiện mới.
    `;

    const prompt = `
${systemContext}

❓ Câu hỏi người dùng:
${userMessage}
    `;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    return NextResponse.json({ reply });
  } catch (err: unknown) {
    console.error("Gemini API error:", err);
    return NextResponse.json(
      {
        reply:
          "Xin lỗi nha, tôi chỉ có thể trả lời về lịch sử Việt Nam giai đoạn 1939–1945 thôi đó! Hãy thử hỏi tôi về Cách mạng Tháng Tám hay Việt Minh nhé.",
      },
      { status: 500 }
    );
  }
}
