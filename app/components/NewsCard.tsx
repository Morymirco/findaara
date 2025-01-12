import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

export default function NewsCard({ title, excerpt, image, date, slug }: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <article className="bg-black/50 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <span className="text-sm text-yellow-200">{date}</span>
          <h3 className="text-xl font-bold text-yellow-500 mb-2">{title}</h3>
          <p className="text-yellow-200">{excerpt}</p>
        </div>
      </article>
    </Link>
  )
} 