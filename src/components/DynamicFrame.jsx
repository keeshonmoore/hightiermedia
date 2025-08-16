const frames = [
  {
    id: 1,
    video: 'https://www.youtube.com/embed/lmccfW0NqvU', // Placeholder YouTube video
    title: 'High Tier Media Video 1',
  },
  {
    id: 2,
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder (replace with your video)
    title: 'High Tier Media Video 2',
  },
  {
    id: 3,
    video: 'https://www.youtube.com/embed/3tmd-ClpJxA', // Placeholder (replace with your video)
    title: 'High Tier Media Video 3',
  },
  {
    id: 4,
    video: 'https://www.youtube.com/embed/9bZkp7q19f0', // Placeholder (replace with your video)
    title: 'High Tier Media Video 4',
  },
  {
    id: 5,
    video: 'https://www.youtube.com/embed/zpOULjyy-n8', // Placeholder (replace with your video)
    title: 'High Tier Media Video 5',
  },
  {
    id: 6,
    video: 'https://www.youtube.com/embed/J---aiyznGQ', // Placeholder (replace with your video)
    title: 'High Tier Media Video 6',
  },
];

export default function DynamicFrame() {
  return (
    <section id="vault" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl tracking-tighter text-primary font-regular mb-8 text-center">
          Podcast
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {frames.map((frame) => (
            <div
              key={frame.id}
              className="relative aspect-video rounded-xl shadow-apple overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <iframe
                src={frame.video}
                title={frame.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}