import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import HallOfFameCard from './HallOfFameCard';

const hallOfFameData = [
  {
    image: '/images/shaan.jpg',
    name: 'Shaan',
    location: 'IGDTUW, Delhi',
    date: '23 February 2024',
    story: 'During IGDTUW\'s cultural fest, I held up a handmade sketch of singer Shaan while he was performing. To my surprise, he noticed it, and to thank me, he sang Chand Sifarish (Fanaa, 2006) for me. This special interaction was even featured in Hindustan Times.',
    link: 'https://www.youtube.com/shorts/4M7mViL6atI',
  },
  {
    image: '/images/mohit.jpg',
    name: 'Mohit Chauhan',
    location: 'IGDTUW, Delhi',
    date: '28 March 2025',
    story: 'At IGDTUW’s cultural fest, I gifted a handmade sketch to Mohit Chauhan. He noticed it from the stage, and said “It’s beautiful” in front of everyone. He even took the sketch with him. That moment, with the entire crowd watching, felt truly magical.',
    link: 'https://www.youtube.com/shorts/DleESM_aEVU',
  },
  {
    image: '/images/tanu.jpg',
    name: 'Tanu Jain',
    location: 'DTU, Delhi',
    date: '12 April 2024',
    story: 'Met her at a hackathon at DTU, where she was the chief guest. I gifted her a handmade sketch, and she liked it and took it with her.',
    link: 'https://www.instagram.com/p/C5viNSrPKPE/?igsh=NzJyZzB6anZ3aWoy',
  },
];

const sectionFadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export default function HallOfFameSection() {
  return (
    <motion.section
      id="hall-of-fame"
      className="px-4 py-12 bg-indigo-100 bg-opacity-70"
      variants={sectionFadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="md:text-5xl text-3xl font-bold text-center mb-10">
        Hall of Fame
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        // breakpoints={{
        //   768: {
        //     slidesPerView: 2,
        //   },
        // }}
        className="w-full max-w-6xl mx-auto swiper-custom-nav custom-swiper"
      >
        {hallOfFameData.map((item, index) => (
          <SwiperSlide key={index}>
            <HallOfFameCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}
