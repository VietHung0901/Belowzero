import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Let Buy Now
              </h2>
              <p className="text-lg text-gray-600">
                Khám phá bộ sưu tập thời trang mới nhất với phong cách hiện đại và chất lượng cao
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Buy Now
            </Button>
          </div>

          {/* Right image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
              alt="Người đàn ông mặc áo thun quần jean cầm giày"
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-white/90 p-3 rounded-lg shadow">
              <p className="text-sm font-medium">Fashion Style</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}