import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="cta" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-900 to-green-800 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              BẮT ĐẦU HÀNH TRÌNH TỰ DO TÀI CHÍNH NGAY HÔM NAY!
            </h2>
            <p className="text-lg mb-6">
              Đăng ký và nạp tối thiểu 1.000 USDT để trải nghiệm hệ thống giao dịch AI Lượng tử không rủi ro và bắt đầu nhận lợi nhuận ổn định hàng tháng.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Bảo mật thông tin tuyệt đối</span>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Hỗ trợ kỹ thuật 24/7</span>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Rút tiền nhanh chóng</span>
              </div>
              <div className="flex items-start">
                <svg className="h-6 w-6 text-green-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Minh bạch trong mọi giao dịch</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://members.goldfun24k.com/register" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
              >
                ĐĂNG KÝ GOLDFUN
              </a>
              <a 
                href="https://premium.theagalliance.asia/register/5GNPYQBW" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg text-center transition-all duration-300"
              >
                ĐĂNG KÝ AGA
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-center">Đăng Ký Nhận Tư Vấn</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Họ và tên</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                    placeholder="Nhập địa chỉ email của bạn"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Số điện thoại</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white placeholder-gray-300"
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </div>
                <div>
                  <label htmlFor="investment" className="block text-sm font-medium mb-1">Mức đầu tư dự kiến</label>
                  <select 
                    id="investment" 
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                  >
                    <option value="1000">1.000 USD</option>
                    <option value="3000">3.000 USD</option>
                    <option value="10000" selected>10.000 USD</option>
                    <option value="30000">30.000 USD</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
                >
                  ĐĂNG KÝ NHẬN TƯ VẤN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
