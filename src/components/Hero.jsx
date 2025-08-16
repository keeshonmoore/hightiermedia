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
        <source src="https://htmhero.s3.us-east-2.amazonaws.com/682c8f54e8d71046e6e2cc4e.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIASGB7L23G3KM2YJJI%2F20250816%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T032017Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLWVhc3QtMiJHMEUCIQCnqwafL5RWn5Qv%2FtqDjTvKyUJSe2rTFNwkiCbLRdgYHAIgI%2FCT%2F67PeJqM7EXeb7Ka2acscYmn5cO7L97bUrK%2FEJ0q1gIIbBAAGgwxNTA0NTY3NTE4MjEiDAFc5Jr4zUP8QBg5FyqzAqH7zF5xFAth%2FelGsmsGqAb0hX%2BS2EZTI%2FXYlPMy2lVh%2FGtT0SHc53yFKOpDHijR1GEXRCFUilNPtQ2rYI0p5F8SmAZnI7wzw3bXPZJpUEJvqZRNK0e9xehDB1t2mys9DWp5CMbxaxQPUNptpP4Pt3Bl4ckCtkjN%2FmAD4Lov1Aa%2F9cPjYjvWAci3RNU99PprvPWqmAAb0f%2Bl%2FAdY2wkXfoAkHcLOHw4SoXCS%2BWVZSB21ZmjurpZ15Br3IRGSnhrvIu4CXuv49e%2B9SGDWDbb0GoFUaG4bs4GsBB6glEB0GV1ktlg8xmnjlm5uA9b4OYsXBdjqwuRbVuHYniIzNl0khtO%2FDGdwKUveMP3Kl0XPnHPsDFhHVR3WrKmIfaroyfmunDZ8tGsw15Gn5TObQMa3pHICe5cw2er%2FxAY6rQKFL1OVkAHmF8OrIryE0kVXqTf6%2B2LT0sm9c1gXxcITqeG8sR4Fg3bJx96LCQEy162n0tY7KLFB4rWZXoxlmuPm4uj7%2B6eXX2FMDfqJeiWCYNVQwyzxvGRlVlZ8tMoTds6NWBu8S1CI2EEZ17TH372P1fVHqm06egDIIGwzgyg5x1TMMwBnbjKxOpWKc4p%2B07g79sk%2BUG%2BSgtE76JZ2KHw7fa89TdDeLDah5ZrrlBiE9IRotARF1TCesRjKi4BdGIvAuj312HRiOFMTxUkiH1MS4RJnQ5Tel0wJZ1mDNM8%2B9P0H6j2CIhFBbMYA9K3qjH4psSGK30jnwKHDrcdcUWPWkaOIrHizTp8HLH8Ux%2FFv75os0kSjwMF%2ByRcNIzx%2BWsLJX7TQA3Jpd2%2BdoC9A&X-Amz-Signature=df77dd96e40d22df7f31f4207d2c7366f6eacf7bf6961fea331d35ca3a5c2efe&X-Amz-SignedHeaders=host&response-content-disposition=inline" type="video/mp4" />
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