import Image from "next/image";

const photos = [
  { src: "/IMG_4394.jpeg", alt: "Широкий вибір вінків" },
  { src: "/IMG_4395.jpeg", alt: "Ритуальні вінки та квіти" },
  { src: "/IMG_4396.jpeg", alt: "Труни різних категорій" },
  { src: "/IMG_4393.jpeg", alt: "Труни та ритуальні вінки" },
];

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-[#0f3460]"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <p className="text-white text-sm">{photo.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
