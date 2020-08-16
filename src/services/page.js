export const pages = [
  {
    title: 'Home',
    url: '/',
    code: 'home'
  },
  {
    title: 'About',
    url: '/about',
    code: 'about'
  }
]

const pagesCache = {}

export const findPage = code => {
  console.log(code)
  if (!pagesCache[code]) {
    pagesCache[code] = pages.find(p => p.code === code)
  }

  return pagesCache[code]
}

export const menuPages = () => pages
export const sidebarPages = () => pages