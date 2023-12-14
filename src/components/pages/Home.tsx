import { HeaderSection } from '../demo/HeaderSection';
import { Hero } from '../demo/Hero';
import { Navbar } from '../demo/Navbar';

export const HomePage = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <Hero />
      <HeaderSection />
    </div>
  );
};
