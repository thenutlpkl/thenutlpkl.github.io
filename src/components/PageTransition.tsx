// PageTransition.tsx
import { ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const swiperRef = useRef<any>(null);
  const location = useLocation();

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Swiper
        ref={swiperRef}
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: [0, 0, -400],
            opacity: 0,
          },
          next: {
            translate: [0, 0, -400],
            opacity: 0,
          },
        }}
        modules={[EffectCreative]}
        allowTouchMove={false}
        speed={800}
        style={{ height: '100%' }}
      >
        <SwiperSlide>{children}</SwiperSlide>
        <SwiperSlide>{children}</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PageTransition;