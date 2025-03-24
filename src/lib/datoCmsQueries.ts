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

export const GET_ARTICLE_BY_SLUG = `query GetArticle($code: String!) {
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

export const GET_MENU_BANNER = `query GetMenuBanner {
  banner {
    bannerDesk {
      alt
      url
    }
    bannerMob {
      alt
      url
    }
  }
}`;

export const GET_ALL_DISHES = `query GetAllDishes {

  banner {
    bannerDesk {
      alt
      url
    }
    bannerMob {
      alt
      url
    }
  }

  allCategories {
    url
    title
    order
    id
    dishes {
      title
      price
      description
      calories
      id
      image {
        url
        alt
      }
    }
  }
}`;

export const GET_DISHES_IN_CATEGORY = `query GetDishesInCategory($code: String!) {

  banner {
    bannerDesk {
      alt
      url
    }
    bannerMob {
      alt
      url
    }
  }

   allCategories {
    title
    url
    order
  }

  category: allCategories(filter: {url: {eq: $code}}) {
    url
    title
    id
    dishes {
      title
      price
      image {
        alt
        url
      }
      id
      description
      calories
    }
  }
}`;
