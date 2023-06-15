import { GraphQLClient } from "graphql-request";

export const graphCMS = new GraphQLClient(process.env.NEXT_PUBLIC_API)

export const graphCmsJlpt = new GraphQLClient(process.env.NEXT_PUBLIC_API_2)