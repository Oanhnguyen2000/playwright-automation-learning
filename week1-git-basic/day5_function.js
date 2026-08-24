// ==========================================
// HELPER 1: TẠO EMAIL NGẪU NHIÊN ĐỂ TEST ĐĂNG KÝ (SIGNUP)
// ==========================================
// Mỗi lần chạy test case đăng ký tài khoản, hệ thống sẽ báo lỗi nếu email đã tồn tại. 
// Hàm này giúp bạn tạo ra một email mới tinh cho mỗi lượt chạy.

function generateRandomEmail() {
    const timestamp = Date.now(); // Lấy thời gian hiện tại tính bằng mili giây
    return `user${timestamp}@example.com`;
}

const randomEmail1 = generateRandomEmail();
console.log(`Email ngẫu nhiên 1: ${randomEmail1}`);

const randomEmail2 = generateRandomEmail();
console.log(`Email ngẫu nhiên 2: ${randomEmail2}`);


// ==========================================
// HELPER 2: CHUYỂN ĐỔI MÃ STATUS CODE THÀNH CHÚ THÍCH (UI VALIDATION)
// ==========================================
// Khi bạn lấy dữ liệu Status từ Database thật dưới dạng số (0, 1, 2) hoặc chữ viết tắt, 
// bạn cần một hàm chuyển nó thành text hiển thị tương ứng trên UI để Assert.



const getOderStatusLabel = (statusCode = -1) => {
    switch (statusCode) {
        case 0:
            return "Chờ Thanh Toán";
        case 1:
            return "Đang Xử Lý";
        case 2:
            return "Hoàn Thành";
        default:
            return "Không xác định";
    }       

    console.log('Status trong Database:2 => Status hiển thị trên UI: ' + getOderStatusLabel(2)); // Output: "Hoàn Thành"
    console.log('Status trong Database:1 => Status hiển thị trên UI: ' + getOderStatusLabel(1)); // Output: "Đang Xử Lý"
    console.log('Status trong Database:0 => Status hiển thị trên UI: ' + getOderStatusLabel(0)); // Output: "Chờ Thanh Toán"
    console.log('Status trong Database:3 => Status hiển thị trên UI: ' + getOderStatusLabel(3)); // Output: "Không xác định"
}

