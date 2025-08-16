import { VideoPlayer } from './ui/video-thumbnail-player';
import { Button } from './ui/button';

const videos = [
  {
    videoUrl: 'https://youtu.be/embed/CR4kOa-_9yA',
    thumbnailUrl: 'https://i.ytimg.com/vi/CR4kOa-_9yA/maxresdefault.jpg',
    title: 'Personal Branding',
    description: 'Learn how to build a powerful personal brand with Louie.',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/dNzJzDgi5Jc?si=RRLeqno0RkUJYGWo',
    thumbnailUrl: 'https://i.ytimg.com/vi/dNzJzDgi5Jc/maxresdefault.jpg',
    title: 'Music Video Showcase',
    description: 'Explore our latest music video creations.',
  },
  {
    videoUrl: 'https://www.youtube.com/embed/j3wO7k7rdsE?autoplay=1',
    thumbnailUrl: 'https://i.ytimg.com/vi/j3wO7k7rdsE/maxresdefault.jpg',
    title: 'Creative Insights',
    description: 'Dive into the creative process behind our work.',
  },
    {
    videoUrl: 'https://www.youtube.com/embed/xRsVIPBkLQM?autoplay=1',
    thumbnailUrl: 'https://i.ytimg.com/vi/xRsVIPBkLQM/maxresdefault.jpg',
    title: 'Creative Insights',
    description: 'Dive into the creative process behind our work.',
  }
];

export default function MVGrid() {
  return (
    <section id="vault" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-5xl tracking-tighter text-primary font-regular mb-8 text-center">
          Music Videos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <VideoPlayer
              key={index}
              thumbnailUrl={video.thumbnailUrl}
              videoUrl={video.videoUrl}
              title={video.title}
              description={video.description}
              className="rounded-xl shadow-apple"
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            className="rounded-xl bg-bh-orange text-white hover:bg-bh-orange-light shadow-apple transition-all duration-200"
            asChild
          >
            <a href="/vault" aria-label="View all videos">View All</a>
          </Button>
        </div>
      </div>
    </section>
  );
}