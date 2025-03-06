import "../pages/PageStyles.css";
import blogBg from "../assets/background.avif";

const Blog = () => {
  const posts = [
    { title: "How I Built My Portfolio", content: "This is my journey..." },
    { title: "React Tips for Beginners", content: "Here are some useful tips..." },
  ];

  return (
    <div className="page" style={{ backgroundImage: `url(${blogBg})` }}>
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
