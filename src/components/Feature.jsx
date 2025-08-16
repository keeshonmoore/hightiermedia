import { Check } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Feature() {
  return (
    <section id="feature" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid border rounded-xl border-bh-dark-gray/20 p-8 grid-cols-1 gap-8 items-center lg:grid-cols-2 max-w-4xl mx-auto shadow-apple">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline" className="border-bh-orange text-bh-orange">YouTube Video</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-3xl lg:text-5xl tracking-tighter text-primary font-regular">
                  Build Your Personal Brand
                </h2>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Join Louie as he shares his journey from music videos to million-dollar digital products, revealing how to monetize your creativity and stay authentic.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-3 items-start lg:grid-cols-1 gap-6">
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-bh-orange" />
                <div className="flex flex-col gap-1">
                  <p>Monetize Early</p>
                  <p className="text-muted-foreground text-sm">
                    Start earning with as few as 100 subscribers.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-bh-orange" />
                <div className="flex flex-col gap-1">
                  <p>Stay Authentic</p>
                  <p className="text-muted-foreground text-sm">
                    Build a brand that evolves with your passions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-bh-orange" />
                <div className="flex flex-col gap-1">
                  <p>Grow Your Audience</p>
                  <p className="text-muted-foreground text-sm">
                    Leverage personal branding to stand out.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-bh-dark-gray rounded-xl aspect-video overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/lmccfW0NqvU"
              title="High Tier Media YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}