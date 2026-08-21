// ==========================================
// THỰC HÀNH 1: SỬ DỤNG FOR...OF ĐỂ DUYỆT DANH SÁCH USER
// ==========================================

// Giả lập dữ liệu trả về từ database hoặc danh sách hiển thị trên UI Web của bạn
const users = [
    { id: 1, username: "oanh_admin", role: "Admin", status: "Active" },
    { id: 2, username: "tuan_user", role: "User", status: "Inactive" },
    { id: 3, username: "linh_user", role: "User", status: "Active" },
    { id: 4, username: "hoa_admin", role: "Admin", status: "Inactive" },
    { id: 5, username: "nam_user", role: "User", status: "Active" }
];

console.log("-- Duyệt danh sách user bằng for...of ---");
for (const user of users){
    if (user.role === "Admin" && user.status === "Active") {
        console.log(`User ${user.username} có quyền Admin và đang hoạt động.`);
    }else {
        console.log(`User ${user.username} không có quyền Admin hoặc không hoạt động.`);
    }
}

// ==========================================
// THỰC HÀNH 2: THUẬT TOÁN RETRY CHỜ TRẠNG THÁI WEBSITE (WHILE LOOP)
// ==========================================

console.log("-- Thuật toán retry chờ trạng thái website bằng while loop ---");

let websiteLoaded = false; // Trạng thái trang web ban đầu là chưa tải xong
let retryCount = 0; // Biến đếm số lần thử lại
const maxRetries = 5; // Số lần thử lại tối đa

while (!websiteLoaded && retryCount < maxRetries) {
    retryCount++;
    console.log(`Thử tải lại trang web lần thứ ${retryCount}...`);

    // Giả lập việc kiểm tra trạng thái website chạy lần thứ 4 thành công)
    if (retryCount === 5) {
        websiteLoaded = false;
        console.log("Trang web đã tải xong thành công!");
    }

    // kiểm tra kết quả sau khi thoát khỏi vòng lặp
 if (websiteLoaded) {
    console.log("Website đã tải xong, tiếp tục thực hiện các bước kiểm thử tiếp theo. PASS");
 }else {
    console.log("Website vẫn chưa tải xong, FAILED.");
    }
}
