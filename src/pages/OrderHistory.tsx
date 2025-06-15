
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Package, Search, Eye, RotateCcw, MessageCircle } from 'lucide-react';

const OrderHistory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const orders = [
    {
      id: 'DH001',
      date: '2024-01-15',
      status: 'Đã giao',
      total: 1250000,
      items: [
        { name: 'iPhone 15 Pro Max 256GB', quantity: 1, price: 29990000, image: '/placeholder.svg' },
        { name: 'Ốp lưng iPhone 15 Pro Max', quantity: 1, price: 350000, image: '/placeholder.svg' }
      ]
    },
    {
      id: 'DH002',
      date: '2024-01-10',
      status: 'Đang giao',
      total: 850000,
      items: [
        { name: 'MacBook Air M2 13 inch', quantity: 1, price: 27990000, image: '/placeholder.svg' }
      ]
    },
    {
      id: 'DH003',
      date: '2024-01-05',
      status: 'Đã hủy',
      total: 450000,
      items: [
        { name: 'iPad Air 5th Gen', quantity: 1, price: 15990000, image: '/placeholder.svg' }
      ]
    },
    {
      id: 'DH004',
      date: '2024-01-01',
      status: 'Đang xử lý',
      total: 2150000,
      items: [
        { name: 'Samsung Galaxy S24 Ultra', quantity: 1, price: 32990000, image: '/placeholder.svg' },
        { name: 'Sạc nhanh Samsung 45W', quantity: 1, price: 890000, image: '/placeholder.svg' }
      ]
    }
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
      case 'Đang xử lý': return 'text-yellow-600 bg-yellow-100';
      case 'Đã hủy': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link to="/account" className="hover:text-blue-600">Tài khoản</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Lịch sử đơn hàng</span>
          </nav>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Lịch sử đơn hàng</h1>
        </div>

        {/* Bộ lọc và tìm kiếm */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Tìm kiếm theo mã đơn hàng hoặc tên sản phẩm..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="Đang xử lý">Đang xử lý</option>
                <option value="Đang giao">Đang giao</option>
                <option value="Đã giao">Đã giao</option>
                <option value="Đã hủy">Đã hủy</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Danh sách đơn hàng */}
        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Không tìm thấy đơn hàng</h3>
                <p className="text-gray-500 mb-4">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
                <Button asChild>
                  <Link to="/">Tiếp tục mua sắm</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            filteredOrders.map((order) => (
              <Card key={order.id}>
                <CardHeader className="border-b">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">Đơn hàng #{order.id}</CardTitle>
                      <p className="text-sm text-gray-500">Đặt ngày: {order.date}</p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <span className="text-lg font-bold text-red-600">
                        {formatPrice(order.total)}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500">Số lượng: {item.quantity}</p>
                        </div>
                        <span className="font-medium">{formatPrice(item.price)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6 pt-4 border-t">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Xem chi tiết
                    </Button>
                    
                    {order.status === 'Đã giao' && (
                      <>
                        <Button variant="outline" size="sm">
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Mua lại
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Đánh giá
                        </Button>
                      </>
                    )}
                    
                    {order.status === 'Đang xử lý' && (
                      <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                        Hủy đơn
                      </Button>
                    )}
                    
                    {order.status === 'Đang giao' && (
                      <Button variant="outline" size="sm">
                        Theo dõi đơn hàng
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderHistory;
