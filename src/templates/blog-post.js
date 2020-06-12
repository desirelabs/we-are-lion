import React from "react";
import { Helmet } from "react-helmet";
import { Layout } from "../components/ui/Layout";
import { H1 } from "../components/ui/Headings";
import * as Post from "../components/ui/Post";

export default function BlogPost({ pageContext }) {
  const { html, title, date, par, description, siteName } = pageContext;
  return (
    <>
      <Helmet>
        <title>
          {siteName} - {title}
        </title>
        <meta name="description" content={description}></meta>
      </Helmet>
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
    </>
  );
}
