import { gql } from "graphql-request";
import {graphCmsJlpt} from "./graphCMS"

export const getAllJlpt = async () => {
    const query = gql `{
        vocalbularies {
            id
            furigana
            hantuVietnam
            id
            level
            vocalbularyName
            volcabularyMeaning {
                raw
                }
        }
    }`;

    return await graphCmsJlpt.request(query);
};