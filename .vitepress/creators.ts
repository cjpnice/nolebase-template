export interface SocialEntry {
  type: 'github' | 'twitter' | 'email'
  icon: string
  link: string
}

export interface Creator {
  avatar: string
  name: string
  username?: string
  title?: string
  org?: string
  desc?: string
  links?: SocialEntry[]
  nameAliases?: string[]
  emailAliases?: string[]
}

const getAvatarUrl = (name: string) => `https://github.com/${name}.png`

export const creators: Creator[] = [
  {
    name: 'cjpnice',
    avatar: '',
    username: 'CHEN',
    title: '作者信息',
    desc: '开发者，专注于大模型应用开发，数据分析，后端、GoLang、Python开发',
    links: [
      {
        type: 'email',
        icon: 'email',
        link: 'cjpnice@163.com'
      },
      {
        type: 'github',
        icon: 'github',
        link: 'https://github.com/cjpnice'
      },
    ]
  },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrl(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
