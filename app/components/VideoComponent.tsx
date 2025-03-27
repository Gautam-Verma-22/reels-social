import { IKVideo } from "imagekitio-next";
import Link from "next/link";
import { IVideo } from "@/models/Video";
import { useState } from "react";

export default function VideoComponent({ video }: { video: IVideo }) {
  const [error, setError] = useState(false);

  return (
    <div className="card bg-base-100 shadow hover:shadow-lg transition-all duration-300 w-[112vh]">
      <div className="flex p-6 w-full h-full min-h-[400px]"> {/* Increased padding and min-height */}
        {/* Video container - left and vertically centered */}
        <div className="w-[75vh] flex items-center justify-center"> {/* Added flex centering */}
          <div
            className="rounded-xl overflow-hidden relative w-full max-w-md" /* Added max-w-md */
            style={{ aspectRatio: "9/16" }}
          >
            {!error ? (
              <IKVideo
                path={video.videoUrl}
                transformation={[
                  {
                    height: String(video.transformation?.height || 1920),
                    width: String(video.transformation?.width || 1080),
                    quality: String(video.transformation?.quality || 80),
                  },
                ]}
                controls={video.controls ?? true}
                className="w-full h-full object-cover"
                onError={() => setError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-base-200">
                <p className="text-base-content/70">Failed to load video</p>
              </div>
            )}
          </div>
        </div>

        {/* Info container - right top aligned */}
        <div className="w-full pl-6 flex flex-col items-start "> {/* Increased padding-left */}
          
            <h2 className="card-title text-2xl mb-4">{video.title}</h2> {/* Increased text size and margin */}

          <p className="text-base text-base-content/80 line-clamp-4 mb-6"> {/* Increased text size and line-clamp */}
            {video.description}
          </p>

          {/* Comments section */}
          <div className="w-full border-t pt-4">
            <h3 className="text-lg font-semibold mb-3">Comments</h3>
            <div className="space-y-4">
              {/* Comment input */}
              <div className="flex gap-2">
                <input 
                  type="text"
                  placeholder="Add a comment..."
                  className="input input-bordered w-full"
                />
                <button className="btn btn-primary">Post</button>
              </div>
              
              {/* Comments list - placeholder for now */}
              <div className="space-y-3">
                <p className="text-base-content/70 text-center">No comments yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}