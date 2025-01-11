import Image from 'next/image'

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image: string;
}

export default function TestimonialCard({ content, author, role, image }: TestimonialProps) {
  return (
    <div className="bg-red-900 p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={author}
          width={60}
          height={60}
          className="rounded-full border-2 border-yellow-500"
        />
        <div className="ml-4">
          <h4 className="font-bold text-yellow-500">{author}</h4>
          <p className="text-yellow-200">{role}</p>
        </div>
      </div>
      <p className="text-yellow-100 italic">"{content}"</p>
    </div>
  )
} 