import React from "react";
import { Layout } from "../components/ui/Layout";
import * as Post from "../components/ui/Post";

export default function BlogPost({ pageContext }) {
  const { html, title, date, par } = pageContext;
  return (
    <Layout isClear={false}>
      <Post.Posts>
        <Post.Wrapper>
          <Post.Title>{title}</Post.Title>
          <Post.Meta>
            Écrit par {par} – {date}
          </Post.Meta>
          <Post.Content
            dangerouslySetInnerHTML={{ __html: html }}
          ></Post.Content>
        </Post.Wrapper>
      </Post.Posts>
    </Layout>
  );
}
