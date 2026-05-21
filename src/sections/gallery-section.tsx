import Image from "next/image";
import { businessConfig } from "@/constants/business";
import { Container } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { GalleryContent, GalleryImage } from "@/types/business";
import { cn } from "@/utils/cn";

type GallerySectionProps = {
  id?: string;
  content?: GalleryContent;
  images?: GalleryImage[];
};

export function GallerySection({
  id = "gallery",
  content = businessConfig.gallerySection,
  images = businessConfig.gallery,
}: GallerySectionProps) {
  return (
    <section id={id} className="luxury-surface border-b border-[var(--color-border)] py-20 sm:py-24">
      <Container>
        <SectionTitle eyebrow={content.eyebrow} title={content.title} description={content.description} centered />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => {
            const isSvgImage = image.src.endsWith(".svg");

            return (
              <Card
                key={`${image.src}-${index}`}
                className={cn(
                  "group overflow-hidden",
                  index % 5 === 0 ? "sm:col-span-2 lg:col-span-2" : "col-span-1",
                )}
              >
                <div className={cn("relative", index % 5 === 0 ? "aspect-[16/9]" : "aspect-[4/3]")}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    unoptimized={isSvgImage}
                    loading="lazy"
                    decoding="async"
                    quality={72}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 34vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
