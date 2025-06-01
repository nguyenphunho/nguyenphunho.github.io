// React is used implicitly for JSX
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import AboutGoldfunSection from './components/AboutGoldfunSection';
import AITechnologySection from './components/AITechnologySection';
import IncomeModelSection from './components/IncomeModelSection';
import RegistrationStepsSection from './components/RegistrationStepsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="bg-blue-900 text-white py-4 px-4 md:px-8 lg:px-16 sticky top-0 z-50">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <div className="text-xl font-bold">AGA & GOLDFUN</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#benefits" className="hover:text-yellow-300 transition-colors duration-300">Lợi Ích</a>
            <a href="#about" className="hover:text-yellow-300 transition-colors duration-300">Về GOLDFUN</a>
            <a href="#technology" className="hover:text-yellow-300 transition-colors duration-300">Công Nghệ AI</a>
            <a href="#income" className="hover:text-yellow-300 transition-colors duration-300">Thu Nhập</a>
            <a href="#registration" className="hover:text-yellow-300 transition-colors duration-300">Đăng Ký</a>
            <a href="#faq" className="hover:text-yellow-300 transition-colors duration-300">FAQ</a>
          </nav>
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <BenefitsSection />
        <AboutGoldfunSection />
        <AITechnologySection />
        <IncomeModelSection />
        <RegistrationStepsSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300 z-50"
        aria-label="Back to top"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}

export default App;
