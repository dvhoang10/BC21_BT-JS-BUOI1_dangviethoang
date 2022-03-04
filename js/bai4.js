/**
 * Input: chiều dài, chiều rộng
 *
 * Các bước xử lý:
 * B1: Nhập chiều dài và chiều rộng
 * B2: Tính chu vi hình chữ nhật với công thức
 * p = (chiều dài + chiều rộng) * 2
 * B3: Tính diện tích hình chữ nhật với công thức
 * s = chiều dài * chiều rộng
 * B4: In kết quả ra console
 *
 * Output: diện tích, chu vi
 */

var n, m;

n = 6;
m = 4;

p = (n + m) * 2;
s = n * m;

console.log("Chu vi: ", p);
console.log("Dien tich: ", s);
