
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Heart, Star, ShoppingCart, Truck, Shield, Package, User } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('256GB');

  // Sample product data - in real app, this would be fetched based on id
  const product = {
    id: parseInt(id || '1'),
    name: "iPhone 15 Pro Max 256GB - Titan Tự Nhiên",
    price: 34990000,
    originalPrice: 39990000,
    rating: 4.8,
    reviews: 1250,
    inStock: true,
    stockCount: 15,
    images: [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
      "https://images.unsplash.com/photo-1556782867-f4e809ba2c1d?w=600",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600"
    ],
    variants: ['128GB', '256GB', '512GB', '1TB'],
    colors: ['Titan Tự Nhiên', 'Titan Xanh', 'Titan Trắng', 'Titan Đen'],
    description: `
      iPhone 15 Pro Max mang đến trải nghiệm đỉnh cao với chip A17 Pro mạnh mẽ, 
      camera Pro tiên tiến và thiết kế Titan cao cấp. Màn hình Super Retina XDR 6.7 inch 
      với ProMotion cho hình ảnh mượt mà và sắc nét.
    `,
    features: [
      "Chip A17 Pro 3nm tiên tiến nhất",
      "Camera chính 48MP với zoom quang học 5x",
      "Màn hình Super Retina XDR 6.7 inch",
      "Thiết kế Titan siêu bền, siêu nhẹ",
      "Cổng USB-C với tốc độ truyền nhanh",
      "Pin bền bỉ cả ngày"
    ],
    specifications: {
      "Màn hình": "6.7 inch Super Retina XDR",
      "Chip": "A17 Pro",
      "Camera": "48MP + 12MP + 12MP",
      "RAM": "8GB",
      "Bộ nhớ": "256GB",
      "Pin": "4441mAh",
      "Hệ điều hành": "iOS 17"
    }
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra 256GB",
      price: 29990000,
      originalPrice: 32990000,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
      rating: 4.7,
      reviews: 923,
      discount: 9,
      category: "dien-thoai"
    },
    {
      id: 3,
      name: "Google Pixel 8 Pro 128GB",
      price: 24990000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      rating: 4.6,
      reviews: 654,
      category: "dien-thoai"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const addToCart = () => {
    console.log('Added to cart:', { productId: product.id, quantity, variant: selectedVariant });
    // Here you would typically dispatch an action to add to cart
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link to="/category/dien-thoai" className="hover:text-blue-600">Điện thoại</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} đánh giá)
              </span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-red-600">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {product.originalPrice && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-semibold">
                    Tiết kiệm {formatPrice(product.originalPrice - product.price)}
                  </span>
                )}
              </div>
            </div>

            {/* Variants */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Dung lượng:</h3>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-4 py-2 border rounded-lg ${
                      selectedVariant === variant
                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center text-green-600">
                  <Package className="w-5 h-5 mr-2" />
                  <span>Còn {product.stockCount} sản phẩm</span>
                </div>
              ) : (
                <div className="flex items-center text-red-600">
                  <Package className="w-5 h-5 mr-2" />
                  <span>Hết hàng</span>
                </div>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <span className="font-semibold">Số lượng:</span>
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-gray-100"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 hover:bg-gray-100"
                    disabled={quantity >= product.stockCount}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={addToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Thêm vào giỏ hàng
                </button>
                <button className="flex-1 bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 flex items-center justify-center">
                  Mua ngay
                </button>
                <button className="border border-gray-300 p-3 rounded-lg hover:bg-gray-50">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Service Info */}
            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center">
                <Truck className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-sm">Miễn phí giao hàng toàn quốc</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-sm">Bảo hành chính hãng 12 tháng</span>
              </div>
              <div className="flex items-center">
                <Package className="w-5 h-5 text-purple-600 mr-3" />
                <span className="text-sm">Đổi trả trong 7 ngày</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-b-2 border-blue-500 py-4 px-1 text-blue-600 font-medium">
                Mô tả sản phẩm
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-gray-500 hover:text-gray-700">
                Thông số kỹ thuật
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-gray-500 hover:text-gray-700">
                Đánh giá ({product.reviews})
              </button>
            </nav>
          </div>

          <div className="py-8">
            {/* Description Tab */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Mô tả sản phẩm</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {product.description}
                </p>
                <h4 className="font-semibold mb-3">Tính năng nổi bật:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Thông số kỹ thuật</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-600">{key}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
