import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Beautiful Ocean Gradient Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1646318714680-5ebaeb912213?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwb2NlYW4lMjB1bmRlcndhdGVyJTIwYmx1ZSUyMGdyYWRpZW50fGVufDF8fHx8MTc1NzczMzUyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Deep ocean background"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0077b6]/90 via-[#0077b6]/70 to-blue-800/60" />
      </div>

      {/* Wave Separator */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 transform rotate-180">
          <path
            d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80L1200,85.3L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="relative z-10 pt-24 pb-8">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#0077b6] font-bold">BZ</span>
                  </div>
                  <h3 className="text-2xl">Belowzero</h3>
                </div>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Khám phá thế giới dưới nước cùng đội ngũ chuyên gia hàng đầu. 
                  Chúng tôi cam kết mang đến trải nghiệm lặn biển an toàn, 
                  chuyên nghiệp và đầy cảm hứng.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <h4 className="text-lg mb-4">Thông tin liên hệ</h4>
                <div className="flex items-center space-x-3">
                  <MapPin size={18} className="text-blue-200" />
                  <span className="text-blue-100">123 Đường Hạ Long, Quảng Ninh, Việt Nam</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-blue-200" />
                  <span className="text-blue-100">+84 (0) 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-blue-200" />
                  <span className="text-blue-100">info@belowzero.vn</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="space-y-3">
                <h4 className="text-lg">Theo dõi chúng tôi</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110"
                  >
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="space-y-4">
              <h4 className="text-lg">Vị trí cửa hàng</h4>
              <div className="relative h-64 rounded-xl overflow-hidden shadow-lg">
                {/* Placeholder Map */}
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin size={32} className="mx-auto mb-2" />
                    <p className="text-sm">Google Maps sẽ được tích hợp tại đây</p>
                    <p className="text-xs opacity-75">123 Đường Hạ Long, Quảng Ninh</p>
                  </div>
                </div>
                {/* Interactive overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300 cursor-pointer flex items-center justify-center">
                  <button className="bg-white text-[#0077b6] px-4 py-2 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                    Xem bản đồ lớn
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-blue-400 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-blue-100 text-sm">
                  © 2024 Belowzero. Tất cả quyền được bảo lưu.
                </p>
                <p className="text-blue-200 text-xs mt-1">
                  Được cấp phép hoạt động bởi Tổng cục Du lịch Việt Nam
                </p>
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Chính sách bảo mật
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Điều khoản sử dụng
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-300">
                  Hỗ trợ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full text-white">
          <path
            d="M20,20 Q40,10 60,20 T100,20 Q80,40 60,30 T20,30 Q40,50 60,40 T100,40 Q80,60 60,50 T20,50 Q40,70 60,60 T100,60 Q80,80 60,70 T20,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>
    </footer>
  );
}