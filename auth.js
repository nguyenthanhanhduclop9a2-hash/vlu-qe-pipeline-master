// auth.js

// Dữ liệu người dùng giả lập (Mock database)
const users = {
    admin: { password: "123", isLocked: false },
    lockedUser: { password: "123", isLocked: true }
};

/**
 * Hàm đăng nhập
 * @param {string} username - Tên đăng nhập
 * @param {string} password - Mật khẩu
 * @returns {boolean} - Trả về true nếu đăng nhập thành công
 * @throws {Error} - Ném lỗi nếu có ngoại lệ
 */
function login(username, password) {
    // Kiểm tra username rỗng
    if (!username || username.trim() === "") {
        throw new Error("Username không được để trống");
    }

    // Kiểm tra mật khẩu chứa ký tự đặc biệt
    const specialCharRegex = /[^a-zA-Z0-9]/;
    if (specialCharRegex.test(password)) {
        throw new Error("Mật khẩu không được chứa ký tự đặc biệt");
    }

    const user = users[username];

    // Kiểm tra tài khoản không tồn tại hoặc sai mật khẩu
    if (!user || user.password !== password) {
        throw new Error("Sai tên đăng nhập hoặc mật khẩu");
    }

    // Kiểm tra tài khoản bị khóa
    if (user.isLocked) {
        throw new Error("Tài khoản đã bị khóa");
    }

    // Đăng nhập thành công
    return true;
}

module.exports = { login };
