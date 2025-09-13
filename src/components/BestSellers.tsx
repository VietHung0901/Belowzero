import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: "Bộ mặt nạ lặn Professional",
    price: "1.500.000",
    originalPrice: "2.000.000",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1654359631058-4edc4446e829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBlcXVpcG1lbnQlMjBtYXNrJTIwZmlucyUyMHRhbmt8ZW58MXx8fHwxNzU3NzMyODMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true,
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Combo thiết bị lặn cơ bản",
    price: "3.200.000",
    originalPrice: "4.500.000",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1654359631058-4edc4446e829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBlcXVpcG1lbnQlMjBtYXNrJTIwZmlucyUyMHRhbmt8ZW58MXx8fHwxNzU3NzMyODMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: true,
    badge: "Combo tiết kiệm"
  },
  {
    id: 3,
    name: "Đồng hồ lặn chống áp",
    price: "2.800.000",
    originalPrice: null,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1654359631058-4edc4446e829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBlcXVpcG1lbnQlMjBtYXNrJTIwZmlucyUyMHRhbmt8ZW58MXx8fHwxNzU3NzMyODMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    id: 4,
    name: "Áo lặn chống lạnh 3mm",
    price: "1.800.000",
    originalPrice: "2.200.000",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1654359631058-4edc4446e829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBlcXVpcG1lbnQlMjBtYXNrJTIwZmlucyUyMHRhbmt8ZW58MXx8fHwxNzU3NzMyODMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    id: 5,
    name: "Chân vịt silicone cao cấp",
    price: "950.000",
    originalPrice: null,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1654359631058-4edc4446e829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBlcXVpcG1lbnQlMjBtYXNrJTIwZmlucyUyMHRhbmt8ZW58MXx8fHwxNzU3NzMyODMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  },
  {
    id: 6,
    name: "Túi chống nước 20L",
    price: "450.000",
    originalPrice: "600.000",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1654359631058-4edc4446e829?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZpbmclMjBlcXVpcG1lbnQlMjBtYXNrJTIwZmlucyUyMHRhbmt8ZW58MXx8fHwxNzU3NzMyODMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    featured: false
  }
];

export default function BestSellers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(4);

  useEffect(() => {
    const updateVisibleProducts = () => {
      if (window.innerWidth < 768) {
        setVisibleProducts(1);
      } else if (window.innerWidth < 1024) {
        setVisibleProducts(2);
      } else {
        setVisibleProducts(4);
      }
    };

    updateVisibleProducts();
    window.addEventListener('resize', updateVisibleProducts);
    return () => window.removeEventListener('resize', updateVisibleProducts);
  }, []);

  const nextProducts = () => {
    setCurrentIndex((prev) => 
      prev + visibleProducts >= products.length ? 0 : prev + 1
    );
  };

  const prevProducts = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, products.length - visibleProducts) : prev - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextProducts, 4000);
    return () => clearInterval(timer);
  }, [visibleProducts]);

  const displayedProducts = products.slice(currentIndex, currentIndex + visibleProducts);
  if (displayedProducts.length < visibleProducts) {
    displayedProducts.push(...products.slice(0, visibleProducts - displayedProducts.length));
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#0077b6] mb-4">
            Sản phẩm bán chạy
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Những sản phẩm được khách hàng tin tưởng và lựa chọn nhiều nhất
          </p>
        </div>

        {/* Products Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProducts}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 text-[#0077b6] hover:bg-[#0077b6] hover:text-white transition-all duration-300 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextProducts}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 text-[#0077b6] hover:bg-[#0077b6] hover:text-white transition-all duration-300 z-10"
          >
            <ChevronRight size={20} />
          </button>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((product, index) => (
              <div
                key={`${product.id}-${currentIndex}-${index}`}
                className={`group relative bg-white rounded-xl shadow-lg overflow-hidden card-hover cursor-pointer ${
                  product.featured ? 'lg:col-span-1 lg:row-span-2' : ''
                }`}
              >
                {/* Product Badge */}
                {product.badge && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm z-10">
                    {product.badge}
                  </div>
                )}

                {/* Product Image */}
                <div className={`relative overflow-hidden ${product.featured ? 'h-64' : 'h-48'}`}>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover image-hover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  <h3 className="text-gray-800 group-hover:text-[#0077b6] transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.rating})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[#0077b6]">{product.price}đ</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 line-through ml-2 text-sm">
                          {product.originalPrice}đ
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-[#0077b6] text-white py-2 rounded-lg hover:bg-blue-800 button-hover">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(products.length / visibleProducts) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * visibleProducts)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / visibleProducts) === index
                  ? 'bg-[#0077b6]'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}