import Wrapper from "../layout/wrapper";
import { RichText } from "@graphcms/rich-text-react-renderer";

import { getAllJlpt} from "../lib/jplpt-db";
import Hero from "../components/Hero";

export const getStaticProps = async () => {
  const data = await getAllJlpt();
  return {
    props: {
      data,          
    },
  };
};

export default function LearnJlpt({ data, contents }) {
  // console.log(data);

  return (
    <Wrapper>
      <div className="my-6 py-6 bg-slate-300">
        <div className="container mx-auto mb-10 text-center">
          <h2 className="text-4xl font-bold">Từ vựng JLPT N2</h2>
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-5">
          {/* -------- Single item -------- */}
          {data?.vocalbularies?.map((item) => (
            <div key={item.id} className="my-3 mx-3 px-2 py-2">
              <div>
                <h1 className="text-3xl">{item.vocalbularyName}</h1>
                <h2 className="text-xl">{item.furigana}</h2>
                <h2 className="text-2xl font-bold">{item.hantuVietnam}</h2>
              </div>
              <div className="text-xl text-slate-500">{item.volcabularyMeaning.raw.children[0].children[0].text}</div>
              
            </div>
          )
          )}
        </div>    
      </div>      
    </Wrapper>
  );
  
}
