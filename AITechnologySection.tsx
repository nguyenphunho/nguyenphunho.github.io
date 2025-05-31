import React from 'react';

const AITechnologySection: React.FC = () => {
  return (
    <section id="technology" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          AGA - CÔNG NGHỆ AI LƯỢNG TỬ ĐỘT PHÁ
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-400">Không Có Rủi Ro Trong Quá Trình Thanh Khoản</h3>
                <p className="text-gray-300 mb-4">
                  AGA là một trong số ít hệ thống giao dịch trên thị trường sẽ không bao giờ bị mất khả năng thanh khoản. Bằng cách áp dụng hệ thống giao dịch và phân tích tự động AI được xây dựng theo thuật toán lượng tử, nó sẽ loại bỏ nguyên nhân gốc rễ của rủi ro do đòn bẩy cao trong các giao dịch tài chính gây ra.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Thời gian giữ lệnh trung bình &lt;30 giây</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tích hợp điểm mạnh của các nhà cung cấp thanh khoản khác nhau</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>AI bảo hiểm rủi ro thông minh</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 gap-6">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-3 text-blue-300">Giao dịch siêu lượng tử theo xu thế</h3>
              <p className="text-gray-300">
                Với hệ thống AI lượng tử cùng 1 thời điểm có thể xử lý ở điểm 0 và 1, khác với các hệ thống AI thông thường cùng lúc chỉ có thể xử lý hoặc 0 hoặc 1. AGA AI đột phá vượt trội trong việc nhận biết các xu hướng giao dịch sáng suốt.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-900 to-green-800 p-6 rounded-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-3 text-green-300">Liên kết lượng tử</h3>
              <p className="text-gray-300">
                Liên kết lượng tử có thể thực hiện nhiều lệnh lượng tử, trong đó sự thay đổi trạng thái của một lệnh lượng tử sẽ tác động nhanh chóng đến các lệnh lượng tử tương quan khác, giúp AGA AI nhanh chóng nắm bắt các cơ hội giao dịch chênh lệch giá.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900 to-purple-800 p-6 rounded-lg transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-3 text-purple-300">Đo lường Trạng thái Lượng Tử</h3>
              <p className="text-gray-300">
                Khi một lệnh lượng tử được đo, nó sẽ rơi về một trong các trạng thái xác định của nó. Trước khi đo, nó có thể tồn tại đồng thời ở nhiều trạng thái, giúp hệ thống AGA không có đối thủ trong các xu hướng thị trường một chiều.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITechnologySection;
