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
