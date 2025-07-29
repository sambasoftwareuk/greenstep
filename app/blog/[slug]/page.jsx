import blogData from "@/app/mocks/blogData.json";
import { Header1 } from "@/app/_atoms/Headers";
import Breadcrumb from "@/app/_molecules/breadCrumb";
import { notFound } from "next/navigation";

export default function BlogDetailPage({ params }) {
  const { slug } = params;

  const post = blogData.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="text-center">
        <Breadcrumb />
      </div>

      <Header1 className="text-center my-5">{post.title}</Header1>

      <div className="w-full max-w-2xl mx-auto">
        <img
          src={post.imageLink}
          alt={post.imageAlt}
          className="w-full rounded-lg mb-4 aspect-[16/9] object-cover"
        />
        <p className="text-red-500 text-sm mb-4">{post.date}</p>
        <p className="text-lg md:text-xl leading-relaxed text-justify">
          {post.excerpt}
        </p>
      </div>
    </div>
  );
}
