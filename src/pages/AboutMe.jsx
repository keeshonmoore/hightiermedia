import { CTASection } from '../components/ui/cta-with-rectangle';
import { TextReveal } from '../components/magicui/text-reveal';

export default function AboutMe() {
  return (
    <div className="min-h-screen py-12 bg-background font-sans">
      <section id="about-me" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 text-center animate-fade-in">
              Meet Louie: Crafting Cinematic Stories
            </h1>
            <img
              src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TP9luKW0bbRWlGJ6Rb5y/media/675bb5e21095252d675a53bb.jpeg"
              alt="High Tier Media studio"
              className="w-full max-w-md rounded-xl shadow-apple object-cover mx-auto animate-fade-in mb-12"
            />
          </div>
          <div className="space-y-16">
            {/* First Paragraph: Image Left, Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-16">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TP9luKW0bbRWlGJ6Rb5y/media/67d1c991e868189c2ecb23f4.jpeg"
                alt="Video editing setup"
                className="w-full max-w-md rounded-xl shadow-apple object-cover animate-fade-in"
              />
              <div className="max-w-3xl mx-auto text-center">
                <TextReveal className="text-lg text-muted-foreground mb-16">
                  I’m Louie Cannoy, the heart behind High Tier Media. I started editing videos at 12, turning a childhood passion into a career by 17. Over the years, I’ve worked with celebrities and high-level entrepreneurs, creating YouTube videos, podcast content, music videos, and more.
                </TextReveal>
              </div>
            </div>
            {/* Second Paragraph: Text Left, Image Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-6">
              <div className="max-w-3xl mx-auto text-center md:order-first">
                <TextReveal className="text-lg text-muted-foreground mb-6">
                  Self-taught and driven by trends, I learned the hard way that value is key. Working with top clients showed me the importance of building lasting relationships. I don’t just take on any project—energy matters more than money.
                </TextReveal>
              </div>
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TP9luKW0bbRWlGJ6Rb5y/media/67d1c98f3cebedd7e330c4da.jpeg"
                alt="Behind-the-scenes video production"
                className="w-full max-w-md rounded-xl shadow-apple object-cover animate-fade-in"
              />
            </div>
            {/* Third Paragraph: Image Left, Text Right */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-16">
              <img
                src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/TP9luKW0bbRWlGJ6Rb5y/media/67d1c98f6028545a0cbd4c7c.jpeg"
                alt="Creative content creation"
                className="w-full max-w-md rounded-xl shadow-apple object-cover animate-fade-in"
              />
              <div className="max-w-3xl mx-auto text-center">
                <TextReveal className="text-lg text-muted-foreground mb-6">
                  Before we collaborate, we’ll hop on a Zoom call to align on your vision, whether it’s boosting views, growing followers, or building a personal brand. At High Tier Media, we craft content that’s authentic, cinematic, and impactful. Let’s create something extraordinary together.
                </TextReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl tracking-tighter text-primary font-regular mb-8 text-center animate-fade-in">
            Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-apple bg-bh-dark-gray/10 md:border-r md:border-bh-dark-gray/20 animate-fade-in">
              <p className="text-3xl lg:text-5xl font-semibold text-primary">Since Age 12</p>
              <p className="text-lg text-muted-foreground mt-2">Editing Videos</p>
              <p className="text-sm text-bh-orange">Passion turned profession</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-apple bg-bh-dark-gray/10 md:border-r md:border-bh-dark-gray/20 animate-fade-in">
              <p className="text-3xl lg:text-5xl font-semibold text-primary">Celebrity Clients</p>
              <p className="text-lg text-muted-foreground mt-2">High-Level Collaborations</p>
              <p className="text-sm text-bh-orange">Worked with industry leaders</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-apple bg-bh-dark-gray/10 animate-fade-in">
              <p className="text-3xl lg:text-5xl font-semibold text-primary">Authentic Bonds</p>
              <p className="text-lg text-muted-foreground mt-2">Client Relationships</p>
              <p className="text-sm text-bh-orange">Energy over money</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <CTASection
            badge={{
              text: 'Get Started',
              className: 'border-bh-orange text-bh-orange',
            }}
            title="Let’s Create Your Vision"
            description="Book a Zoom call with Louie to discuss your goals and bring your brand to life with cinematic content."
            action={{
              text: 'Book a Zoom Call',
              href: '#contact',
              variant: 'default',
              className: 'bg-bh-orange text-white hover:bg-bh-orange-light rounded-xl shadow-apple transition-all duration-200',
              'aria-label': 'Book a Zoom call with High Tier Media',
            }}
            className="max-w-4xl mx-auto text-primary shadow-apple rounded-xl"
          />
        </div>
      </section>
    </div>
  );
}