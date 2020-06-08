import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Button } from "./Button";

const PostsNav = styled.nav`
  margin: 60px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > * {
    margin: auto;
  }
`;

interface PostsNavigation {
  numPages: number;
  currentPage: number;
}

export const PostsNavigation = ({
  pageContext
}: {
  pageContext: PostsNavigation;
}) => {
  const { numPages, currentPage } = pageContext;
  const previousPage =
    currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`;
  const nextPage = currentPage < numPages ? `/blog/${currentPage + 1}` : null;
  return (
    <PostsNav>
      {currentPage > 1 && (
        <Link to={`${previousPage}`}>
          <Button variant="primary">&laquo; Page précédente</Button>
        </Link>
      )}
      {currentPage < numPages && (
        <Link to={`${nextPage}`}>
          <Button variant="primary">Page suivante &raquo;</Button>
        </Link>
      )}
    </PostsNav>
  );
};
