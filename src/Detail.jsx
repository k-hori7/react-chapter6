import { useParams } from "react-router-dom";
import { posts } from "./data/post";
import styles from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams(); //URLのパラメータからid取得
  //idを元にpostを取得
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <p>記事が見つかりませんでした</p>; // 投稿が見つからない場合の表示
  }

  return (
    <>
      <div className={styles.detailContainer}>
        <div className={styles.detailPost}>
          <div className={styles.PostImage}>
            <img src="https://placehold.jp/800x400.png" alt="" />
          </div>
          <div className={styles.postContent}>
            <div className={styles.postInfo}>
              <div className={styles.postDate}>
                {new Date(post.createdAt).toLocaleDateString("ja-JP")}
              </div>
              <div className={styles.postCategory}>
                {post.categories.map((category, index) => (
                  <div key={index} className={styles.postTag}>
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.postTitle}>APIで取得した{post.title}</div>
            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
