import { posts } from "./data/post";

export default function PostCard({ post }) {
  return (
    <>
      <div className="post-card">
        <div className="post-info">
          <div className="post-date">
            {new Date(post.createdAt).toLocaleDateString("ja-JP")}
          </div>
          <div className="post-category">
            {post.categories.map((category) => (
              <div className="post-tag">{category}</div>
            ))}
          </div>
        </div>
        <p className="post-title">APIで取得した{post.title}</p>
        <div
          className="post-content preview"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </>
  );
}
