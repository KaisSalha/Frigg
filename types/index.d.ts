export interface Article {
  id: Integer;
  locale_id: Integer;
  slug: string;
  title: string;
  user_id: Integer;
  author_id: Integer;
  category_id: Integer;
  status_id: Integer;
  lead: string;
  body: string;
  created_at: DateTime;
  updated_at: DateTime;
  category: {
    id: Integer;
    locale_id: 1;
    name: string;
    slug: string;
    banner_img: string;
    description: string;
  };
  assets: [
    {
      id: Integer;
      article_id: Integer;
      asset_type_id: Integer;
      cdn_url: string;
      attrib_copyright: string;
      created_at: DateTime;
      updated_at: DateTime;
      asset_type: {
        id: Integer;
        name: string;
        slug: string;
        height: Integer;
        width: Integer;
      };
    }
  ];
  author: {
    id: Integer;
    name: string;
    slug: string;
    email: string;
    bio: string;
  };
}

export interface Category {
  id: Integer;
  locale_id: Integer;
  name: string;
  slug: string;
  banner_img: string;
  description: string;
}
