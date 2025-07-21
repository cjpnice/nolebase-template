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
  {
    name: '',
    avatar: '',
    username: 'CHEN',
    title: '小红书MCP服务',
    desc: '基于Selenium网页自动化技术实现与小红书平台的交互MCP服务，提供搜索文章、查看内容、阅读评论和发表评论等功能',
    links: [
      {
        type: 'github',
        icon: 'github',
        link: 'https://github.com/cjpnice/xiaohongshu_mcp',
      },
    ],
  },
].map<Creator>((c) => {
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
