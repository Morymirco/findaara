import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

export default function NewsCard({ title, excerpt, image, date, slug }: NewsCardProps) {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <p className="text-yellow-200 text-sm mb-2">{date}</p>
        <h3 className="font-bold text-xl mb-2 text-yellow-500">{title}</h3>
        <p className="text-yellow-100 mb-4">{excerpt}</p>
        <Link href={`/news/${slug}`} className="text-red-500 font-semibold hover:text-red-400">
          Lire la suite →
        </Link>
      </div>
    </div>
  )
} 