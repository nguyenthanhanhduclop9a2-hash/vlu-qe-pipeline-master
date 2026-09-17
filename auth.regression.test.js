// auth.regression.test.js
const { login } = require('./auth');

describe('Regression Tests: Kiểm tra các trường hợp ngoại lệ', () => {
    
    test('Ngoại lệ: Sai mật khẩu', () => {
        expect(() => login('admin', 'sai_mat_khau')).toThrow("Sai tên đăng nhập hoặc mật khẩu");
    });

    test('Ngoại lệ: Username rỗng', () => {
        expect(() => login('', '123')).toThrow("Username không được để trống");
        expect(() => login('   ', '123')).toThrow("Username không được để trống");
    });

    test('Ngoại lệ: Mật khẩu chứa ký tự đặc biệt', () => {
        expect(() => login('admin', '123@#$')).toThrow("Mật khẩu không được chứa ký tự đặc biệt");
    });

    test('Ngoại lệ: Tài khoản bị khóa', () => {
        expect(() => login('lockedUser', '123')).toThrow("Tài khoản đã bị khóa");
    });

    test('Ngoại lệ: Tài khoản không tồn tại', () => {
        expect(() => login('khong_ton_tai', '123')).toThrow("Sai tên đăng nhập hoặc mật khẩu");
    });
});
