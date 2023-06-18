import { gql } from "graphql-request";
import {graphCmsJlpt} from "./graphCMS"

export const getAllJlpt = async () => {
    const query = gql `{
        vocalbularies(first:1000, orderBy:id_DESC) {
            id
            furigana
            hantuVietnam
            id
            level
            vocabulary
            volcabularyMeaning {
                raw
                }
        }
    }`;

    return await graphCmsJlpt.request(query);
};