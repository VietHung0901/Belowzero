import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isOnSale?: boolean;
  salePercentage?: number;
}

export default function ProductCard({ 
  name, 
  price, 
  originalPrice, 
  image, 
  isOnSale,
  salePercentage 
}: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isOnSale && salePercentage && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            -{salePercentage}%
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="font-medium text-gray-900 line-clamp-2">{name}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-lg font-bold text-primary">
            {price.toLocaleString('vi-VN')}đ
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {originalPrice.toLocaleString('vi-VN')}đ
            </span>
          )}
        </div>
        <Button className="w-full" variant="outline" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Thêm vào giỏ
        </Button>
      </div>
    </Card>
  );
}