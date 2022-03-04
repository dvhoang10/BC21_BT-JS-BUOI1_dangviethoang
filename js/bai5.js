/**
 * Input: s có 2 chữ số
 *
 * Các bước xử lý:
 * B1: Nhập s có 2 chữ số
 * B2: Tách hàng chục và hàng đơn vị của s theo công thức
 * n = Math.trunc(s / 10);
 * m = Math.trunc(s % 10);
 * B3: In kết quả ra console
 *
 * Output: Tổng các chữ số của s
 */

var s, n, m;

s = 12;

n = Math.trunc(s / 10);
m = Math.trunc(s % 10);

console.log("SUM: ", n + m);
