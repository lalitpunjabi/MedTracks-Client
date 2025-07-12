import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  { name: 'Alice', text: 'MedTrack made my medicine routine so easy!', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'Bob', text: 'The reminders and analytics are fantastic.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Carlos', text: 'Love the multi-language support!', avatar: 'https://randomuser.me/api/portraits/men/65.jpg' }
];

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {testimonials.map((t, idx) => (
        <div key={idx} className="p-6 bg-white rounded shadow flex flex-col items-center">
          <img
            src={t.avatar || 'https://randomuser.me/api/portraits/lego/1.jpg'}
            alt={t.name}
            className="w-16 h-16 rounded-full border-2 border-health-green shadow mb-4"
          />
          <p className="italic text-center">"{t.text}"</p>
          <p className="mt-2 font-bold text-health-blue dark:text-health-green">- {t.name}</p>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsSlider; 