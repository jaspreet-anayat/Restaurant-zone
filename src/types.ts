export type PageId = 'home' | 'why-rz' | 'services' | 'products' | 'job-seekers' | 'specializations' | 'reviews' | 'contact';

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  timeAgo: string;
  rating: number;
  avatarColor: string;
  avatarLetter: string;
  text: string;
  fullText?: string;
  role?: string;
  company?: string;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  image: string;
  description: string;
  roles: string[];
  avgPlacementTime: string;
}

export interface SolutionCard {
  id: string;
  iconType: 'clock' | 'target' | 'shield';
  title: string;
  description: string;
  highlight: string;
  tag?: string;
}

export interface SpecialtyItem {
  id: string;
  name: string;
  roles: string[];
  description: string;
}
