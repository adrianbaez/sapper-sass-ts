export interface IPage {
  title: string
  url: string
  code: string
}

interface IPageMap {
  [key: string]: IPage
}

export const pages: IPage[] = [
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

const pagesCache: IPageMap = {}

export const findPage = (code: string ) => {
  if (!pagesCache[code]) {
    pagesCache[code] = pages.find((p: IPage) => p.code === code)
  }

  return pagesCache[code]
}

export const menuPages = () => pages
export const sidebarPages = () => pages