// src/pages/Home.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ShoppingCart, Star, Truck, Shield, Package } from 'lucide-react';

const Home = () => {
  // Dữ liệu mẫu - không thay đổi
  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max 256GB - Titan Tự Nhiên",
      price: 34990000,
      originalPrice: 39990000,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
      rating: 4.8,
      reviews: 1250,
      discount: 12,
      isNew: true,
      category: "dien-thoai"
    },
    // ... các sản phẩm khác
    {
      id: 6,
      name: "Son Môi Lì MAC Retro Matte Lipstick - Ruby Woo",
      price: 890000,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
      rating: 4.4,
      reviews: 567,
      category: "my-pham"
    }
  ];

  const categories = [
    {
      name: "Điện thoại",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
      link: "/category/dien-thoai",
      count: "2.5K+ sản phẩm"
    },
    // ... các danh mục khác
    {
      name: "Mỹ phẩm",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300",
      link: "/category/my-pham",
      count: "2.8K+ sản phẩm"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* ===== HERO SECTION ĐÃ ĐƯỢC CẬP NHẬT ===== */}
      <section className="relative h-screen text-white">
        {/* Spline Viewer làm nền */}
        <div className="absolute inset-0 z-0">
          <spline-viewer url="https://prod.spline.design/gEbaEI5iEywCS3m9/scene.splinecode"></spline-viewer>
        </div>
        
        {/* Lớp phủ nội dung */}
        <div className="relative z-10 flex h-full items-center justify-center bg-black bg-opacity-30">
          <div className="container mx-auto px-4 text-center animate-fade-in">
            {/* <h1 className="text-5xl font-bold mb-6 leading-tight">
              Mua sắm thông minh<br />
              <span className="text-yellow-300">Giá tốt nhất</span>
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Khám phá hàng triệu sản phẩm chính hãng với ưu đãi lên tới 50%. 
              Giao hàng nhanh, thanh toán an toàn.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-20">
              <Link
                to="/category/dien-thoai"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Mua ngay
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
              >
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ===== KẾT THÚC HERO SECTION ===== */}


      {/* Service Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Giao hàng nhanh</h3>
              <p className="text-gray-600 text-sm">Giao hàng trong 24h tại TP.HCM và Hà Nội</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Bảo hành chính hãng</h3>
              <p className="text-gray-600 text-sm">100% sản phẩm chính hãng, bảo hành 12 tháng</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Package className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Đổi trả dễ dàng</h3>
              <p className="text-gray-600 text-sm">Đổi trả miễn phí trong 7 ngày</p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Hỗ trợ 24/7</h3>
              <p className="text-gray-600 text-sm">Đội ngũ hỗ trợ chuyên nghiệp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-black-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Danh mục sản phẩm</h2>
            <p className="text-back-600">Khám phá các danh mục sản phẩm đa dạng của chúng tôi</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{category.count}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Sản phẩm nổi bật</h2>
            <p className="text-gray-600">Những sản phẩm bán chạy nhất tuần này</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/category/all"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block"
            >
              Xem tất cả sản phẩm
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Đăng ký nhận tin</h2>
          <p className="text-xl mb-8 opacity-90">
            Nhận thông tin về các ưu đãi mới nhất và sản phẩm hot
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Đăng ký
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;