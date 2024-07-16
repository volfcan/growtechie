import React from "react";

import type { NextPage, GetStaticProps } from "next";
import { workExperience } from "@/data";
// import { loadData } from "@/lib/load-data";
import { Button } from "./ui/MovingBorders";
// import { Hero3DCard } from "./hero-3d-caard";
import CardModel from "./card-model";
import { SimpleGrid } from "@chakra-ui/react";

// const Models = (props: any) => {
//   const models = props.data.models;

//   const displayModels = models.map((model: any, idx: any) => (
//     <CardModel key={idx} model={model}></CardModel>
//   ));
//   return (
//     <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 6 }}>
//       {displayModels}{" "}
//     </SimpleGrid>
//   );
// };

const Experience: NextPage = (props: any) => {
  return (
    <div>
      <div className="py-20 w-full">
        {/* <Hero3DCard /> */}

        <h1 className="heading">
          What you will <span className="text-purple">G</span>
        </h1>
      </div>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/

              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              {/* <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              /> */}
              {/* <Models data={props.data} /> */}
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
// export const getStaticProps: GetStaticProps = async (context) => {
//   const data = await loadData();
//   return { props: { data } };
// };
export default Experience;
