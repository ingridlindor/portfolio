

export const meta = {
  name: 'Ingrid Lindor',
  title: 'Full-stack Developer',
  location: 'Brazil',
  available: true,
  bio: 'Full-stack developer with 2 years of experience building and shipping web applications.',
  bio2:'Passionate about creating enjoyable user experiences and writing code that works in production, even if it’s not perfect.',
  bio3:'When I’m not coding, you can find me exploring the outdoors, trying out new recipes, or playing video games.',
  links:{
    Linkedin: 'https://www.linkedin.com/in/ingrid-lindor/',
    Github: 'https://github.com/ingridlindor',
    email: 'mailto:ingridlindor@gmail.com'
  }
}

export const projects = [
  {
    num:    '01',
    title:  'Project Alpha',
    desc:   'What it does and why the person using it cares. Focus on the human problem.',
    tags:   ['Next.js', 'TypeScript', 'Postgres'],
    url:    '#',
    accent: 'yellow' as const,
  },
    {
    num:    '02',
    title:  'Project Beta',
    desc:   'What it does and why the person using it cares. Focus on the human problem.',
    tags:   ['Python', 'Django', 'Docker'],
    url:    '#',
    accent: 'cyan' as const,
  },
  {
    num:    '03',
    title:  'Project Gamma',
    desc:   'What it does and why the person using it cares. Focus on the human problem.',
    tags:   ['React', 'Node.js', 'REST'],
    url:    '#',
    accent: 'pink' as const,
  },
  {
    num:    '04',
    title:  'Project Delta',
    desc:   'What it does and why the person using it cares. Focus on the human problem.',
    tags:   ['TypeScript', 'Postgres'],
    url:    '#',
    accent: 'green' as const,
  },
]

export const stack = [
  { name: 'React / Next.js', fav: true  },
  { name: 'TypeScript',      fav: true  },
  { name: 'Node.js',         fav: true  },
  { name: 'Python / Django', fav: true  },
  { name: 'PostgreSQL',      fav: false },
  { name: 'Docker',          fav: false },
  { name: 'REST APIs',       fav: false },
  { name: 'Git / CI-CD',     fav: false },
]