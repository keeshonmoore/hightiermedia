import { CTASection } from './ui/cta-with-rectangle';

export default function CTA() {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <CTASection
          badge={{
            text: 'Contact Us',
            className: 'border-bh-orange text-bh-orange',
          }}
          title="Ready to Elevate Your Brand?"
          description="Book a Zoom call with Louie to discuss your vision and create cinematic content that stands out."
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
  );
}