# CNTB Độc quyền Nhà nước · Chaebol & Đặc xá

Trình chiếu tương tác (cinematic, scroll-driven) cho chủ đề **Chủ nghĩa tư bản độc quyền nhà nước** và vòng lặp **“Tội phạm – Đặc xá”** của giới tài phiệt Hàn Quốc (Chaebol), kèm bộ **5 câu trắc nghiệm** tương tác.

Giao diện mô phỏng theo phong cách trang `hcm-bay.vercel.app`: nền tối điện ảnh, nhấn vàng/gold, font serif Playfair Display, hiệu ứng cuộn bằng Framer Motion.

## Công nghệ
Vite + React 18 · Tailwind CSS 3 · Framer Motion · lucide-react · qrcode

## Chạy thử
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # xuất ra dist/
```

## Bố cục các phần
1. **Thanh điều hướng ngang** trên cùng (menu + nút “Hỏi AI” mở chatbot) + thanh tiến trình cuộn.
2. **Hero** điện ảnh.
3. **Phần 1–3**: Lý thuyết Lênin · Thực tiễn (số liệu động + biểu đồ) · Hệ quả.
4. **Luận đề trung tâm**: mục có **nền động (ảnh Ken Burns) chạy phía sau**, nội dung phủ lên trên (giống layer video).
5. **Bản đồ Hàn Quốc tương tác**: các Chaebol nằm rải rác, bấm vào marker để xem hồ sơ tập đoàn (ảnh + thông tin + vụ đặc xá).
6. **Vòng lặp Quyền lực – Tiền bạc – Pháp lý** (sơ đồ tương tác).
7. **Dòng thời gian**: các giai đoạn & sự kiện của Chaebol, có ảnh tư liệu + điều hướng mốc.
8. **Tổng kết + Video sản phẩm** (video của nhóm, bấm để phát).
9. **Trắc nghiệm 5 câu** (chọn → đúng/sai + lời dẫn → tính điểm → làm lại).
10. **Mã QR** “trải nghiệm thêm” ở cuối + chân trang.
11. **Chatbot mô phỏng** (góc phải dưới) & pill **Thành viên + Công cụ** (góc trái dưới).

> Đã **bỏ màn đăng nhập** — vào thẳng nội dung.

## Tuỳ chỉnh nhanh
- **Nội dung chữ**: `src/data/content.js` · **Câu hỏi**: `src/data/quiz.js`
- **Video sản phẩm**: file đặt tại `public/media/san-pham.mp4`. Đổi đường dẫn ở `SUMMARY.videoUrl`.
- **Đổi link QR**: sửa `EXTRA.qrUrl` (và `EXTRA.qrCaption`) trong `src/data/content.js` thành link thật của nhóm (web đã deploy / Google Drive / Form…).
- **Thông tin tập đoàn / vị trí marker**: mảng `CHAEBOLS` (toạ độ `x,y` theo viewBox 0–1024 của bản đồ).
- **Mốc thời gian + ảnh**: mảng `TIMELINE.milestones`.
- **Nền mục “Luận đề trung tâm”**: `THESIS.bgImage` (ảnh). Nếu có clip `.mp4` **ngắn & nhẹ**, dán vào `THESIS.bgVideo` để dùng video nền.
- **Ảnh tư liệu**: thư mục `public/img/` (nguồn: Wikimedia Commons). Thay file cùng tên để đổi ảnh.

## Lưu ý
- `public/media/san-pham.mp4` ~**450 MB** → chỉ tải khi bấm phát (preload="none"). Nếu **deploy lên web**, nên nén video xuống (720p) hoặc đưa lên YouTube/Drive rồi nhúng, vì file gốc quá nặng.
- Ảnh tư liệu lấy từ Wikimedia Commons cho mục đích học tập; nên kiểm tra giấy phép nếu xuất bản công khai.
