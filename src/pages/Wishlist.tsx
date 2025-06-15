
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart, X, Star } from 'lucide-react';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'iPhone 15 Pro Max 256GB',
      price: 29990000,
      originalPrice: 32990000,
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 234,
      discount: 9,
      inStock: true,
      category: 'dien-thoai'
    },
    {
      id: 2,
      name: 'MacBook Air M2 13 inch 256GB',
      price: 27990000,
      originalPrice: 30990000,
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 156,
      discount: 10,
      inStock: true,
      category: 'laptop'
    },
    {
      id: 3,
      name: 'iPad Air 5th Gen 64GB WiFi',
      price: 15990000,
      originalPrice: 17990000,
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 89,
      discount: 11,
      inStock: false,
      category: 'dien-thoai'
    },
    {
      id: 4,
      name: 'AirPods Pro 2nd Generation',
      price: 6490000,
      originalPrice: 7490000,
      image: '/placeholder.svg',
      rating: 4.6,
      reviews: 312,
      discount: 13,
      inStock: true,
      category: 'dien-thoai'
    }
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const addToCart = (item: any) => {
    console.log('Thêm vào giỏ hàng:', item);
    // Logic thêm vào giỏ hàng
  };

  const addAllToCart = () => {
    const inStockItems = wishlistItems.filter(item => item.inStock);
    console.log('Thêm tất cả vào giỏ hàng:', inStockItems);
    // Logic thêm tất cả vào giỏ hàng
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <nav className="text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600">Trang chủ</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Danh sách yêu thích</span>
          </nav>
          <div className="flex items-center justify-between mt-4">
            <h1 className="text-3xl font-bold text-gray-900">
              Danh sách yêu thích ({wishlistItems.length})
            </h1>
            {wishlistItems.length > 0 && (
              <Button onClick={addAllToCart} className="bg-blue-600 hover:bg-blue-700">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Thêm tất cả vào giỏ
              </Button>
            )}
          </div>
        </div>

        {wishlistItems.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                Danh sách yêu thích trống
              </h2>
              <p className="text-gray-500 mb-6">
                Bạn chưa có sản phẩm nào trong danh sách yêu thích. 
                Hãy khám phá và thêm những sản phẩm yêu thích của bạn!
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/">Khám phá sản phẩm</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col space-y-1">
                    {item.discount && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        -{item.discount}%
                      </span>
                    )}
                    {!item.inStock && (
                      <span className="bg-gray-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Hết hàng
                      </span>
                    )}
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <CardContent className="p-4">
                  <Link to={`/product/${item.id}`} className="block">
                    <h3 className="font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                      {item.name}
                    </h3>
                  </Link>

                  {/* Rating */}
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(item.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({item.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-red-600">
                        {formatPrice(item.price)}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(item.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-2">
                    <Button
                      onClick={() => addToCart(item)}
                      disabled={!item.inStock}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {item.inStock ? 'Thêm vào giỏ' : 'Hết hàng'}
                    </Button>
                    <Link to={`/product/${item.id}`}>
                      <Button variant="outline" className="w-full">
                        Xem chi tiết
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Gợi ý sản phẩm */}
        {wishlistItems.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Có thể bạn cũng thích</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Hiển thị một số sản phẩm gợi ý */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src="/placeholder.svg"
                    alt="Sản phẩm gợi ý"
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    Mới
                  </span>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 line-clamp-2 mb-2">
                    Samsung Galaxy S24 Ultra 256GB
                  </h3>
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(89)</span>
                  </div>
                  <div className="text-lg font-bold text-red-600 mb-4">
                    {formatPrice(32990000)}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Heart className="w-4 h-4 mr-2" />
                    Thêm yêu thích
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;
