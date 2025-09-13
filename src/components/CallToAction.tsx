import { Users, Award, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const courses = [
  {
    id: 1,
    title: "Open Water Diver",
    description: "Khóa học cơ bản cho người mới bắt đầu. Học cách lặn an toàn đến độ sâu 18m.",
    duration: "3-4 ngày",
    level: "Người mới",
    price: "3.500.000đ",
    image: "https://images.unsplash.com/photo-1628371217613-714161455f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3ViYSUyMGRpdmVyJTIwdW5kZXJ3YXRlciUyMGNvcmFsJTIwcmVlZnxlbnwxfHx8fDE3NTc3MzI4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Chứng chỉ PADI", "Lý thuyết + Thực hành", "Thiết bị đầy đủ"]
  },
  {
    id: 2,
    title: "Advanced Open Water",
    description: "Nâng cao kỹ năng lặn với các chuyến lặn chuyên sâu và dẫn đường dưới nước.",
    duration: "2-3 ngày",
    level: "Trung cấp",
    price: "4.200.000đ",
    image: "https://images.unsplash.com/photo-1637308103802-3fc73c7c43a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHVuZGVyd2F0ZXIlMjBkaXZpbmclMjBibHVlfGVufDF8fHx8MTc1NzczMjgyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Lặn sâu 30m", "Kỹ năng dẫn đường", "Chụp ảnh dưới nước"]
  },
  {
    id: 3,
    title: "Rescue Diver",
    description: "Học cách xử lý tình huống khẩn cấp và cứu hộ dưới nước một cách chuyên nghiệp.",
    duration: "3-4 ngày",
    level: "Nâng cao",
    price: "5.800.000đ",
    image: "https://images.unsplash.com/photo-1563968016-9786a660a64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkaXZpbmclMjBpbnN0cnVjdG9yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzU3NzMyODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: ["Kỹ năng cứu hộ", "Xử lý khẩn cấp", "Chứng chỉ quốc tế"]
  }
];

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-[#0077b6] mb-4">
            Bạn chưa từng lặn bao giờ?
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Đăng ký buổi học ngay với chúng tôi
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Từ người mới bắt đầu đến thợ lặn chuyên nghiệp, chúng tôi có khóa học phù hợp cho mọi trình độ
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer"
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#0077b6] text-white px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl text-[#0077b6] mb-2 group-hover:text-blue-800 transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Course Details */}
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-2" />
                    <span>Thời gian: {course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users size={16} className="mr-2" />
                    <span>Tối đa 6 học viên/lớp</span>
                  </div>
                </div>

                {/* Course Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm text-gray-800">Điểm nổi bật:</h4>
                  <div className="flex flex-wrap gap-1">
                    {course.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-[#0077b6] px-2 py-1 rounded-md text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and Action */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl text-[#0077b6]">{course.price}</span>
                    <div className="flex items-center text-yellow-500">
                      <Award size={16} className="mr-1" />
                      <span className="text-xs text-gray-600">Chứng chỉ quốc tế</span>
                    </div>
                  </div>
                  <button className="w-full bg-[#0077b6] text-white py-3 rounded-lg hover:bg-blue-800 button-hover">
                    Xem thêm
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-[#0077b6] rounded-2xl p-8 text-white">
          <h3 className="text-2xl mb-4">Chưa biết chọn khóa học nào?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn miễn phí về khóa học phù hợp nhất với bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0077b6] px-8 py-3 rounded-lg hover:bg-gray-100 button-hover">
              Tư vấn miễn phí
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#0077b6] button-hover">
              Xem lịch học
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}