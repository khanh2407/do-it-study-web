import React from "react";
import {
  BookOpen,
  Brain,
  Clock,
  Download,
  GraduationCap,
  Target,
  Rocket,
  Zap,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div
        className="relative flex items-center min-h-screen"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-indigo-900/90 to-blue-900/85" />
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <Target className="w-12 h-12 mr-3 text-purple-400" />
              <h1 className="text-6xl font-bold text-white md:text-7xl">
                Do It
                <span className="text-purple-400"> Study</span>
              </h1>
            </div>
            <p className="mb-12 text-2xl leading-relaxed text-gray-200">
              Do It Study là nền tảng mạng xã hội học tập hàng đầu, giúp bạn
              biến trì hoãn thành hiệu suất. Kết nối, hợp tác và chinh phục mục
              tiêu học tập cùng cộng đồng năng động! 🚀
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button
                onClick={() => window.open("/doit-study-app.apk")}
                className="flex items-center gap-3 px-10 py-5 font-semibold text-white transition-all transform bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 hover:scale-105 hover:shadow-purple-500/25"
              >
                <Download className="w-6 h-6" />
                Tải Ứng Dụng Cho Android
              </button>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5" />
                <span>Bắt đầu học tập trong vài phút</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="container absolute bottom-0 left-0 right-0 px-6 mx-auto transform translate-y-1/2">
          <div className="grid gap-8 md:grid-cols-3">
            <StatCard
              icon={<Zap className="w-8 h-8 text-purple-500" />}
              number="200%"
              text="Tăng năng suất"
            />
            <StatCard
              icon={<Brain className="w-8 h-8 text-purple-500" />}
              number="100"
              text="Sinh Viên Hoạt Động"
            />
            <StatCard
              icon={<Rocket className="w-8 h-8 text-purple-500" />}
              number="95%"
              text="Tỉ Lệ Thành Công"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative pt-48 pb-24">
        <div className="container px-6 mx-auto">
          <div className="mb-20 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Kết Nối & Học Tập Cùng Cộng Đồng
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Do It Study không chỉ là một ứng dụng học tập mà còn là một mạng
              xã hội dành riêng cho việc trao đổi kiến thức và phát triển kỹ
              năng.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Brain className="w-10 h-10 text-purple-500" />}
              title="Học Tập Cùng Cộng Đồng"
              description="Kết nối với bạn bè, thảo luận bài học và cùng nhau chinh phục thử thách học tập."
            />
            <FeatureCard
              icon={<Clock className="w-10 h-10 text-purple-500" />}
              title="Trí Tuệ Nhân Tạo Cá Nhân Hóa"
              description="Nhận lộ trình học tập thông minh, phù hợp với trình độ và mục tiêu cá nhân của bạn."
            />
            <FeatureCard
              icon={<Target className="w-10 h-10 text-purple-500" />}
              title="Quản Lý Thời Gian Hiệu Quả"
              description="Tạo lịch học linh hoạt, cùng nhau duy trì thói quen học tập hiệu quả hơn."
            />
            <FeatureCard
              icon={<BookOpen className="w-10 h-10 text-purple-500" />}
              title="Chia Sẻ Tài Liệu & Kiến Thức"
              description="Đăng tải bài học, tài liệu hữu ích và cùng nhau giải đáp những câu hỏi khó."
            />
            <FeatureCard
              icon={<GraduationCap className="w-10 h-10 text-purple-500" />}
              title="Theo Dõi Tiến Độ Cùng Nhau"
              description="Cập nhật thành tích, so sánh kết quả với bạn bè và cùng nhau tiến bộ."
            />
            <FeatureCard
              icon={<Rocket className="w-10 h-10 text-purple-500" />}
              title="Chế Độ Tập Trung Học Nhóm"
              description="Tạo không gian học tập trực tuyến, tham gia học nhóm để nâng cao hiệu suất."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container px-6 mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-white">
            🚀 Do It Study – Nền tảng mạng xã hội học tập giúp bạn phát triển
            mỗi ngày!
          </h2>
          <button
            onClick={() => window.open("/doit-study-app.apk")}
            className="flex items-center gap-3 px-10 py-5 mx-auto font-semibold text-purple-900 transition-all transform bg-white rounded-full hover:scale-105 hover:bg-purple-50"
          >
            <Download className="w-6 h-6" />
            Bắt Đầu Ngay Thôi Nào
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 text-white bg-gray-900">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center mb-8 md:mb-0">
              <Target className="w-10 h-10 mr-3 text-purple-400" />
              <span className="text-3xl font-bold">Do It Study</span>
            </div>
            <div className="text-lg text-gray-400">
              © 2024 Do It Study. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ icon, number, text }) {
  return (
    <div className="p-8 transition-shadow bg-white shadow-xl rounded-2xl hover:shadow-2xl">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-purple-50 rounded-xl">{icon}</div>
        <div>
          <div className="text-3xl font-bold text-gray-900">{number}</div>
          <div className="text-gray-600">{text}</div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 transition-all bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center justify-center w-16 h-16 mb-6 bg-purple-50 rounded-xl">
        {icon}
      </div>
      <h3 className="mb-4 text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

export default App;
