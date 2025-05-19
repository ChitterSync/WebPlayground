import React from "react";
import Image from "next/image";

interface AlbumArtProps {
  cover: string;
  alt: string;
}

const AlbumArt: React.FC<AlbumArtProps> = ({ cover, alt }) => {
  const [imgError, setImgError] = React.useState(false);
  return (
    <div
      className="album-art w-44 h-44 bg-gray-800 rounded-lg mb-5 shadow-lg flex items-center justify-center"
      style={{
        backgroundImage: imgError
          ? "url('https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg')"
          : `url('${cover}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label={alt}
    >
      {/* Hidden img for error fallback */}
      <Image
        src={cover}
        alt={alt}
        width={200}
        height={200}
        className="album-art rounded-lg shadow-lg mb-4 object-cover"
        onError={() => setImgError(true)}
        priority
      />
    </div>
  );
};

export default AlbumArt;
