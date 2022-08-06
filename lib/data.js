import { gql, GraphQLClient } from "graphql-request";

const endpoint = "https://api-ap-northeast-1.hygraph.com/v2/cl63tp35j7a8p01t7cmnheovx/master";

const graphQLClient = new GraphQLClient(endpoint);

export const getAll = async () => {
    const query = gql`
    {
        posts {
          title
          slug
          date
          description    
          tags    
          authors {
            name
          }
        }
        projects {
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
  
    return await graphQLClient.request(query);
  };