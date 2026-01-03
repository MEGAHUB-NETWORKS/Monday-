
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: 'AI' | 'Blockchain' | 'SaaS' | 'FutureTech';
  image: string;
  readTime: string;
}

export interface NavLink {
  label: string;
  href: string;
}
