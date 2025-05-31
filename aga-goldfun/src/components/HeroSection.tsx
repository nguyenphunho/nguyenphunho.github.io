import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-green-800 text-white py-20 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              TIẾP BƯỚC HÀNH TRÌNH TỰ DO TÀI CHÍNH CÙNG AGA & GOLDFUN
            </h1>
            <h2 className="text-xl md:text-2xl text-yellow-200 mb-6 font-light">
              Khám phá cơ hội đầu tư không rủi ro với công nghệ AI Lượng tử đột phá - Thu nhập thụ động ổn định mỗi tháng
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="https://members.goldfun24k.com/register" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
              >
                ĐĂNG KÝ NGAY
              </a>
              <a 
                href="#benefits" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg text-center transition-all duration-300"
              >
                TÌM HIỂU THÊM
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="/images/hero-chart.png" 
                alt="Biểu đồ tăng trưởng" 
                className="rounded-lg shadow-2xl max-w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-800 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <p className="text-sm uppercase">Lợi nhuận hàng tháng</p>
                  <p className="text-2xl font-bold text-yellow-300">3% - 8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg text-center">
            <p className="text-sm">Nhà đầu tư</p>
            <p className="text-2xl font-bold text-yellow-300">10,000+</p>
          </div>
          <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg text-center">
            <p className="text-sm">Khối lượng giao dịch</p>
            <p className="text-2xl font-bold text-yellow-300">1.5M+ Lot</p>
          </div>
          <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg text-center">
            <p className="text-sm">Lợi nhuận đã chia</p>
            <p className="text-2xl font-bold text-yellow-300">$5M+</p>
          </div>
          <div className="bg-blue-800 bg-opacity-50 p-4 rounded-lg text-center">
            <p className="text-sm">Tỷ lệ thành công</p>
            <p className="text-2xl font-bold text-yellow-300">99.9%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
