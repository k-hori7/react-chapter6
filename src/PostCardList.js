import PostCard from "./PostCard";
import React from "react";
import { usePosts } from "./data/post";

export default function PostCardList() {
  const posts = usePosts();
  return (
    <>
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </>
  );
}
