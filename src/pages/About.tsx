
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Shield, Heart, Target, Zap, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '2M+', label: 'Khách hàng tin tưởng' },
    { icon: Award, number: '100K+', label: 'Sản phẩm chất lượng' },
    { icon: Shield, number: '24/7', label: 'Hỗ trợ khách hàng' },
    { icon: Heart, number: '99%', label: 'Tỷ lệ hài lòng' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Sứ mệnh',
      description: 'Mang đến trải nghiệm mua sắm tuyệt vời với sản phẩm chất lượng cao và dịch vụ khách hàng xuất sắc.'
    },
    {
      icon: Zap,
      title: 'Tầm nhìn',
      description: 'Trở thành nền tảng thương mại điện tử hàng đầu Việt Nam, kết nối người tiêu dùng với các thương hiệu uy tín.'
    },
    {
      icon: Globe,
      title: 'Giá trị cốt lõi',
      description: 'Chất lượng, uy tín, sáng tạo và luôn đặt khách hàng làm trung tâm trong mọi hoạt động.'
    }
  ];

  const team = [
    {
      name: 'Nguyễn Văn A',
      position: 'CEO & Founder',
      image: '/placeholder.svg',
      description: 'Với hơn 15 năm kinh nghiệm trong lĩnh vực công nghệ và thương mại điện tử.'
    },
    {
      name: 'Trần Thị B',
      position: 'CTO',
      image: '/placeholder.svg',
      description: 'Chuyên gia công nghệ với passion xây dựng các hệ thống scalable và user-friendly.'
    },
    {
      name: 'Lê Văn C',
      position: 'Head of Marketing',
      image: '/placeholder.svg',
      description: 'Chuyên gia marketing digital với nhiều năm kinh nghiệm trong ngành retail.'
    },
    {
      name: 'Phạm Thị D',
      position: 'Head of Operations',
      image: '/placeholder.svg',
      description: 'Đảm bảo mọi quy trình vận hành diễn ra hiệu quả và mang lại trải nghiệm tốt nhất.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Về chúng tôi</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Về <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ShopVN</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chúng tôi là nền tảng thương mại điện tử hàng đầu Việt Nam, 
            cam kết mang đến cho khách hàng những sản phẩm chất lượng cao 
            và trải nghiệm mua sắm tuyệt vời nhất.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Câu chuyện của chúng tôi</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ShopVN được thành lập vào năm 2020 với mục tiêu đơn giản nhưng đầy tham vọng: 
                  tạo ra một nền tảng thương mại điện tử tốt nhất cho người tiêu dùng Việt Nam.
                </p>
                <p>
                  Bắt đầu từ một startup nhỏ với đội ngũ chỉ 10 người, chúng tôi đã phát triển 
                  thành một trong những nền tảng thương mại điện tử uy tín nhất tại Việt Nam, 
                  phục vụ hơn 2 triệu khách hàng trên toàn quốc.
                </p>
                <p>
                  Chúng tôi tự hào về hành trình này và cam kết tiếp tục đổi mới, 
                  phát triển để mang đến những giá trị tốt nhất cho cộng đồng.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/placeholder.svg"
                alt="Câu chuyện ShopVN"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Sứ mệnh & Giá trị cốt lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <value.icon className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Đội ngũ lãnh đạo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Giải thưởng & Chứng nhận
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Top 10 E-commerce Platform 2023
                </h3>
                <p className="text-gray-600">Vietnam Digital Awards</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  ISO 27001:2013
                </h3>
                <p className="text-gray-600">Chứng nhận bảo mật thông tin</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Customer Choice Award 2023
                </h3>
                <p className="text-gray-600">Vietnam E-commerce Association</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Hãy cùng chúng tôi xây dựng tương lai
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Tham gia cộng đồng ShopVN để trải nghiệm mua sắm tuyệt vời
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/login"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Đăng ký ngay
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Liên hệ với chúng tôi
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default About;
