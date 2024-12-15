import React from "react";
import Image from "next/image";

interface MonoImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  subtitle: string;
}

export default function MonoImage({
  src,
  alt,
  width,
  height,
  subtitle,
}: MonoImageProps) {
  return (
    <div className="">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full object-cover"
      />
      <p className="font-mono pt-1 text-center text-sm text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}
