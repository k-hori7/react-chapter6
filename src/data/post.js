import { useState, useEffect } from "react";

export function usePosts() {
  const [posts, setPosts] = useState([]);

  // APIでpostsを取得する処理をuseEffectで実行します。
  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await fetch(
          "https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts"
        );
        const data = await res.json();
        setPosts(data.posts);
      } catch (err) {
        console.log("postsを取得できません。:", err);
      }
    };

    fetcher();
  }, []);
  return posts;
}
