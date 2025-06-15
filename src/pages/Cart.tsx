
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB - Titan Tự Nhiên",
      price: 34990000,
      originalPrice: 39990000,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200",
      quantity: 1,
      variant: "256GB",
      color: "Titan Tự Nhiên"
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra 256GB - Phantom Black",
      price: 29990000,
      originalPrice: 32990000,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200",
      quantity: 2,
      variant: "256GB",
      color: "Phantom Black"
    },
    {
      id: 3,
      name: "MacBook Air M2 13 inch 2022",
      price: 24990000,
      originalPrice: 27990000,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=200",
      quantity: 1,
      variant: "8GB RAM",
      color: "Space Gray"
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    // Simple coupon logic - in real app, this would validate with backend
    if (couponCode.toUpperCase() === 'SAVE10') {
      setAppliedCoupon({ code: 'SAVE10', discount: 0.1, name: 'Giảm 10%' });
    } else if (couponCode.toUpperCase() === 'FREESHIP') {
      setAppliedCoupon({ code: 'FREESHIP', discount: 0, name: 'Miễn phí vận chuyển', freeShipping: true });
    }
    setCouponCode('');
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);
  
  const couponDiscount = appliedCoupon && !appliedCoupon.freeShipping ? subtotal * appliedCoupon.discount : 0;
  const shippingFee = appliedCoupon?.freeShipping ? 0 : 30000;
  const total = subtotal - couponDiscount + shippingFee;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Giỏ hàng trống</h2>
            <p className="text-gray-600 mb-8">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <Link
              to="/"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Tiếp tục mua sắm
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Giỏ hàng</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Giỏ hàng của bạn</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">Sản phẩm ({cartItems.length} món)</h2>
                
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-200 rounded-lg">
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between">
                          <div className="flex-1">
                            <Link
                              to={`/product/${item.id}`}
                              className="text-lg font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                            >
                              {item.name}
                            </Link>
                            <div className="text-sm text-gray-500 mt-1">
                              <span>Phiên bản: {item.variant}</span>
                              {item.color && <span> • Màu: {item.color}</span>}
                            </div>
                            
                            <div className="flex items-center mt-2">
                              <span className="text-lg font-bold text-red-600">
                                {formatPrice(item.price)}
                              </span>
                              {item.originalPrice && (
                                <span className="ml-2 text-sm text-gray-500 line-through">
                                  {formatPrice(item.originalPrice)}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between sm:justify-end mt-4 sm:mt-0">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-2 hover:bg-gray-100 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="px-4 py-2 border-x border-gray-300 font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-2 hover:bg-gray-100 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                            
                            {/* Remove Button */}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="ml-4 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Continue Shopping */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link
                    to="/"
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center"
                  >
                    ← Tiếp tục mua sắm
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-semibold mb-6">Tóm tắt đơn hàng</h2>
              
              {/* Coupon Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mã giảm giá
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Nhập mã giảm giá"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Áp dụng
                  </button>
                </div>
                {appliedCoupon && (
                  <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded text-sm text-green-800">
                    ✓ Đã áp dụng: {appliedCoupon.name}
                  </div>
                )}
              </div>
              
              {/* Order Summary Details */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Tạm tính:</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                
                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Tiết kiệm:</span>
                    <span>-{formatPrice(savings)}</span>
                  </div>
                )}
                
                {couponDiscount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Giảm giá ({appliedCoupon.code}):</span>
                    <span>-{formatPrice(couponDiscount)}</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span>Phí vận chuyển:</span>
                  <span className={appliedCoupon?.freeShipping ? 'text-green-600' : ''}>
                    {appliedCoupon?.freeShipping ? 'Miễn phí' : formatPrice(shippingFee)}
                  </span>
                </div>
                
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Tổng cộng:</span>
                    <span className="text-red-600">{formatPrice(total)}</span>
                  </div>
                </div>
              </div>
              
              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Tiến hành thanh toán
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              {/* Security Info */}
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>Thanh toán an toàn và bảo mật</p>
                <div className="flex justify-center items-center mt-2 space-x-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-xs text-white flex items-center justify-center">VISA</div>
                  <div className="w-8 h-5 bg-red-600 rounded text-xs text-white flex items-center justify-center">MC</div>
                  <div className="w-8 h-5 bg-green-600 rounded text-xs text-white flex items-center justify-center">COD</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
