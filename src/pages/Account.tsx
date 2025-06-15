
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Package, Heart, MapPin, Settings, LogOut, Bell, CreditCard } from 'lucide-react';

const Account = () => {
  const [user] = useState({
    name: 'Nguyễn Văn A',
    email: 'nguyen.van.a@email.com',
    phone: '0901234567',
    avatar: '/placeholder.svg'
  });

  const recentOrders = [
    { id: 'DH001', date: '2024-01-15', status: 'Đã giao', total: 1250000 },
    { id: 'DH002', date: '2024-01-10', status: 'Đang giao', total: 850000 },
    { id: 'DH003', date: '2024-01-05', status: 'Đã hủy', total: 450000 },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Đã giao': return 'text-green-600 bg-green-100';
      case 'Đang giao': return 'text-blue-600 bg-blue-100';
      case 'Đã hủy': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Tài khoản của tôi</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Tài khoản của tôi</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  <Link
                    to="/account"
                    className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50 text-blue-600"
                  >
                    <User className="w-5 h-5" />
                    <span>Tổng quan</span>
                  </Link>
                  <Link
                    to="/account/orders"
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <Package className="w-5 h-5" />
                    <span>Đơn hàng</span>
                  </Link>
                  <Link
                    to="/wishlist"
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Danh sách yêu thích</span>
                  </Link>
                  <Link
                    to="/account/addresses"
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Sổ địa chỉ</span>
                  </Link>
                  <Link
                    to="/account/notifications"
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <Bell className="w-5 h-5" />
                    <span>Thông báo</span>
                  </Link>
                  <Link
                    to="/account/settings"
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100"
                  >
                    <Settings className="w-5 h-5" />
                    <span>Cài đặt</span>
                  </Link>
                  <button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 w-full text-left text-red-600">
                    <LogOut className="w-5 h-5" />
                    <span>Đăng xuất</span>
                  </button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Thống kê tổng quan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Package className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">15</h3>
                  <p className="text-gray-600">Đơn hàng</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">8</h3>
                  <p className="text-gray-600">Yêu thích</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <CreditCard className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">{formatPrice(5420000)}</h3>
                  <p className="text-gray-600">Tổng chi tiêu</p>
                </CardContent>
              </Card>
            </div>

            {/* Đơn hàng gần đây */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Đơn hàng gần đây</CardTitle>
                <Link to="/account/orders" className="text-blue-600 hover:underline">
                  Xem tất cả
                </Link>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">Đơn hàng #{order.id}</h4>
                        <p className="text-sm text-gray-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{formatPrice(order.total)}</p>
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Thông tin cá nhân */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Thông tin cá nhân</CardTitle>
                <Button variant="outline" size="sm">
                  Chỉnh sửa
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Họ và tên</label>
                    <p className="mt-1">{user.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="mt-1">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Số điện thoại</label>
                    <p className="mt-1">{user.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Ngày sinh</label>
                    <p className="mt-1">15/03/1990</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Account;
