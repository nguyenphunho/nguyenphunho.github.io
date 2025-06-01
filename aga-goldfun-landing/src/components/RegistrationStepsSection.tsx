import React from 'react';

const RegistrationStepsSection: React.FC = () => {
  return (
    <section id="registration" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
          Quy Trình Đăng Ký Và Ký Quỹ Đơn Giản
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Chỉ với 4 bước đơn giản, bạn có thể bắt đầu hành trình đầu tư và nhận lợi nhuận ổn định hàng tháng.
        </p>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>
          
          {/* Step 1 */}
          <div className="relative mb-12 md:mb-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Bước 1: Đăng ký sàn GOLDFUN và KYC tài khoản</h3>
                <p className="text-gray-600 mb-4">
                  Tải app và đăng ký với mã giới thiệu: <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">5GNPYQBW</span> hoặc đăng ký qua link.
                </p>
                <a 
                  href="https://members.goldfun24k.com/register" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                >
                  Đăng Ký GOLDFUN
                </a>
              </div>
              
              <div className="md:w-12 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10">1</div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <a 
                    href="https://www.youtube.com/shorts/F_EaruzWNIU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Xem video hướng dẫn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative mb-12 md:mb-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-2">
                    Sử dụng cùng mã giới thiệu để đảm bảo kết nối tài khoản chính xác.
                  </p>
                </div>
              </div>
              
              <div className="md:w-12 flex justify-center order-0 md:order-2">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10">2</div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Bước 2: Đăng ký quỹ AGA</h3>
                <p className="text-gray-600 mb-4">
                  Tải app và đăng ký với mã giới thiệu: <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">5GNPYQBW</span> hoặc đăng ký qua link.
                </p>
                <a 
                  href="https://premium.theagalliance.asia/register/5GNPYQBW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                >
                  Đăng Ký AGA
                </a>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative mb-12 md:mb-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Bước 3: Kết nối tài khoản GOLDFUN - AGA</h3>
                <p className="text-gray-600 mb-4">
                  Kết nối hai tài khoản để bắt đầu nhận lợi nhuận từ hệ thống giao dịch AI.
                </p>
              </div>
              
              <div className="md:w-12 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10">3</div>
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <a 
                    href="https://www.youtube.com/watch?v=zAKNaE95H9w" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Xem video hướng dẫn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <a 
                    href="https://www.youtube.com/watch?v=ZqqkhCSjkWU" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Xem video hướng dẫn
                  </a>
                </div>
              </div>
              
              <div className="md:w-12 flex justify-center order-0 md:order-2">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl z-10">4</div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                <h3 className="text-xl font-bold mb-2 text-blue-900">Bước 4: Nạp tiền ký quỹ giao dịch và nhận lợi nhuận</h3>
                <p className="text-gray-600 mb-4">
                  Nạp tối thiểu 1.000 USDT để bắt đầu nhận lợi nhuận từ hệ thống giao dịch AI.
                </p>
                <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-gray-700 text-sm">
                    <span className="font-bold">Khuyến nghị:</span> Nạp 10.000 USDT để tối ưu lợi nhuận với mức thu nhập khoảng 720 USD/tháng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="https://members.goldfun24k.com/register" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            BẮT ĐẦU NGAY HÔM NAY
          </a>
          <p className="mt-4 text-gray-600">
            Tham gia nhóm hỗ trợ: <a href="https://www.facebook.com/groups/727999879647695" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Nhóm Facebook</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegistrationStepsSection;
