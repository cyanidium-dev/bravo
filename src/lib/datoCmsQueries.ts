export const GET_BLOG_ARTICLES_QUERY = `query GetBlogArticles {
  allArticles {
    id
    title
    description
    images {
      alt
      url
    }
    mainContent {
      paragraph
    }
    mainImage {
      alt
      url
    }
    slug
  }
}`;

export const GET_ARTICLE_BY_SLUG = `query MyQuery($code: String!) {
  allArticles(filter: {slug: {eq: $code}}) {
    id,
    title,
    description
    images {
      alt
      url
    }
    mainContent {
      paragraph
    }
    mainImage {
      alt
      url
    }
    slug
  }
}`;
