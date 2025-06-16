
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Package, Shield, Truck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-900 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ShopVN
            </h3>
            <p className="text-gray-300 mb-4">
              Nền tảng thương mại điện tử hàng đầu Việt Nam với hàng triệu sản phẩm chất lượng cao.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                f
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                ig
              </div>
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                yt
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Liên hệ</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4">Chính sách</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Chính sách bảo mật</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Điều khoản sử dụng</Link></li>
              <li><Link to="/shipping-policy" className="hover:text-white transition-colors">Chính sách vận chuyển</Link></li>
              <li><Link to="/return-policy" className="hover:text-white transition-colors">Chính sách đổi trả</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Hỗ trợ khách hàng</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@shopvn.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <span className="mr-2">📞</span>
                <span>1900 1234</span>
              </div>
              <div className="text-gray-300">
                <p>Thứ 2 - Chủ nhật</p>
                <p>8:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Features */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center justify-center md:justify-start">
              <Truck className="w-8 h-8 text-blue-400 mr-3" />
              <div>
                <h5 className="font-semibold">Giao hàng nhanh</h5>
                <p className="text-sm text-gray-400">Trong 24h</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Shield className="w-8 h-8 text-green-400 mr-3" />
              <div>
                <h5 className="font-semibold">Bảo hành chính hãng</h5>
                <p className="text-sm text-gray-400">12 tháng</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Package className="w-8 h-8 text-purple-400 mr-3" />
              <div>
                <h5 className="font-semibold">Đổi trả dễ dàng</h5>
                <p className="text-sm text-gray-400">Trong 7 ngày</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Shield className="w-8 h-8 text-yellow-400 mr-3" />
              <div>
                <h5 className="font-semibold">Thanh toán an toàn</h5>
                <p className="text-sm text-gray-400">100% bảo mật</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ShopVN. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Phương thức thanh toán:</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center">VISA</div>
                <div className="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center">MC</div>
                <div className="w-8 h-5 bg-green-600 rounded text-xs flex items-center justify-center">COD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
