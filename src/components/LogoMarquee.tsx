import Marquee from 'react-fast-marquee'
import ReactIcon from '@/assets/react-icon.webp'
import NextIcon from '@/assets/next-icon.png'
import MuiIcon from '@/assets/mui-icon.png'
import ReactQueryIcon from '@/assets/react-query-icon.png'
import ReduxIcon from '@/assets/redux-icon.webp'
import TailwindCssIcon from '@/assets/tailwind-css-icon.png'
import AstroIcon from '@/assets/astro-icon.png'
import DaisyUILogo from '@/assets/daisyui-logo.svg'
import DockerIcon from '@/assets/docker-icon.png'
import FlaskIcon from '@/assets/flask-icon.png'
import SassIcon from '@/assets/sass-icon.png'
import SupabaseIcon from '@/assets/supabase-icon.png'
import TrpcIcon from '@/assets/trpc-icon.png'

type element = {
  imgSrc: string
  name: string
  aspectRatioClassName?: string
}

const MARQUEE_ELEMENTS_CONFIG: element[] = [
  {
    imgSrc: ReactIcon,
    name: 'React.js',
  },
  {
    imgSrc: NextIcon,
    name: 'Next.js',
  },
  {
    imgSrc: MuiIcon,
    name: 'Material UI',
  },
  {
    imgSrc: ReactQueryIcon,
    name: 'React Query',
    aspectRatioClassName: 'aspect-[23/20]',
  },
  {
    imgSrc: ReduxIcon,
    name: 'Redux Toolkit',
  },
  {
    imgSrc: TailwindCssIcon,
    name: 'TailwindCSS',
    aspectRatioClassName: 'aspect-[5/3]',
  },
  {
    imgSrc: AstroIcon,
    name: 'Astro.js',
  },
  {
    imgSrc: DockerIcon,
    name: 'docker',
  },
  {
    imgSrc: DaisyUILogo,
    name: 'DaisyUI',
    aspectRatioClassName: 'aspect-[3/1]',
  },
  {
    imgSrc: TrpcIcon,
    name: 'tRPC',
  },
  {
    imgSrc: SassIcon,
    name: 'Sass',
    aspectRatioClassName: 'aspect-[2/1]',
  },
  {
    imgSrc: SupabaseIcon,
    name: 'Supabase',
  },
  {
    imgSrc: FlaskIcon,
    name: 'Flask',
    aspectRatioClassName: 'aspect-[4/5]',
  },
]

const SingleLogoElement = ({
  imgSrc,
  name,
  aspectRatioClassName = 'aspect-square',
  rotate,
}: element & { rotate: 45 | 0 }) => {
  const rotateClassName = rotate === 0 ? '' : 'rotate-45'
  return (
    <div
      className={`group relative flex h-full items-center p-10 ${rotateClassName}`}
    >
      <img
        src={imgSrc}
        alt={name}
        className={`h-[72%] ${aspectRatioClassName} transition-all group-hover:blur-sm group-hover:grayscale`}
      ></img>
      <p className="invisible absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-black text-white shadow-black text-shadow-outline group-hover:visible">
        {name}
      </p>
    </div>
  )
}

const LogoMarquee = ({ rotate = 0 }: { rotate?: 45 | 0 }) => {
  return (
    <Marquee
      gradientColor={[246, 246, 246]}
      className="h-full"
      speed={60}
      pauseOnHover
    >
      {MARQUEE_ELEMENTS_CONFIG.map((element) => (
        <SingleLogoElement
          key={element.name}
          {...element}
          rotate={rotate}
        ></SingleLogoElement>
      ))}
    </Marquee>
  )
}

export default LogoMarquee
