import CountAnimation from './ui/count-animation';

export default function Stats() {
  return (
    <section id="stats" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <hr className="border-bh-dark-gray/20 mb-8 max-w-4xl mx-auto" aria-hidden="true" />
        <h2 className="text-3xl lg:text-5xl tracking-tighter text-primary font-regular mb-8 text-center">
          Our Impact
        </h2>
        <hr className="border-bh-dark-gray/20 mb-8 max-w-4xl mx-auto" aria-hidden="true" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-apple bg-bh-dark-gray/10 md:border-r md:border-bh-dark-gray/20">
            <div className="flex items-baseline">
              <CountAnimation
                number={100}
                className="text-3xl lg:text-5xl font-semibold text-primary"
                aria-label="Over 100 music videos created"
              />
              <span className="text-3xl lg:text-5xl font-semibold text-bh-orange">+</span>
            </div>
            <p className="text-lg text-muted-foreground mt-2">Music Videos</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-apple bg-bh-dark-gray/10 md:border-r md:border-bh-dark-gray/20">
            <div className="flex items-baseline">
              <CountAnimation
                number={17}
                className="text-3xl lg:text-5xl font-semibold text-primary"
                aria-label="Over 17 million views"
              />
              <span className="text-3xl lg:text-5xl font-semibold text-bh-orange">M+</span>
            </div>
            <p className="text-lg text-muted-foreground mt-2">Views</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-apple bg-bh-dark-gray/10">
            <div className="flex items-baseline">
              <CountAnimation
                number={50}
                className="text-3xl lg:text-5xl font-semibold text-primary"
                aria-label="Over 50 clients served"
              />
              <span className="text-3xl lg:text-5xl font-semibold text-bh-orange">+</span>
            </div>
            <p className="text-lg text-muted-foreground mt-2">Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}