interface Image {
  alt: string;
  url: string;
}

interface Paragraph {
  paragraph: string;
}
export interface Article {
  id: string;
  title: string;
  description: string;
  mainContent: Paragraph[];
  mainImage: Image;
  slug: string;
  images: Image[];
}
