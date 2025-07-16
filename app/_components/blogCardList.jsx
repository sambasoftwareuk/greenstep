// app/_components/BlogCardList.jsx
import { Header3 } from "../_atoms/Headers";
import BlogCard from "../_molecules/blogCard";

const BlogCardList = ({ blogData }) => (
    <div className="w-full flex flex-col items-center mt-8">
    <Header3 className="!text-black m-8">Blog</Header3>
    <div className="flex flex-wrap gap-6 justify-center mb-4">
      {blogData.map((post, index) => (
        <BlogCard
          key={index}
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

export default BlogCardList;