import { ImageWithFallback } from './figma/ImageWithFallback';

export default function TeachingAchievements() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl card-hover cursor-pointer">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1563968016-9786a660a64d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkaXZpbmclMjBpbnN0cnVjdG9yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzU3NzMyODM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Founder diving"
                className="w-full h-96 object-cover image-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0077b6] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative Wave Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#0077b6]">
                <path
                  d="M20,20 Q40,10 60,20 T100,20 Q80,40 60,30 T20,30 Q40,50 60,40 T100,40 Q80,60 60,50 T20,50 Q40,70 60,60 T100,60 Q80,80 60,70 T20,70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl text-[#0077b6] mb-4">
                Nguyễn Minh Tâm
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Chuyên gia lặn biển với hơn 15 năm kinh nghiệm, được chứng nhận PADI Master Instructor
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-[#0077b6]">
                Hành trình khởi nghiệp
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Xuất phát từ niềm đam mê khám phá đại dương từ nhỏ, tôi đã dành toàn bộ tuổi trẻ để học hỏi và trải nghiệm những chuyến lặn khắp thế giới. Từ những rạn san hô nhiệt đới đến những hang động sâu thẳm, mỗi chuyến lặn đều mang lại cho tôi những bài học quý báu.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-[#0077b6]">
                Thách thức và sứ mệnh
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nhận thấy việc tiếp cận với môn thể thao lặn biển ở Việt Nam còn nhiều rào cản, tôi quyết định thành lập Belowzero với sứ mệnh democratize việc học lặn - làm cho môn thể thao này trở nên dễ tiếp cận, an toàn và thú vị cho mọi người.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-[#0077b6]">
                Tầm nhìn tương lai
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Chúng tôi mong muốn lan tỏa đam mê khám phá đại dương đến với cộng đồng, đồng thời nâng cao ý thức bảo vệ môi trường biển. Mỗi người học viên của Belowzero không chỉ trở thành những thợ lặn giỏi mà còn là những đại sứ bảo vệ đại dương.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl text-[#0077b6] mb-2">500+</div>
                <div className="text-sm text-gray-600">Học viên đã tốt nghiệp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-[#0077b6] mb-2">15</div>
                <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-[#0077b6] mb-2">50+</div>
                <div className="text-sm text-gray-600">Điểm lặn khám phá</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}