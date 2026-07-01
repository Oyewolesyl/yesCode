import { useState } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
  video?: boolean;
};

export function MediaFrame({ src, alt = "", className = "", video = false }: Props) {
  const [ready, setReady] = useState(false);

  return (
    <div className={`media-frame ${ready ? "is-ready" : ""} ${className}`}>
      <div className="media-blur" />
      {video ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setReady(true)}
          onLoadedData={() => setReady(true)}
        />
      ) : (
        <img src={src} alt={alt} onLoad={() => setReady(true)} />
      )}
    </div>
  );
}
