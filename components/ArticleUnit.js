import Link from "next/link";

const ArticleUnit = ({ article }) => {
  return (
    <div
      key={article.title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={`${process.env.NEXT_PUBLIC_AWS_ENDPOINT_URL}/${
            article.assets.find(asset => asset.asset_type_id === 1).cdn_url
          }`}
          alt=""
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link href={article.category.slug} className="hover:underline">
            <p className="text-sm font-medium text-indigo-600 inline-block">
              {article.category.name}
            </p>
          </Link>
          <Link href={`${article.category.slug}/${article.slug}`}>
            <div className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {article.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{article.lead}</p>
            </div>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div>
            <p className="text-sm font-medium text-gray-900">
              <Link href={`/author/${article.author.slug}`}>
                <span className="hover:underline">{article.author.name}</span>
              </Link>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={article.updated_at}>
                {new Date(article.updated_at).toISOString().slice(0, 10)}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleUnit;
