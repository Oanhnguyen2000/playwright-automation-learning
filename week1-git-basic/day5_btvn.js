//Khi chạy một bộ kiểm thử tự động, hệ thống sẽ ghi nhận thời điểm bắt đầu (Start Time) và thời điểm kết thúc (End Time) dưới dạng số giây. Bạn hãy viết một hàm tên là calculateDuration nhận vào 2 tham số startTime và endTime và trả về (return) thông điệp dạng: "Bộ test đã chạy hết [duration] giây."

function calculateDuration(startTime, endTime) {
    const duration = endTime - startTime; // Tính toán thời gian chạy
    return `Bộ test đã chạy hết ${duration} giây.`;
}
console.log(calculateDuration(10, 20)); // Output: "Bộ test đã chạy hết 10 giây."
console.log(calculateDuration(5, 15)); // Output: "Bộ test đã chạy hết 10 giây."
console.log(calculateDuration(0, 30)); // Output: "Bộ test đã chạy hết 30 giây."

//  Bài tập 2: Hàm định dạng tiền tệ Việt Nam (Currency Formatter)
// Khi bạn lấy số tiền từ Database thật (Ví dụ: 500000), trên UI trang web của bạn có thể sẽ hiển thị là "500.000 đ" hoặc 
// "500,000 VND". Hãy viết một hàm để biến đổi số thành chuỗi đã định dạng để so sánh.

function formatAmount(amount) {
  amount = amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    return 'Kết quả: ' + amount;
}
console.log(formatAmount(500000)); // Output: "Kết quả: 500.000 ₫"
console.log(formatAmount(1000000)); // Output: "Kết quả: 1.000.000 ₫"   
