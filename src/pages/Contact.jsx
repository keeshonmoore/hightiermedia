import { CTASection } from '../components/ui/cta-with-rectangle';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto py-24 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 text-center animate-fade-in">
            Get in Touch with High Tier Media
          </h1>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
              Ready to bring your vision to life? Let’s hop on a Zoom call to discuss your goals, whether it’s boosting views, growing followers, or building a powerful personal brand. At High Tier Media, we prioritize energy and authenticity to create cinematic content that stands out.
            </p>
            <div className="bg-bh-dark-gray/10 rounded-xl shadow-apple p-8 animate-fade-in">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="block text-sm font-medium text-primary mb-2">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="rounded-xl border-bh-dark-gray/20 bg-bh-neutral-white/10 text-primary shadow-apple"
                      type="text"
                      aria-label="Your first name"
                      aria-required="true"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="block text-sm font-medium text-primary mb-2">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="rounded-xl border-bh-dark-gray/20 bg-bh-neutral-white/10 text-primary shadow-apple"
                      type="text"
                      aria-label="Your last name"
                      aria-required="true"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="instagram" className="block text-sm font-medium text-primary mb-2">
                    Instagram or Business Name
                  </Label>
                  <Input
                    id="instagram"
                    placeholder="Your Instagram or business name"
                    className="rounded-xl border-bh-dark-gray/20 bg-bh-neutral-white/10 text-primary shadow-apple"
                    type="text"
                    aria-label="Your Instagram or business name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    placeholder="Your email"
                    className="rounded-xl border-bh-dark-gray/20 bg-bh-neutral-white/10 text-primary shadow-apple"
                    type="email"
                    aria-label="Your email address"
                    aria-required="true"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    className="rounded-xl border-bh-dark-gray/20 bg-bh-neutral-white/10 text-primary shadow-apple"
                    type="tel"
                    aria-label="Your phone number"
                    aria-required="true"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="brandNeeds" className="block text-sm font-medium text-primary mb-2">
                    Brand Needs (1-2 Sentences) *
                  </Label>
                  <Textarea
                    id="brandNeeds"
                    placeholder="Tell us what your brand needs"
                    className="rounded-xl border-bh-dark-gray/20 bg-bh-neutral-white/10 text-primary shadow-apple min-h-[100px]"
                    aria-label="Your brand needs"
                    aria-required="true"
                    required
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-primary mb-2">
                    Ideal Budget
                  </Label>
                  <RadioGroup defaultValue="3.5k-5k" className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="1.5k-2k"
                        id="budget-1"
                        className="text-bh-orange"
                        aria-label="$1.5k-$2k Standard Package"
                      />
                      <Label htmlFor="budget-1" className="text-primary">
                        $1.5k-$2k (Standard Package)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="3.5k-5k"
                        id="budget-2"
                        className="text-bh-orange"
                        aria-label="$3.5k-$5k Most Popular Package"
                      />
                      <Label htmlFor="budget-2" className="text-primary flex items-center gap-2">
                        $3.5k-$5k
                        <Badge className="border-bh-orange text-bh-orange">Most Popular</Badge>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="7k-10k"
                        id="budget-3"
                        className="text-bh-orange"
                        aria-label="$7k-$10k I Need the Best Package"
                      />
                      <Label htmlFor="budget-3" className="text-primary">
                        $7k-$10k (I NEED THE BEST)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <Label className="block text-sm font-medium text-primary mb-2">
                    I’m Looking For (Check All That Apply)
                  </Label>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="photoVideo"
                        className="border-bh-dark-gray/20 data-[state=checked]:bg-bh-orange data-[state=checked]:border-bh-orange"
                        aria-label="Photo/Video Production"
                      />
                      <Label htmlFor="photoVideo" className="text-primary">
                        Photo/Video Production
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="socialMedia"
                        className="border-bh-dark-gray/20 data-[state=checked]:bg-bh-orange data-[state=checked]:border-bh-orange"
                        aria-label="Social Media Content"
                      />
                      <Label htmlFor="socialMedia" className="text-primary">
                        Social Media Content
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="branding"
                        className="border-bh-dark-gray/20 data-[state=checked]:bg-bh-orange data-[state=checked]:border-bh-orange"
                        aria-label="Branding/Consulting"
                      />
                      <Label htmlFor="branding" className="text-primary">
                        Branding/Consulting
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Button
                    className="rounded-xl bg-bh-orange text-white hover:bg-bh-orange-light shadow-apple transition-all duration-200"
                    aria-label="Submit contact form"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}