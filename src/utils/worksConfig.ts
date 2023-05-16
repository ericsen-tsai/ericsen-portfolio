export type Work = {
  imgSrc: string
  name: string
  url: string
  type: 'social media' | 'project' | 'topic' | 'SaaS'
  techStack: string[]
}

const worksConfig: Work[] = [
  {
    imgSrc:
      'https://images.unsplash.com/photo-1611695267521-9891f56679a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1959&q=80',
    name: 'Daily View',
    url: 'https://dailyview.tw',
    type: 'social media',
    techStack: ['Nextjs', 'MUI'],
  },
  {
    imgSrc:
      'https://images.unsplash.com/photo-1611695267521-9891f56679a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1959&q=80',
    name: "Ericsen Tsai's Studio",
    url: 'https://web.erichandsen.dev/',
    type: 'project',
    techStack: ['Astrojs'],
  },
  {
    imgSrc:
      'https://images.unsplash.com/photo-1611695267521-9891f56679a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1959&q=80',
    name: 'Yingge Fantasy',
    url: 'https://yinggecampaign-ntpc.com.tw/',
    type: 'topic',
    techStack: ['Nextjs', 'TailwindCSS'],
  },
  {
    imgSrc:
      'https://images.unsplash.com/photo-1611695267521-9891f56679a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1959&q=80',
    name: 'ISUZU Logistics',
    url: 'https://dailyview.tw/logistics/',
    type: 'topic',
    techStack: ['Reactjs', 'TailwindCSS'],
  },
  {
    imgSrc:
      'https://images.unsplash.com/photo-1611695267521-9891f56679a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1959&q=80',
    name: 'Fanti Insights',
    url: 'https://insights-info.fanti.tw/',
    type: 'SaaS',
    techStack: ['Reactjs', 'MUI', 'React-Query'],
  },
]

export default worksConfig
