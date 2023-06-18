import WrapperChild from "../layout/wrapper-child";
import { RichText } from "@graphcms/rich-text-react-renderer";

import { getAllJlpt} from "../lib/jplpt-db";

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
    <WrapperChild>
      <div className="mt-6 py-6 bg-slate-100">
        <div className="container mx-auto mb-10 text-center">
          <h2 className="text-4xl font-bold py-5">Từ vựng JLPT N2</h2>          
        </div>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 ">
          {/* -------- Single item -------- */}
          {data?.vocalbularies?.map((item) => (            
            <div key={item.id} className="my-3 mx-3 px-2 py-2 relative ">
              {/* <div className="px-2 py-1 bg-lime-500 rounded absolute right-0">
                <span className="text-white ">{item.level}</span>
              </div>               */}
              <div>
                <h1 className="text-4xl mb-2">{item.vocabulary}</h1>
                <h2 className="text-xl text-slate-500">{item.furigana}</h2>
                <h2 className="text-xl font-bold text-slate-800 uppercase ">{item.hantuVietnam}</h2>
              </div>              
              <div className="text-sm lowercase text-slate-500  ">
                <RichText content={item.volcabularyMeaning.raw.children} />
              </div>
            </div>
          )
          )}
        </div>           
      </div>
      <div className="text-gray-500 text-center py-5">
        &copy;{new Date().getFullYear()} Bao Blogs&Portfolio
      </div>      
    </WrapperChild>
  );
  
}
