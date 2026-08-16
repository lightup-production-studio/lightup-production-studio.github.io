"use client";

import { useState } from "react";
import Image from "next/image";

type Provider = "youtube" | "vimeo";

type Props = {
  provider: Provider;
  videoId: string;
  title: string;
  thumbnail: string;
};

function embedSrc(provider: Provider, videoId: string) {
  if (provider === "vimeo") {
    return `https://player.vimeo.com/video/${videoId}?autoplay=1`;
  }
  return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
}

export function VideoEmbed({ provider, videoId, title, thumbnail }: Props) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-film">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={embedSrc(provider, videoId)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative aspect-video w-full overflow-hidden bg-ink text-left"
      aria-label={`Play ${title}`}
    >
      <Image
        src={thumbnail}
        alt=""
        fill
        className="object-cover transition duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <span className="absolute inset-0 bg-film/35 transition group-hover:bg-film/20" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-tungsten text-ink shadow-lg transition group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-3 left-3 right-3 font-display text-xl tracking-wide text-paper">
        {title}
      </span>
    </button>
  );
}
