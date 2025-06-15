
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';

const Category = () => {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 50000000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Sample data - in real app, this would be fetched based on category
  const categoryData = {
    'dien-thoai': {
      name: 'Điện thoại',
      description: 'Khám phá bộ sưu tập điện thoại thông minh mới nhất',
      count: 2456
    },
    'laptop': {
      name: 'Laptop',
      description: 'Laptop cho mọi nhu cầu công việc và giải trí',
      count: 1823
    },
    'thoi-trang': {
      name: 'Thời trang',
      description: 'Xu hướng thời trang mới nhất cho nam và nữ',
      count: 5234
    }
  };

  const currentCategory = categoryData[category as keyof typeof categoryData] || {
    name: 'Tất cả sản phẩm',
    description: 'Khám phá toàn bộ sản phẩm của chúng tôi',
    count: 12563
  };

  const products = [
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
      id: 3,
      name: "Google Pixel 8 Pro 128GB - Obsidian",
      price: 24990000,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      rating: 4.6,
      reviews: 654,
      category: "dien-thoai"
    },
    {
      id: 4,
      name: "OnePlus 12 256GB - Flowy Emerald",
      price: 21990000,
      originalPrice: 24990000,
      image: "https://images.unsplash.com/photo-1556782867-f4e809ba2c1d?w=400",
      rating: 4.5,
      reviews: 432,
      discount: 12,
      category: "dien-thoai"
    },
    {
      id: 5,
      name: "Xiaomi 14 Ultra 512GB - White",
      price: 28990000,
      image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400",
      rating: 4.4,
      reviews: 321,
      isNew: true,
      category: "dien-thoai"
    },
    {
      id: 6,
      name: "OPPO Find X7 Pro 256GB - Ocean Blue",
      price: 26990000,
      originalPrice: 29990000,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
      rating: 4.3,
      reviews: 234,
      discount: 10,
      category: "dien-thoai"
    }
  ];

  const brands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'OPPO', 'Vivo', 'Realme'];
  const sortOptions = [
    { value: 'popular', label: 'Phổ biến nhất' },
    { value: 'price-low-high', label: 'Giá: Thấp đến cao' },
    { value: 'price-high-low', label: 'Giá: Cao đến thấp' },
    { value: 'newest', label: 'Mới nhất' },
    { value: 'rating', label: 'Đánh giá cao nhất' }
  ];

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
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
            <span className="text-gray-900">{currentCategory.name}</span>
          </nav>
        </div>
      </div>

      {/* Category Header */}
      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{currentCategory.name}</h1>
            <p className="text-gray-600 mb-2">{currentCategory.description}</p>
            <p className="text-sm text-gray-500">{currentCategory.count.toLocaleString()} sản phẩm</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Bộ lọc</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="w-5 h-5" />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Khoảng giá</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="50000000"
                      step="1000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="font-semibold mb-3">Thương hiệu</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="mr-2"
                        />
                        <span className="text-sm">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <h3 className="font-semibold mb-3">Đánh giá</h3>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <label key={rating} className="flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <div className="flex items-center">
                          {[...Array(rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                          ))}
                          {[...Array(5 - rating)].map((_, i) => (
                            <span key={i} className="text-gray-300">★</span>
                          ))}
                          <span className="ml-1 text-sm text-gray-600">trở lên</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                  Xóa bộ lọc
                </button>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Hiển thị {products.length} trên {currentCategory.count} sản phẩm
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>

                {/* View Mode */}
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${
                      viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${
                      viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                  Trước
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 border rounded-lg ${
                      page === 1
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Sau
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Category;
