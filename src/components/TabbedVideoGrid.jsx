import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { VideoPlayer } from './ui/video-thumbnail-player';
import { Button } from './ui/button';

const videos = {
  podcast: [
    {
      videoUrl: 'https://www.youtube.com/embed/hkeUweT1nQw?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/hkeUweT1nQw/maxresdefault.jpg',
      title: 'Personal Branding',
      description: 'Learn how to build a powerful personal brand with Louie.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/PL0GImEq7Y0?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/PL0GImEq7Y0/maxresdefault.jpg',
      title: 'Music Video Showcase',
      description: 'Explore our latest music video creations.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/CxNyj-rCOCo?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/CxNyj-rCOCo/maxresdefault.jpg',
      title: 'Creative Insights',
      description: 'Dive into the creative process behind our work.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/kBomxn8A5tA?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/kBomxn8A5tA/maxresdefault.jpg',
      title: 'Creative Insights',
      description: 'Dive into the creative process behind our work.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/C7beC8QUkG4?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/C7beC8QUkG4/maxresdefault.jpg',
      title: 'Digital Products',
      description: 'Monetize your creativity with digital products.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/y1eSzuhTpwQ?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/y1eSzuhTpwQ/maxresdefault.jpg',
      title: 'Audience Growth',
      description: 'Strategies to grow your audience effectively.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/lmM0QADLlNI?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/lmM0QADLlNI/maxresdefault.jpg',
      title: 'Content Creation',
      description: 'Tips for creating compelling content.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/roS0lx43i_0?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/roS0lx43i_0/maxresdefault.jpg',
      title: 'Brand Building',
      description: 'Craft a brand that resonates with your audience.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/MEv6qLDOFWw?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/MEv6qLDOFWw/maxresdefault.jpg',
      title: 'Video Editing Tips',
      description: 'Master video editing with High Tier Media.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/kBe08DuND_I?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/kBe08DuND_I/maxresdefault.jpg',
      title: 'Creative Storytelling',
      description: 'Tell stories that captivate and inspire.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/utuzt8eDwVE?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/utuzt8eDwVE/maxresdefault.jpg',
      title: 'Monetization Strategies',
      description: 'Turn your passion into profit.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/CUM3zV8yppI?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/CUM3zV8yppI/maxresdefault.jpg',
      title: 'Content Authenticity',
      description: 'Stay true to your creative vision.',
    },
  ],
  musicVideos: [
    {
      videoUrl: 'https://www.youtube.com/embed/R6mpX7pUXqw?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/R6mpX7pUXqw/maxresdefault.jpg',
      title: 'Music Video 1',
      description: 'A cinematic music video showcasing our creative vision.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/j3wO7k7rdsE?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/j3wO7k7rdsE/maxresdefault.jpg',
      title: 'Music Video 2',
      description: 'High-energy visuals for a top artist.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/dNzJzDgi5Jc?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/dNzJzDgi5Jc/maxresdefault.jpg',
      title: 'Music Video 3',
      description: 'Story-driven content that captivates.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/Ri9li5r74ps?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/Ri9li5r74ps/hqdefault.jpg',
      title: 'Music Video 4',
      description: 'Bold and vibrant music video production.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/CR4kOa-_9yA?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/CR4kOa-_9yA/maxresdefault.jpg',
      title: 'Music Video 5',
      description: 'Crafting iconic visuals for music artists.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/xRsVIPBkLQM?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/xRsVIPBkLQM/maxresdefault.jpg',
      title: 'Music Video 6',
      description: 'Elevating music with cinematic storytelling.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/UK1wzHAStEs?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/UK1wzHAStEs/maxresdefault.jpg',
      title: 'Music Video 7',
      description: 'Dynamic visuals for a global audience.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/iDzWdM2XPBs?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/iDzWdM2XPBs/hqdefault.jpg',
      title: 'Music Video 8',
      description: 'Creative direction for chart-topping hits.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/gtszyZFYkcI?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/gtszyZFYkcI/maxresdefault.jpg',
      title: 'Music Video 9',
      description: 'Authentic storytelling through video.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/4smDxFySELw?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/4smDxFySELw/hqdefault.jpg',
      title: 'Music Video 10',
      description: 'High-impact visuals for music lovers.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/drMlu752bVk?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/drMlu752bVk/hqdefault.jpg',
      title: 'Music Video 11',
      description: 'Crafting memorable music video moments.',
    },
    {
      videoUrl: 'https://www.youtube.com/embed/TClGGBbt3JI?autoplay=1',
      thumbnailUrl: 'https://i.ytimg.com/vi/TClGGBbt3JI/maxresdefault.jpg',
      title: 'Music Video 12',
      description: 'Elevating artists with cinematic flair.',
    },
  ],
};

export default function TabbedVideoGrid() {
  return (
    <div className="max-w-7xl mx-auto">
      <Tabs defaultValue="podcast" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-bh-dark-gray/20 rounded-xl mb-8">
          <TabsTrigger
            value="podcast"
            className="text-primary data-[state=active]:bg-bh-orange data-[state=active]:text-white rounded-xl"
            aria-label="View podcast videos"
          >
            Podcast
          </TabsTrigger>
          <TabsTrigger
            value="musicVideos"
            className="text-primary data-[state=active]:bg-bh-orange data-[state=active]:text-white rounded-xl"
            aria-label="View music videos"
          >
            Music Videos
          </TabsTrigger>
        </TabsList>
        <TabsContent value="podcast">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.podcast.map((video, index) => (
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
        </TabsContent>
        <TabsContent value="musicVideos">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.musicVideos.map((video, index) => (
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
        </TabsContent>
      </Tabs>
    </div>
  );
}