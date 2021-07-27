import Link from "next/link";
import Image from "next/image";

const ArticleUnit = ({ article }) => {
  return (
    <div
      key={article.title}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <Link href={`${article.category.slug}/${article.slug}`}>
        <div className="flex-shrink-0 cursor-pointer">
          <Image
            width={10}
            height={5}
            layout="responsive"
            className="h-48 w-full object-cover"
            src={`${process.env.NEXT_PUBLIC_MEDIA_ENDPOINT}/${
              article.assets.find(asset => asset.asset_type.slug === "hero")
                .cdn_url
            }`}
            alt=""
          />
        </div>
      </Link>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link href={article.category.slug}>
            <p className="text-sm font-medium text-indigo-600 inline-block hover:underline cursor-pointer">
              {article.category.name}
            </p>
          </Link>
          <Link href={`${article.category.slug}/${article.slug}`}>
            <div className="block mt-2 cursor-pointer">
              <p className="text-xl font-semibold text-gray-900">
                {article.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{article.lead}</p>
            </div>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div>
            <p className="text-sm font-medium text-gray-900 cursor-pointer">
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
