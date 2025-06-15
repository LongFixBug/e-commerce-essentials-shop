
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, ChevronDown, ChevronUp, MessageCircle, Phone, Mail } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'Tất cả', count: 24 },
    { id: 'order', name: 'Đặt hàng', count: 8 },
    { id: 'payment', name: 'Thanh toán', count: 6 },
    { id: 'shipping', name: 'Vận chuyển', count: 5 },
    { id: 'return', name: 'Đổi trả', count: 3 },
    { id: 'account', name: 'Tài khoản', count: 2 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'order',
      question: 'Làm thế nào để đặt hàng trên ShopVN?',
      answer: 'Để đặt hàng trên ShopVN, bạn có thể thực hiện theo các bước sau: 1) Tìm kiếm sản phẩm bạn muốn mua, 2) Chọn sản phẩm và thêm vào giỏ hàng, 3) Kiểm tra giỏ hàng và tiến hành thanh toán, 4) Điền thông tin giao hàng và chọn phương thức thanh toán, 5) Xác nhận đơn hàng.'
    },
    {
      id: 2,
      category: 'order',
      question: 'Tôi có thể hủy đơn hàng sau khi đã đặt không?',
      answer: 'Bạn có thể hủy đơn hàng miễn phí trong vòng 30 phút sau khi đặt hàng thành công. Sau thời gian này, nếu đơn hàng chưa được xử lý, bạn vẫn có thể hủy nhưng có thể phát sinh phí hủy đơn. Để hủy đơn hàng, vui lòng truy cập mục "Đơn hàng của tôi" hoặc liên hệ hotline 1900 1234.'
    },
    {
      id: 3,
      category: 'payment',
      question: 'ShopVN hỗ trợ những phương thức thanh toán nào?',
      answer: 'ShopVN hỗ trợ nhiều phương thức thanh toán: 1) Thanh toán khi nhận hàng (COD), 2) Thẻ tín dụng/ghi nợ (Visa, Mastercard, JCB), 3) Chuyển khoản ngân hàng, 4) Ví điện tử (MoMo, ZaloPay, VNPay), 5) Trả góp qua thẻ tín dụng và các công ty tài chính.'
    },
    {
      id: 4,
      category: 'payment',
      question: 'Thông tin thanh toán của tôi có an toàn không?',
      answer: 'ShopVN cam kết bảo mật tuyệt đối thông tin thanh toán của khách hàng. Chúng tôi sử dụng công nghệ mã hóa SSL 256-bit và tuân thủ các tiêu chuẩn bảo mật quốc tế PCI DSS. Thông tin thẻ của bạn không được lưu trữ trên hệ thống của chúng tôi mà được xử lý qua các cổng thanh toán uy tín.'
    },
    {
      id: 5,
      category: 'shipping',
      question: 'Thời gian giao hàng là bao lâu?',
      answer: 'Thời gian giao hàng phụ thuộc vào khu vực và phương thức vận chuyển: 1) Giao hàng tiêu chuẩn: 2-4 ngày làm việc, 2) Giao hàng nhanh: 1-2 ngày làm việc, 3) Giao hàng trong ngày: chỉ áp dụng tại TP.HCM và Hà Nội cho đơn hàng đặt trước 15h. Với các vùng xa, thời gian có thể kéo dài 5-7 ngày làm việc.'
    },
    {
      id: 6,
      category: 'shipping',
      question: 'Phí vận chuyển được tính như thế nào?',
      answer: 'Phí vận chuyển được tính dựa trên: 1) Khu vực giao hàng, 2) Trọng lượng và kích thước sản phẩm, 3) Phương thức vận chuyển. Miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên trong nội thành TP.HCM và Hà Nội. Phí vận chuyển sẽ được hiển thị rõ ràng trước khi bạn xác nhận đơn hàng.'
    },
    {
      id: 7,
      category: 'return',
      question: 'Chính sách đổi trả hàng như thế nào?',
      answer: 'ShopVN hỗ trợ đổi trả hàng trong vòng 30 ngày kể từ ngày nhận hàng với điều kiện: 1) Sản phẩm còn nguyên seal, tem, nhãn mác, 2) Không có dấu hiệu sử dụng, 3) Có đầy đủ phụ kiện và hóa đơn. Một số sản phẩm đặc biệt như đồ lót, mỹ phẩm đã mở seal không hỗ trợ đổi trả.'
    },
    {
      id: 8,
      category: 'return',
      question: 'Làm thế nào để yêu cầu đổi trả hàng?',
      answer: 'Để yêu cầu đổi trả hàng: 1) Truy cập "Đơn hàng của tôi" và chọn đơn hàng cần đổi trả, 2) Nhấn "Yêu cầu đổi trả" và chọn lý do, 3) Chụp ảnh sản phẩm nếu có lỗi, 4) Gửi yêu cầu và chờ xác nhận, 5) Đóng gói sản phẩm và gửi lại theo hướng dẫn. Chúng tôi sẽ hỗ trợ thu hồi tại nhà miễn phí.'
    },
    {
      id: 9,
      category: 'account',
      question: 'Làm thế nào để tạo tài khoản ShopVN?',
      answer: 'Tạo tài khoản ShopVN rất đơn giản: 1) Nhấn "Đăng ký" ở góc trên cùng trang web, 2) Điền thông tin cá nhân (họ tên, email, số điện thoại), 3) Tạo mật khẩu mạnh, 4) Xác nhận email hoặc OTP, 5) Hoàn tất đăng ký. Bạn cũng có thể đăng ký nhanh qua Google hoặc Facebook.'
    },
    {
      id: 10,
      category: 'account',
      question: 'Tôi quên mật khẩu, phải làm sao?',
      answer: 'Nếu quên mật khẩu: 1) Nhấn "Quên mật khẩu" tại trang đăng nhập, 2) Nhập email đã đăng ký, 3) Kiểm tra email và nhấn vào link đặt lại mật khẩu, 4) Tạo mật khẩu mới và xác nhận. Nếu không nhận được email, vui lòng kiểm tra thư mục spam hoặc liên hệ hotline để được hỗ trợ.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Câu hỏi thường gặp</span>
          </nav>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Câu hỏi thường gặp</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tìm câu trả lời nhanh chóng cho những thắc mắc phổ biến về dịch vụ của chúng tôi
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Tìm kiếm câu hỏi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-3 text-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Danh mục</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-100 text-blue-700 border border-blue-200'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="mt-6 bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-900 mb-3">
                  Không tìm thấy câu trả lời?
                </h3>
                <p className="text-blue-700 text-sm mb-4">
                  Đội ngũ hỗ trợ của chúng tôi sẵn sàng giúp bạn 24/7
                </p>
                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className="flex items-center text-blue-700 hover:text-blue-900 text-sm"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Gửi tin nhắn
                  </Link>
                  <a
                    href="tel:19001234"
                    className="flex items-center text-blue-700 hover:text-blue-900 text-sm"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    1900 1234
                  </a>
                  <a
                    href="mailto:support@shopvn.com"
                    className="flex items-center text-blue-700 hover:text-blue-900 text-sm"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    support@shopvn.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ List */}
          <div className="lg:col-span-3">
            {filteredFAQs.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                    Không tìm thấy câu hỏi phù hợp
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Thử thay đổi từ khóa tìm kiếm hoặc danh mục
                  </p>
                  <Link to="/contact">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Liên hệ hỗ trợ
                    </button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="text-sm text-gray-600 mb-4">
                  Hiển thị {filteredFAQs.length} câu hỏi
                </div>
                {filteredFAQs.map((faq) => (
                  <Card key={faq.id} className="overflow-hidden">
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    
                    {openItems.includes(faq.id) && (
                      <div className="px-6 pb-6">
                        <div className="border-t pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Chủ đề phổ biến
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Hướng dẫn đặt hàng
                </h3>
                <p className="text-gray-600 text-sm">
                  Tìm hiểu cách đặt hàng nhanh chóng và dễ dàng
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Chính sách thanh toán
                </h3>
                <p className="text-gray-600 text-sm">
                  Thông tin về các phương thức thanh toán được hỗ trợ
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Chính sách đổi trả
                </h3>
                <p className="text-gray-600 text-sm">
                  Quy trình đổi trả hàng đơn giản và thuận tiện
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

export default FAQ;
