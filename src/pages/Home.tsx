
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { ShoppingCart, Star, Truck, Shield, Package } from 'lucide-react';

const Home = () => {
  // Sample data - in real app, this would come from API
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
    {
      id: 2,
      name: "MacBook Air M2 13 inch 2022 - Màn Hình Liquid Retina",
      price: 24990000,
      originalPrice: 27990000,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400",
      rating: 4.9,
      reviews: 856,
      discount: 11,
      category: "laptop"
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra 256GB - Phantom Black",
      price: 29990000,
      originalPrice: 32990000,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
      rating: 4.7,
      reviews: 923,
      discount: 9,
      category: "dien-thoai"
    },
    {
      id: 4,
      name: "Áo Sơ Mi Nam Tay Dài Công Sở - Trắng",
      price: 299000,
      originalPrice: 399000,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
      rating: 4.5,
      reviews: 342,
      discount: 25,
      category: "thoi-trang"
    },
    {
      id: 5,
      name: "Nồi Cơm Điện Tử Sharp 1.8L - KS-COM18V",
      price: 1590000,
      originalPrice: 1890000,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
      rating: 4.6,
      reviews: 234,
      discount: 16,
      category: "gia-dung"
    },
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
    {
      name: "Laptop",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300",
      link: "/category/laptop",
      count: "1.8K+ sản phẩm"
    },
    {
      name: "Thời trang",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300",
      link: "/category/thoi-trang",
      count: "5.2K+ sản phẩm"
    },
    {
      name: "Gia dụng",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
      link: "/category/gia-dung",
      count: "3.1K+ sản phẩm"
    },
    {
      name: "Sách",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300",
      link: "/category/sach",
      count: "12K+ sản phẩm"
    },
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Mua sắm thông minh<br />
                <span className="text-yellow-300">Giá tốt nhất</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Khám phá hàng triệu sản phẩm chính hãng với ưu đãi lên tới 50%. 
                Giao hàng nhanh, thanh toán an toàn.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
            <div className="animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600"
                alt="Shopping"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Danh mục sản phẩm</h2>
            <p className="text-gray-600">Khám phá các danh mục sản phẩm đa dạng của chúng tôi</p>
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
