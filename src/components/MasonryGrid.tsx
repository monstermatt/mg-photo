"use client";

import Image from "next/image";
import { Photo } from "@/types/gallery";

interface MasonryGridProps {
    photos: Photo[];
}

export default function MasonryGrid({ photos }: MasonryGridProps) {
    return (
        <div className="columns-1 sm: columns-2 lg: colunms-3 gap-6 space-y-6 max-w-7xl mx-auto px-4">
            {photos.map((photo) => (
                <div
                    key={photo.id}
                    className="break-inside-avoid relative group overflow-hidden rounded-lg cursor-pointer bg-gray-100"
                //TODO: add onclick for lightbox
                >
                    <Image
                        src={photo.url}
                        alt={photo.altText}
                        width={photo.width}
                        height={photo.height}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-auto object-cover ransition-transform duration-300 ease-in-out group-hover:scale-105"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64; "
                    />
                    {/*optional overlay caption*/}
                    {photo.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-sm font-medium">{photo.caption}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}