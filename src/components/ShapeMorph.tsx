import { useEffect, useRef } from 'react'
import anime from 'animejs/lib/anime.es.js'

function ShapeMorph({
  shortSideSize = 500,
  ratio = 2,
}: {
  shortSideSize?: number
  ratio?: number
}) {
  const morphId = useRef<string>(
    `id-${Math.floor(Math.random() * 100).toString()}`
  )

  const gradientId = useRef<string>(
    `id-${Math.floor(Math.random() * 100).toString()}`
  )
  const stopPointOneId = useRef<string>(
    `id-${Math.floor(Math.random() * 100).toString()}`
  )
  const stopPointTwoId = useRef<string>(
    `id-${Math.floor(Math.random() * 100).toString()}`
  )

  useEffect(() => {
    anime({
      targets: `#${morphId.current} path`,
      d: [
        {
          value:
            'M20.1,-35.7C25.7,-31.7,29.5,-25.5,32.4,-19.1C35.3,-12.8,37.3,-6.4,37.4,0.1C37.5,6.5,35.8,13.1,33,19.6C30.1,26,26.3,32.4,20.6,35.7C14.9,39,7.5,39.2,0.1,39.1C-7.3,39,-14.6,38.5,-21.5,35.9C-28.4,33.3,-34.9,28.6,-38.7,22.3C-42.5,15.9,-43.5,8,-42.3,0.7C-41.1,-6.6,-37.6,-13.1,-33.8,-19.5C-30.1,-25.9,-26.1,-32.1,-20.4,-36.1C-14.8,-40.1,-7.4,-41.7,0,-41.7C7.3,-41.6,14.6,-39.7,20.1,-35.7Z',
        },
        {
          value:
            'M22.1,-38.1C28.7,-34.5,34.1,-28.7,38,-21.9C42,-15.2,44.4,-7.6,44,-0.3C43.5,7,40,14.1,35.9,20.5C31.8,27,27.1,32.9,21,35.9C14.9,38.9,7.5,39,0,39C-7.5,39,-14.9,38.9,-21.3,36.1C-27.7,33.2,-33,27.7,-37.1,21.2C-41.3,14.8,-44.2,7.4,-43.6,0.3C-43,-6.7,-39,-13.4,-35.2,-20.6C-31.5,-27.7,-28.1,-35.2,-22.3,-39.3C-16.4,-43.4,-8.2,-44,-0.2,-43.6C7.8,-43.2,15.5,-41.8,22.1,-38.1Z',
        },
        {
          value:
            'M20.1,-35C26.2,-31.2,31.5,-26.2,35.3,-20.2C39,-14.2,41.3,-7.1,41.7,0.2C42,7.5,40.4,14.9,36.6,20.8C32.7,26.7,26.6,31.1,20.1,35.3C13.6,39.6,6.8,43.9,0.1,43.7C-6.6,43.5,-13.3,39,-19.4,34.6C-25.6,30.1,-31.3,25.8,-34.4,20C-37.4,14.3,-37.7,7.1,-38.2,-0.3C-38.8,-7.7,-39.5,-15.5,-37,-22.1C-34.5,-28.8,-28.8,-34.4,-22.1,-37.8C-15.4,-41.2,-7.7,-42.4,-0.4,-41.8C7,-41.2,13.9,-38.7,20.1,-35Z',
        },
      ],
      easing: 'cubicBezier(0.385, 0.355, 0.435, 0.845)',
      duration: 6000,
      loop: true,
      direction: 'alternate',
    })
  }, [])

  return (
    <svg
      id={morphId.current}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width={(shortSideSize * ratio).toString()}
      height={shortSideSize.toString()}
      className="dark:drop-shadow-glow"
    >
      <defs>
        <linearGradient id={gradientId.current} x1="0" x2="1" y1="1" y2="0">
          <stop
            id={stopPointOneId.current}
            stopColor="rgba(119.161, 190.04, 182.165, 1)"
            offset="0%"
          />
          <stop
            id={stopPointTwoId.current}
            stopColor="rgba(27, 153, 139, 1)"
            offset="100%"
          />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${gradientId.current})`}
        d="M22.1,-38.1C28.7,-34.5,34.1,-28.7,38,-21.9C42,-15.2,44.4,-7.6,44,-0.3C43.5,7,40,14.1,35.9,20.5C31.8,27,27.1,32.9,21,35.9C14.9,38.9,7.5,39,0,39C-7.5,39,-14.9,38.9,-21.3,36.1C-27.7,33.2,-33,27.7,-37.1,21.2C-41.3,14.8,-44.2,7.4,-43.6,0.3C-43,-6.7,-39,-13.4,-35.2,-20.6C-31.5,-27.7,-28.1,-35.2,-22.3,-39.3C-16.4,-43.4,-8.2,-44,-0.2,-43.6C7.8,-43.2,15.5,-41.8,22.1,-38.1Z"
        width="100%"
        height="100%"
        transform={`translate(50 50) scale(${ratio} 1)`}
        strokeWidth="0"
        stroke={`url(#${gradientId.current})`}
      />
    </svg>
  )
}

export default ShapeMorph
