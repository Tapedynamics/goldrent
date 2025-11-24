'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';

interface Flyer {
  id: string;
  title: string;
  imagePath: string;
  description?: string;
}

interface FlyerGalleryProps {
  flyers: Flyer[];
}

export default function FlyerGallery({ flyers }: FlyerGalleryProps) {
  const [selectedFlyer, setSelectedFlyer] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedFlyer(index);
  };

  const closeLightbox = () => {
    setSelectedFlyer(null);
  };

  const nextFlyer = () => {
    if (selectedFlyer !== null) {
      setSelectedFlyer((selectedFlyer + 1) % flyers.length);
    }
  };

  const prevFlyer = () => {
    if (selectedFlyer !== null) {
      setSelectedFlyer((selectedFlyer - 1 + flyers.length) % flyers.length);
    }
  };

  const handleDownload = (imagePath: string, title: string) => {
    const link = document.createElement('a');
    link.href = imagePath;
    link.download = `${title.replace(/\s+/g, '-')}.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Griglia Volantini */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {flyers.map((flyer, index) => (
          <div
            key={flyer.id}
            className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={flyer.imagePath}
                alt={flyer.title}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-semibold">Clicca per ingrandire</p>
                </div>
              </div>
            </div>
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-900">{flyer.title}</h3>
              {flyer.description && (
                <p className="text-sm text-gray-600 mt-1">{flyer.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedFlyer !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-accent-cyan transition-colors z-10"
            aria-label="Chiudi"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Arrows */}
          {flyers.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevFlyer();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-accent-cyan transition-colors z-10"
                aria-label="Precedente"
              >
                <ChevronLeft className="w-12 h-12" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextFlyer();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-accent-cyan transition-colors z-10"
                aria-label="Successivo"
              >
                <ChevronRight className="w-12 h-12" />
              </button>
            </>
          )}

          {/* Download Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDownload(flyers[selectedFlyer].imagePath, flyers[selectedFlyer].title);
            }}
            className="absolute top-4 left-4 text-white hover:text-accent-cyan transition-colors z-10 flex items-center gap-2"
            aria-label="Scarica"
          >
            <Download className="w-6 h-6" />
            <span className="text-sm">Scarica</span>
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={flyers[selectedFlyer].imagePath}
                alt={flyers[selectedFlyer].title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <h3 className="text-xl font-semibold">{flyers[selectedFlyer].title}</h3>
            {flyers[selectedFlyer].description && (
              <p className="text-sm text-gray-300 mt-1">{flyers[selectedFlyer].description}</p>
            )}
            <p className="text-xs text-gray-400 mt-2">
              {selectedFlyer + 1} / {flyers.length}
            </p>
          </div>

          {/* Click to close */}
          <div
            className="absolute inset-0 -z-10"
            onClick={closeLightbox}
          />
        </div>
      )}
    </>
  );
}
