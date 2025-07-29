import { Header1 } from "../_atoms/Headers";
import BlogCard from "../_molecules/blogCard";
import Breadcrumb from "../_molecules/breadCrumb";
import blogData from "../mocks/blogData.json";

const Blog = () => (
  <div className="w-full flex flex-col items-center mt-8">
    <Breadcrumb/>
    <Header1 className="m-8">Blog</Header1>
    <div className="flex flex-wrap gap-6 justify-center mb-4">
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
