## Hướng dẫn triển khai trang web lên GitHub Pages

Để triển khai trang web React này lên GitHub Pages, bạn cần thực hiện các bước sau:

### 1. Chuẩn bị repository GitHub

1. Tạo repository mới hoặc sử dụng repository hiện có tại https://github.com/nguyenphunho/aga-goldfun
2. Clone repository về máy tính của bạn (nếu chưa có)

### 2. Cấu hình dự án cho GitHub Pages

Tôi đã cấu hình sẵn các file cần thiết cho bạn:

1. File `package.json` đã được cập nhật với:
   - Trường `homepage` đã được thêm: `"homepage": "https://nguyenphunho.github.io/aga-goldfun"`
   - Các script deploy đã được thêm:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

2. File `vite.config.ts` đã được cập nhật với base URL đúng:
   ```typescript
   base: '/aga-goldfun/',
   ```

3. Bạn cần cài đặt package `gh-pages` trước khi triển khai:
   ```bash
   npm install --save-dev gh-pages
   # hoặc
   pnpm add -D gh-pages
   ```

### 3. Triển khai lên GitHub Pages

1. Đẩy code lên repository GitHub:
   ```bash
   git add .
   git commit -m "Prepare for GitHub Pages deployment"
   git push origin main
   ```

2. Chạy lệnh deploy:
   ```bash
   npm run deploy
   # hoặc
   pnpm run deploy
   ```

3. Cấu hình GitHub Pages trong repository:
   - Truy cập vào repository trên GitHub
   - Vào phần Settings > Pages
   - Trong phần "Source", chọn branch `gh-pages` và thư mục `/ (root)`
   - Nhấn Save

### 4. Kiểm tra trang web

Sau khi triển khai, trang web của bạn sẽ có sẵn tại URL: https://nguyenphunho.github.io/aga-goldfun

Lưu ý: Có thể mất vài phút để GitHub Pages cập nhật và hiển thị trang web của bạn.

### 5. Xử lý các vấn đề thường gặp

1. **Vấn đề về đường dẫn**: Nếu các tài nguyên (hình ảnh, CSS, JS) không tải được, hãy đảm bảo tất cả các đường dẫn đều là tương đối hoặc bắt đầu bằng `/aga-goldfun/`.

2. **Vấn đề về định tuyến**: Nếu bạn sử dụng React Router, cần cấu hình để hoạt động với GitHub Pages:
   ```jsx
   <BrowserRouter basename="/aga-goldfun">
     {/* routes */}
   </BrowserRouter>
   ```

3. **Trang 404**: Tạo file `public/404.html` để xử lý các đường dẫn không tồn tại.
