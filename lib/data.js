import { gql } from "graphql-request";
import {graphCMS} from "./graphCMS"

export const getAll = async () => {
  const query = gql`
    {
      posts(orderBy: date_DESC) {
        title
        slug
        date
        description
        tags
        authors {
          name
        }
        coverImage {
          id
          url
          width
          height
        }
      }
      projects(orderBy: date_DESC) {
        date
        title
        slug
        tags
        image {
          id
          url
          width
          height
        }
      }
    }
  `;

  return await graphCMS.request(query);
};

export const getPosts = async () => {
  const query = gql`
    {
      posts(orderBy: date_DESC) {
        title
        slug
        date
        description
        tags
      }
    }
  `;

  return await graphQLClient.request(query);
};

export const getProjects = async () => {
  const query = gql`
    {
      projects(orderBy: date_DESC) {
        date
        title
        slug
        tags
        image {
          url
          width
          height
        }
      }
    }
  `;

  return await graphCMS.request(query);
};

export const getProjectItem = async (slug) => {
  const query = gql`
    query getProject($slug: String!) {
      projects(orderBy: date_DESC, where: { slug: $slug }) {
        title
        slug
        tags
        content
        image {
          url
          width
          height
        }

      }
    }
  `;
  const variables = {
    slug,
  };

  return await graphCMS.request(query, variables);
};

export const getProjectSlugs = async () => {
  const query = gql`
    {
      projects {
        slug
      }
    }
  `;

  return await graphCMS.request(query);
};

export const getPostSlugs = async () => {
  const query = gql`
    {
      posts {
        slug
      }
    }
  `;

  return await graphCMS.request(query);
};

export const getPostItem = async (slug) => {
  const query = gql`
    query getPost($slug: String!) {
      posts(orderBy: date_DESC, where: { slug: $slug }) {
        title
        description
        slug
        tags
        richcontent {
          raw
        }
        date
        coverImage {
          url
          width
          height
        }
        authors {
          name
        }
      }
    }
  `;
  const variables = {
    slug,
  };

  return await graphCMS.request(query, variables);
};

export const getAuthors = async () => {
  const query = gql`
    {
      authors {
        id
        name
        intro
        bio
        slug
        picture {
          url
          width
          height
        }
      }
    }
  `;

  return await graphCMS.request(query);
};

export const getProjTrendings = async () => {
  const query = gql`
    {
      projects(orderBy: date_DESC, where: { trending: true }) {
        content
        date
        id
        slug
        tags
        title
        image {
          url
          width
          height
        }
      }
    }
  `;

  return await graphCMS.request(query);
};
