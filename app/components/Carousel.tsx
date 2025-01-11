import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselProps {
  children: React.ReactNode;
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-yellow-500 p-3 rounded-full transform translate-x-1/2 hover:bg-red-700 transition-colors"
    >
      <FaChevronRight />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-red-600 text-yellow-500 p-3 rounded-full transform -translate-x-1/2 hover:bg-red-700 transition-colors"
    >
      <FaChevronLeft />
    </button>
  );
}

export default function Carousel({ children }: CarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="relative px-12">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
} 