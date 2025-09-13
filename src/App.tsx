import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TeachingAchievements from './components/TeachingAchievements';
import BestSellers from './components/BestSellers';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <Header />
      <main>
        <HeroSection />
        <TeachingAchievements />
        <BestSellers />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}