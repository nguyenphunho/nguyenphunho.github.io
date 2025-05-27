import React from 'react';

const AboutGoldfunSection: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          GOLDFUN - Nhà Môi Giới Uy Tín Hàng Đầu Châu Á
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img 
              src="/images/goldfun-office-new.png" 
              alt="Trụ sở GOLDFUN" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Xếp hạng WikiFX</p>
                <p className="text-2xl font-bold text-blue-900">7.37</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Xếp hạng tín dụng</p>
                <p className="text-2xl font-bold text-blue-900">BB</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Xếp hạng bảo mật</p>
                <p className="text-2xl font-bold text-blue-900">82</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-600">Thành lập</p>
                <p className="text-2xl font-bold text-blue-900">2016</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Thành viên chính thức của HKGX</h3>
              <p className="text-gray-700">
                GOLDFUN là thành viên chính thức của Hiệp hội Giao dịch Vàng Bạc Hồng Kông (HKGX) với giấy phép đăng ký thành viên số 064, loại A1 và là Cơ quan đăng ký loại A của Cục Hải quan và Thuế tiêu thụ đặc biệt Hồng Kông.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6 border-l-4 border-yellow-600">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Danh hiệu và giải thưởng</h3>
              <p className="text-gray-700">
                GOLDFUN đã được trao nhiều danh hiệu cao quý như "Nhà giao dịch kim loại quý uy tín nhất Châu Á" và "Best High Frequency Trade Services Broker in Asia", khẳng định vị thế hàng đầu trong ngành.
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Dịch vụ đa dạng</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Giao dịch tự động với công nghệ AI</li>
                <li>Giao dịch quỹ PAMM</li>
                <li>Hàng hóa vật chất</li>
                <li>Nền tảng MT5 tiên tiến</li>
                <li>Hỗ trợ kỹ thuật 24/7</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGoldfunSection;
