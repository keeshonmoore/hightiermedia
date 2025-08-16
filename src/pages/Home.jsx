import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import VideoGrid from '../components/VideoGrid';
import MVGrid from '../components/MVGrid'
import Stats from '../components/Stats';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Hero />
      <Feature />
      <VideoGrid />
      <MVGrid />
      <Stats />
      <CTA />
    </div>
  );
}