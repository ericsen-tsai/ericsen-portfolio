import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import worksConfig from '@/utils/worksConfig'
import type { Work } from '@/utils/worksConfig'

const ProjectSlideContent = ({ name, imgSrc, url, type, techStack }: Work) => {
  console.log(type, techStack)
  return (
    <div className="h-[30rem] !w-[20rem] overflow-hidden rounded-lg bg-blue-100 text-center">
      <div>
        <img src={imgSrc} alt={name} className="aspect-[13/10] w-full"></img>
        <a className="font-bold underline" href={url} target="_blank">
          {name}
        </a>
      </div>
    </div>
  )
}

const ProjectCarousel = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView="auto"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      grabCursor
      centeredSlides
    >
      {worksConfig.map((work) => (
        <SwiperSlide
          key={work.name}
          className="!w-[20rem] !scale-[0.8] transition-all [&.swiper-slide-active]:!scale-100"
        >
          <ProjectSlideContent {...work}></ProjectSlideContent>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProjectCarousel
