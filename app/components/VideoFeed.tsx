import { IVideo } from "@/models/Video";
import VideoComponent from "./VideoComponent";

interface VideoFeedProps {
  videos: IVideo[];
}

export default function VideoFeed({ videos }: VideoFeedProps) {
  return (
    <div className="flex flex-col items-center gap-4 max-w-[450px] mx-auto">
      {videos.map((video) => (
        <VideoComponent key={video._id?.toString()} video={video} />
      ))}

      {videos.length === 0 && (
        <div className="text-center py-12">
          <p className="text-base-content/70">No videos found</p>
        </div>
      )}
    </div>
  );
}