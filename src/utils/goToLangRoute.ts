import type { Language } from '@/types/language'

const goToLangRoute = ({
  lang,
  targetPathName,
}: {
  lang: Language
  targetPathName?: string
}) => {
  let pathName
  if (targetPathName === undefined) {
    const segments = window.location.pathname.split('/')
    pathName = document.documentElement.lang === 'en'
      ? segments.slice(1).join('/')
      : segments.slice(2).join('/')
  } else {
    pathName = targetPathName
  }

  const { origin } = window.location

  if (lang === 'en') {
    window.location.replace(`${origin}/${pathName}`)
    return
  }
  window.location.replace(`${origin}/${lang}/${pathName}`)
}

export default goToLangRoute
