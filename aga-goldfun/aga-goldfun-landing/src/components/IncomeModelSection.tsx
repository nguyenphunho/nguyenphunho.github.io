import React, { useState } from 'react';

const IncomeModelSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profit' | 'lot'>('profit');
  
  return (
    <section id="income" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
          Mô Hình Thu Nhập Kép Hấp Dẫn
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          AGA cung cấp hai nguồn thu nhập chính cho nhà đầu tư, giúp tối đa hóa lợi nhuận và tạo dòng tiền ổn định hàng tháng.
        </p>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="flex border-b">
            <button 
              className={`flex-1 py-4 px-6 text-center font-semibold ${activeTab === 'profit' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('profit')}
            >
              Chia Sẻ Lợi Nhuận Giao Dịch
            </button>
            <button 
              className={`flex-1 py-4 px-6 text-center font-semibold ${activeTab === 'lot' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveTab('lot')}
            >
              Chia Sẻ Lot Giao Dịch
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'profit' ? (
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <div className="relative w-64 h-64 mx-auto">
                    <div className="absolute inset-0 rounded-full bg-blue-100"></div>
                    <div className="absolute top-0 bottom-0 left-0 right-1/2 rounded-l-full bg-blue-600"></div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                      <div className="bg-white rounded-full w-32 h-32 flex items-center justify-center shadow-lg">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Tỷ lệ chia</p>
                          <p className="text-2xl font-bold text-blue-900">50/50</p>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1/4 -left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">Hệ thống AGA</div>
                    <div className="absolute top-1/4 -right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">Nhà đầu tư</div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4 text-blue-900">Chia Sẻ Lợi Nhuận Công Bằng</h3>
                  <p className="text-gray-700 mb-4">
                    Hệ thống AGA áp dụng mô hình PAMM (Mô-đun quản lý phân bổ theo tỷ lệ phần trăm) để cung cấp dịch vụ quản lý đầu tư. Sau khi được người dùng ủy quyền, hệ thống giao dịch có thể tự động thực hiện giao dịch cho người dùng và phân phối lợi nhuận theo tỷ lệ.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Tỷ lệ giao dịch định lượng hàng tháng: 3% - 8%</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Phân chia lợi nhuận: 50% cho nhà đầu tư, 50% cho hệ thống</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Thanh toán tự động vào tài khoản của bạn</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-blue-900 text-white">
                        <th className="py-3 px-4 text-left">Mức đầu tư</th>
                        <th className="py-3 px-4 text-left">Chia sẻ/lot</th>
                        <th className="py-3 px-4 text-left">Khối lượng ước tính</th>
                        <th className="py-3 px-4 text-left">Thu nhập lot/tháng</th>
                        <th className="py-3 px-4 text-left">Thu nhập lợi nhuận/tháng</th>
                        <th className="py-3 px-4 text-left">Tổng thu nhập/tháng</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">1.000 USD</td>
                        <td className="py-3 px-4">0,25 USD</td>
                        <td className="py-3 px-4">150 lots</td>
                        <td className="py-3 px-4">38 USD</td>
                        <td className="py-3 px-4">30 USD</td>
                        <td className="py-3 px-4 font-bold text-green-600">68 USD</td>
                      </tr>
                      <tr className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">3.000 USD</td>
                        <td className="py-3 px-4">0,28 USD</td>
                        <td className="py-3 px-4">450 lots</td>
                        <td className="py-3 px-4">126 USD</td>
                        <td className="py-3 px-4">90 USD</td>
                        <td className="py-3 px-4 font-bold text-green-600">216 USD</td>
                      </tr>
                      <tr className="border-b bg-blue-50 hover:bg-blue-100">
                        <td className="py-3 px-4 font-bold">10.000 USD</td>
                        <td className="py-3 px-4">0,28 USD</td>
                        <td className="py-3 px-4">1.500 lots</td>
                        <td className="py-3 px-4">420 USD</td>
                        <td className="py-3 px-4">300 USD</td>
                        <td className="py-3 px-4 font-bold text-green-600">720 USD</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4">30.000 USD</td>
                        <td className="py-3 px-4">0,30 USD</td>
                        <td className="py-3 px-4">4.500 lots</td>
                        <td className="py-3 px-4">1.350 USD</td>
                        <td className="py-3 px-4">900 USD</td>
                        <td className="py-3 px-4 font-bold text-green-600">2.250 USD</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                  <p className="text-gray-700">
                    <span className="font-bold">Lưu ý:</span> Đối với tài khoản giao dịch trị giá 10.000 USD, khối lượng giao dịch trung bình hàng tháng là khoảng 1.500 lot, tương đương với số tiền trung bình từ 500 USD đến 800 USD.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="https://members.goldfun24k.com/register" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
          >
            BẮT ĐẦU ĐẦU TƯ NGAY
          </a>
        </div>
      </div>
    </section>
  );
};

export default IncomeModelSection;
