import { Header1 } from "../_atoms/Headers";
import BlogCard from "../_molecules/blogCard";
import Breadcrumb from "../_molecules/breadCrumb";
import blogData from "../mocks/blogData.json";

const Blog = ({ showBreadcrumb = true }) => (
  <div className="w-full flex flex-col items-center mt-8">
    {showBreadcrumb && <Breadcrumb />}
    <Header1 className="m-8">Blog</Header1>
    <div className="flex flex-wrap gap-6 justify-center mb-4 px-1 sm:px-2 md:px-2 lg:px-8 xl:px-16">
      {blogData.map((post, index) => (
        <BlogCard
          key={index}
          slug={post.slug}
          imageLink={post.imageLink}
          imageAlt={post.imageAlt}
          date={post.date}
          title={post.title}
          excerpt={post.excerpt}
          aspectRatio={post.aspectRatio}
        />
      ))}
    </div>
  </div>
);

export default Blog;
