import React, { useState } from 'react';

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  const faqs = [
    {
      question: "AGA có thực sự an toàn và không có rủi ro?",
      answer: "Hệ thống AGA sử dụng công nghệ AI Lượng tử với thời gian giữ lệnh trung bình dưới 30 giây, loại bỏ cơ bản nguy cơ xảy ra các sự kiện bất ngờ trong giao dịch. Hệ thống cũng tích hợp nhiều nguồn thanh khoản và có quỹ bảo vệ nhà đầu tư, trích 0,01$ từ mỗi giao dịch tần suất cao để bảo vệ trước mọi rủi ro có thể xảy ra."
    },
    {
      question: "Tôi có thể rút tiền bất cứ lúc nào không?",
      answer: "Có, sau khi hoàn tất xác minh KYC, tiền giao dịch được lưu trữ và khóa an toàn trong giờ giao dịch hoạt động, với quyền truy cập rút tiền và gửi tiền bất cứ lúc nào trong khoảng thời gian không giao dịch. Hệ thống đảm bảo thanh khoản linh hoạt cho nhà đầu tư."
    },
    {
      question: "Mức đầu tư tối thiểu là bao nhiêu?",
      answer: "Mức đầu tư tối thiểu là 1.000 USD, với mức này bạn có thể bắt đầu nhận lợi nhuận từ hệ thống giao dịch AI. Tuy nhiên, chúng tôi khuyến nghị mức đầu tư 10.000 USD để tối ưu lợi nhuận, với thu nhập ước tính khoảng 720 USD/tháng (bao gồm cả chia sẻ lợi nhuận và chia sẻ lot giao dịch)."
    },
    {
      question: "Làm thế nào để tôi theo dõi giao dịch của mình?",
      answer: "Người dùng có thể đăng nhập vào tài khoản giao dịch AI của mình trong thời gian thực, theo dõi hoạt động giao dịch và thực hiện giao dịch ngay lập tức. Hệ thống đảm bảo tính minh bạch 100% trong mọi giao dịch."
    },
    {
      question: "Tỷ lệ lợi nhuận hàng tháng là bao nhiêu?",
      answer: "Tỷ lệ giao dịch định lượng hàng tháng của AGA AI dự kiến sẽ nằm trong khoảng từ 3% đến 8%. Ngoài ra, bạn còn nhận được thu nhập từ chia sẻ lot giao dịch, tùy thuộc vào mức đầu tư của bạn (từ 0,25 USD đến 0,30 USD/lot)."
    },
    {
      question: "Tôi cần làm gì nếu gặp khó khăn trong quá trình đăng ký?",
      answer: "Bạn có thể tham gia nhóm hỗ trợ trên Facebook để được hỗ trợ trực tiếp từ cộng đồng và đội ngũ kỹ thuật. Ngoài ra, các video hướng dẫn chi tiết cho từng bước đăng ký và kết nối tài khoản cũng được cung cấp để giúp bạn thực hiện quá trình một cách dễ dàng."
    }
  ];
  
  return (
    <section id="faq" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Câu Hỏi Thường Gặp
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-blue-900">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${openItem === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`px-6 pb-4 transition-all duration-300 ease-in-out ${openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
