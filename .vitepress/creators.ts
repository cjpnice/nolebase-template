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

export const creators: Creator[] = [
  // {
  //   name: '',
  //   avatar: '',
  //   username: 'CHEN',
  //   title: '',
  //   desc: '',
  //   links: [
  //     {
  //       type: 'github',
  //       icon: 'github',
  //       link: 'https://github.com/cjpnice',
  //     },
  //   ],
  // },
].map<Creator>((c) => {
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
