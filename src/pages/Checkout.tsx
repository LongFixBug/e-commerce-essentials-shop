
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, CreditCard, Wallet, Clock } from 'lucide-react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    note: '',
    shippingMethod: 'standard',
    paymentMethod: 'cod'
  });

  const cartItems = [
    { id: 1, name: 'iPhone 15 Pro Max 256GB', price: 29990000, quantity: 1, image: '/placeholder.svg' },
    { id: 2, name: 'MacBook Air M2 13 inch', price: 27990000, quantity: 1, image: '/placeholder.svg' }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = formData.shippingMethod === 'express' ? 50000 : 30000;
  const total = subtotal + shippingFee;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Đặt hàng:', formData);
    // Redirect to order confirmation
    window.location.href = '/order-confirmation';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link to="/cart" className="hover:text-blue-600">Giỏ hàng</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Thanh toán</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Thanh toán</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form thanh toán */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Thông tin giao hàng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Họ và tên *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <Label htmlFor="address">Địa chỉ *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">Tỉnh/Thành phố *</Label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Chọn tỉnh/thành</option>
                      <option value="hanoi">Hà Nội</option>
                      <option value="hcm">TP. Hồ Chí Minh</option>
                      <option value="danang">Đà Nẵng</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="district">Quận/Huyện *</Label>
                    <select
                      id="district"
                      name="district"
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Chọn quận/huyện</option>
                      <option value="district1">Quận 1</option>
                      <option value="district2">Quận 2</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="ward">Phường/Xã *</Label>
                    <select
                      id="ward"
                      name="ward"
                      value={formData.ward}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Chọn phường/xã</option>
                      <option value="ward1">Phường 1</option>
                      <option value="ward2">Phường 2</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="note">Ghi chú đơn hàng</Label>
                  <textarea
                    id="note"
                    name="note"
                    value={formData.note}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={3}
                    placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                  />
                </div>
              </CardContent>
            </Card>

            {/* Phương thức vận chuyển */}
            <Card>
              <CardHeader>
                <CardTitle>Phương thức vận chuyển</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <input
                    type="radio"
                    id="standard"
                    name="shippingMethod"
                    value="standard"
                    checked={formData.shippingMethod === 'standard'}
                    onChange={handleInputChange}
                  />
                  <Truck className="w-5 h-5 text-gray-500" />
                  <div className="flex-1">
                    <label htmlFor="standard" className="font-medium cursor-pointer">Giao hàng tiêu chuẩn</label>
                    <p className="text-sm text-gray-500">3-5 ngày làm việc</p>
                  </div>
                  <span className="font-medium">30.000đ</span>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <input
                    type="radio"
                    id="express"
                    name="shippingMethod"
                    value="express"
                    checked={formData.shippingMethod === 'express'}
                    onChange={handleInputChange}
                  />
                  <Clock className="w-5 h-5 text-blue-500" />
                  <div className="flex-1">
                    <label htmlFor="express" className="font-medium cursor-pointer">Giao hàng nhanh</label>
                    <p className="text-sm text-gray-500">1-2 ngày làm việc</p>
                  </div>
                  <span className="font-medium">50.000đ</span>
                </div>
              </CardContent>
            </Card>

            {/* Phương thức thanh toán */}
            <Card>
              <CardHeader>
                <CardTitle>Phương thức thanh toán</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleInputChange}
                  />
                  <Truck className="w-5 h-5 text-green-500" />
                  <div className="flex-1">
                    <label htmlFor="cod" className="font-medium cursor-pointer">Thanh toán khi nhận hàng (COD)</label>
                    <p className="text-sm text-gray-500">Thanh toán bằng tiền mặt khi nhận hàng</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                  />
                  <CreditCard className="w-5 h-5 text-blue-500" />
                  <div className="flex-1">
                    <label htmlFor="card" className="font-medium cursor-pointer">Thẻ tín dụng/ghi nợ</label>
                    <p className="text-sm text-gray-500">Visa, Mastercard, JCB</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 border rounded-lg">
                  <input
                    type="radio"
                    id="wallet"
                    name="paymentMethod"
                    value="wallet"
                    checked={formData.paymentMethod === 'wallet'}
                    onChange={handleInputChange}
                  />
                  <Wallet className="w-5 h-5 text-purple-500" />
                  <div className="flex-1">
                    <label htmlFor="wallet" className="font-medium cursor-pointer">Ví điện tử</label>
                    <p className="text-sm text-gray-500">MoMo, ZaloPay, VNPay</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tóm tắt đơn hàng */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Tóm tắt đơn hàng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm line-clamp-2">{item.name}</h4>
                      <p className="text-sm text-gray-500">Số lượng: {item.quantity}</p>
                    </div>
                    <span className="font-medium">{formatPrice(item.price)}</span>
                  </div>
                ))}

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Tạm tính:</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí vận chuyển:</span>
                    <span>{formatPrice(shippingFee)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Tổng cộng:</span>
                    <span className="text-red-600">{formatPrice(total)}</span>
                  </div>
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                >
                  Hoàn tất đơn hàng
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  Bằng việc đặt hàng, bạn đồng ý với{' '}
                  <Link to="/terms" className="text-blue-600 hover:underline">
                    Điều khoản và Điều kiện
                  </Link>{' '}
                  của chúng tôi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
