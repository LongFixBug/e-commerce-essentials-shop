
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, Truck, Calendar, Phone, MapPin, CreditCard } from 'lucide-react';

const OrderConfirmation = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId') || 'DH' + Date.now().toString().slice(-6);

  // Mock order data
  const orderData = {
    id: orderId,
    date: new Date().toLocaleDateString('vi-VN'),
    status: 'Đang xử lý',
    total: 58980000,
    shippingFee: 30000,
    discount: 1000000,
    customer: {
      name: 'Nguyễn Văn A',
      phone: '0901234567',
      email: 'nguyen.van.a@email.com',
      address: '123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh'
    },
    paymentMethod: 'COD',
    shippingMethod: 'Giao hàng tiêu chuẩn',
    estimatedDelivery: '3-5 ngày làm việc',
    items: [
      {
        id: 1,
        name: 'iPhone 15 Pro Max 256GB',
        price: 29990000,
        quantity: 1,
        image: '/placeholder.svg'
      },
      {
        id: 2,
        name: 'MacBook Air M2 13 inch',
        price: 27990000,
        quantity: 1,
        image: '/placeholder.svg'
      }
    ]
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const getPaymentMethodText = (method: string) => {
    switch (method) {
      case 'COD': return 'Thanh toán khi nhận hàng';
      case 'card': return 'Thẻ tín dụng/ghi nợ';
      case 'wallet': return 'Ví điện tử';
      default: return method;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Đặt hàng thành công!
          </h1>
          <p className="text-lg text-gray-600">
            Cảm ơn bạn đã mua sắm tại ShopVN. Đơn hàng của bạn đang được xử lý.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Order Summary */}
          <Card className="mb-6">
            <CardHeader className="bg-green-50 border-b">
              <CardTitle className="flex items-center text-green-800">
                <Package className="w-5 h-5 mr-2" />
                Thông tin đơn hàng #{orderData.id}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Ngày đặt</h3>
                  <p className="text-gray-600">{orderData.date}</p>
                </div>
                <div>
                  <Package className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Trạng thái</h3>
                  <p className="text-green-600 font-medium">{orderData.status}</p>
                </div>
                <div>
                  <Truck className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Thời gian giao hàng</h3>
                  <p className="text-gray-600">{orderData.estimatedDelivery}</p>
                </div>
                <div>
                  <CreditCard className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">Tổng tiền</h3>
                  <p className="text-red-600 font-bold text-lg">{formatPrice(orderData.total)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Order Details */}
            <Card>
              <CardHeader>
                <CardTitle>Chi tiết đơn hàng</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 pb-4 border-b last:border-b-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">Số lượng: {item.quantity}</p>
                    </div>
                    <span className="font-medium">{formatPrice(item.price)}</span>
                  </div>
                ))}

                <div className="pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Tạm tính:</span>
                    <span>{formatPrice(orderData.items.reduce((sum, item) => sum + item.price * item.quantity, 0))}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phí vận chuyển:</span>
                    <span>{formatPrice(orderData.shippingFee)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Giảm giá:</span>
                    <span>-{formatPrice(orderData.discount)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Tổng cộng:</span>
                    <span className="text-red-600">{formatPrice(orderData.total)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Customer & Shipping Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Thông tin giao hàng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">{orderData.customer.name}</p>
                    <p className="text-gray-600">{orderData.customer.phone}</p>
                    <p className="text-gray-600">{orderData.customer.email}</p>
                    <p className="text-gray-600">{orderData.customer.address}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-500">Phương thức vận chuyển</p>
                    <p className="font-medium">{orderData.shippingMethod}</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Thông tin thanh toán
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{getPaymentMethodText(orderData.paymentMethod)}</p>
                  {orderData.paymentMethod === 'COD' && (
                    <p className="text-sm text-gray-600 mt-2">
                      Vui lòng chuẩn bị đúng số tiền khi nhận hàng
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`/account/orders`}>
              <Button variant="outline" className="w-full sm:w-auto">
                Theo dõi đơn hàng
              </Button>
            </Link>
            <Link to="/">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Tiếp tục mua sắm
              </Button>
            </Link>
            <Button
              variant="outline"
              onClick={() => window.print()}
              className="w-full sm:w-auto"
            >
              In đơn hàng
            </Button>
          </div>

          {/* Contact Support */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Cần hỗ trợ?
              </h3>
              <p className="text-blue-700 mb-4">
                Liên hệ với chúng tôi nếu bạn có bất kỳ thắc mắc nào về đơn hàng
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:19001234"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Gọi 1900 1234
                </a>
                <Link to="/contact">
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                    Gửi tin nhắn
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmation;
