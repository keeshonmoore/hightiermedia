import { CTASection } from '../components/ui/cta-with-rectangle';
import TabbedVideoGrid from '../components/TabbedVideoGrid';

export default function Vault() {
  return (
    <>
      <section id="vault" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 text-center animate-fade-in">
            The Vault
          </h1>
          <TabbedVideoGrid />
        </div>
      </section>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <CTASection
            badge={{
              text: 'Get Started',
              className: 'border-bh-orange text-bh-orange',
            }}
            title="Ready to Create Something Extraordinary?"
            description="Book a Zoom call with Louie to align on your vision and craft cinematic content that elevates your brand."
            action={{
              text: 'Book a Zoom Call',
              href: '/contact',
              variant: 'default',
              className: 'bg-bh-orange text-white hover:bg-bh-orange-light rounded-xl shadow-apple transition-all duration-200',
              'aria-label': 'Book a Zoom call with High Tier Media',
            }}
            className="max-w-4xl mx-auto text-primary shadow-apple rounded-xl"
          />
        </div>
      </section>
    </>
  );
}