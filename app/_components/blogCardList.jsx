import BlogCard from "../_molecules/blogCard";

const BlogCardList = ({ blogData }) => (
  <div className="w-full flex flex-col items-center mt-8">
    <h1 className="m-8">Blog</h1>
    <div className="flex md:gap-6 lg:justify-center justify-around mb-4">
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
