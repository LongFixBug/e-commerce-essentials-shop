
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const [wishlistCount] = useState(5);

  return (
    <header className="bg-background shadow-lg sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm">
        Miễn phí vận chuyển cho đơn hàng trên 500.000đ ⚡
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ShopVN
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/account" className="hidden md:flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5 mr-1" />
              <span>Tài khoản</span>
            </Link>
            
            <Link to="/wishlist" className="relative text-gray-700 hover:text-red-500 transition-colors">
              <Heart className="w-6 h-6" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block border-t md:border-t-0 py-4`}>
          <ul className="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-8">
            <li><Link to="/category/dien-thoai" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Điện thoại</Link></li>
            <li><Link to="/category/laptop" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Laptop</Link></li>
            <li><Link to="/category/thoi-trang" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Thời trang</Link></li>
            <li><Link to="/category/gia-dung" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Gia dụng</Link></li>
            <li><Link to="/category/sach" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Sách</Link></li>
            <li><Link to="/category/my-pham" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Mỹ phẩm</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
