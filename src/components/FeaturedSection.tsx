import ProductCard from './ProductCard';

export default function FeaturedSection() {
  const featuredProducts = [
    {
      id: '5',
      name: 'Áo sơ mi nam công sở',
      price: 599000,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
    },
    {
      id: '6',
      name: 'Váy midi nữ thanh lịch',
      price: 799000,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    },
    {
      id: '7',
      name: 'Giày da nam công sở',
      price: 1299000,
      image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=400&fit=crop',
    },
    {
      id: '8',
      name: 'Đồng hồ thời trang',
      price: 2199000,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    },
    {
      id: '9',
      name: 'Áo khoác bomber',
      price: 899000,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
    },
    {
      id: '10',
      name: 'Giày thể thao nữ',
      price: 1099000,
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
    },
    {
      id: '11',
      name: 'Kính mát thời trang',
      price: 399000,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    },
    {
      id: '12',
      name: 'Balo laptop da',
      price: 699000,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sản phẩm nổi bật</h2>
          <p className="text-gray-600">Những sản phẩm được yêu thích nhất</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Xem thêm sản phẩm
          </button>
        </div>
      </div>
    </section>
  );
}