/**
 * Input: tỉ giá USD, số tiền USD
 *
 * Các bước xử lý:
 * B1: Nhập tỉ giá USD và số tiền USD muốn đổi
 * B2: Quy đổi tiền USD sang tiền VND với công thức
 * sum = tỉ giá USD * số tiền USD;
 * B3: In kết quả ra console
 *
 * Output: tiền VND
 */

var rate, usd;

rate = 23500;
usd = 100;

sum = rate * usd;

console.log(sum, "VND");
