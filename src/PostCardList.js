import PostCard from "./PostCard";
import React from "react";
import { posts } from "./data/post";

export default function PostCardList() {
  return (
    <>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </>
  );
}
