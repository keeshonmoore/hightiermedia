import { useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { MorphingText } from './magicui/morphing-text';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Allow animation to trigger multiple times
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background py-12 overflow-hidden"
      ref={ref}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source src="https://htmhero.s3.us-east-2.amazonaws.com/682c8f54e8d71046e6e2cc4e.mp4" type="video/mp4" />
      </video>
      {/* Overlay for Text Readability */}
      <div className="absolute inset-0 bg-bh-dark-gray/50 z-10" aria-hidden="true"></div>

      {/* Text Content */}
      <div className="container mx-auto px-4 flex flex-col items-center text-center z-20">
        <h1
          className={`text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight flex flex-wrap justify-center gap-2 ${
            inView ? 'animate-scroll-in' : 'opacity-0'
          }`}
        >
          <span className="animate-fade-in">TRANSFORMING</span>
          <MorphingText
            texts={["DREAMS", "THOUGHTS", "FEELINGS"]}
            className="text-4xl md:text-6xl font-bold text-primary animate-fade-in-delay-1"
          />
          <span className="animate-fade-in-delay-2">INTO REALITY</span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Input
            placeholder="Enter your email"
            className="rounded-xl border-secondary/20 bg-bh-neutral-white/10 text-primary shadow-apple max-w-xs"
            type="email"
            aria-label="Email for consultation"
          />
          <Button
            className="rounded-xl bg-bh-orange text-white hover:bg-bh-orange-light shadow-apple transition-all duration-200"
          >
            Book a Zoom Call
          </Button>
        </div>
      </div>
    </section>
  );
}