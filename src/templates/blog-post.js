import React from "react";
import { Layout } from "../components/ui/Layout";
import * as Post from "../components/ui/Post";
import { H1 } from "../components/ui/Headings";

export default function BlogPost({ pageContext }) {
  const { html, title, date, par } = pageContext;
  return (
    <Layout isClear={false}>
      <Post.Posts>
        <Post.Wrapper>
          <H1>{title}</H1>
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
