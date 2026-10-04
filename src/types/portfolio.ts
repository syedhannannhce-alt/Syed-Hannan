export interface WorkTabItem {
  id: string;
  name: string;
  role: string;
  dates: string;
  whatIDid: string[];
  whatCameOfIt?: string;
  link?: {
    label: string;
    url: string;
  };
  button?: {
    label: string;
    targetProofTab: 'articles' | 'decks' | 'social' | 'awards' | 'podcasts' | 'youtube';
  };
}

export interface FeaturedVideoItem {
  id: string;
  title: string;
  myPart: string;
  embedUrl: string;
  url: string;
  youtubeId: string;
}

export interface ProofArticleItem {
  title: string;
  url: string;
  source: string;
}

export interface ProofDeckItem {
  title: string;
  url: string;
  source: string;
}

export interface UGCMetaAdItem {
  id: string;
  title: string;
  url: string;
  format: string;
  channel: string;
  source?: string;
  hookDescription?: string;
}

export interface ProofSocialItem {
  title: string;
  url: string;
  source: string;
}

export interface ProofCredentialItem {
  title: string;
  url: string;
  issuer?: string;
  type?: 'Award' | 'Certification' | 'Research';
}

export interface ProofPodcastItem {
  title: string;
  url: string;
  source: string;
}

export interface ProofYouTubeVideoItem {
  id: string;
  title: string;
  youtubeId: string;
  url: string;
  isShort?: boolean;
}

export interface ToolTrayCategory {
  category: string;
  tools: string[];
}
