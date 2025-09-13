import ProductCard from './ProductCard';

export default function SaleSection() {
  const saleProducts = [
    {
      id: '1',
      name: 'Áo thun nam basic cotton',
      price: 199000,
      originalPrice: 299000,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      isOnSale: true,
      salePercentage: 33
    },
    {
      id: '2',
      name: 'Quần jean nam slim fit',
      price: 499000,
      originalPrice: 699000,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
      isOnSale: true,
      salePercentage: 29
    },
    {
      id: '3',
      name: 'Giày sneaker trắng',
      price: 799000,
      originalPrice: 999000,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      isOnSale: true,
      salePercentage: 20
    },
    {
      id: '4',
      name: 'Túi xách da PU',
      price: 299000,
      originalPrice: 449000,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      isOnSale: true,
      salePercentage: 33
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="bg-red-500 text-white px-4 py-2 rounded-lg">
              <h2 className="text-xl font-bold">SALE</h2>
            </div>
            <a href="#" className="text-red-600 hover:text-red-700 font-medium">
              Xem tất cả →
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}