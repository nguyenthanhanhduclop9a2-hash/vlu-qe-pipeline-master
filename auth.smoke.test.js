// auth.smoke.test.js
const { login } = require('./auth');

test('Smoke Test: Đăng nhập đúng admin/123 trả về true', () => {
    expect(login('admin', '123')).toBe(true);
});
