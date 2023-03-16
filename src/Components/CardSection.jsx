import React, { useEffect, useState } from "react";
import Card from "./Card";
import {getPastels} from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";



export default function CardSection() {



    const dispatch = useDispatch();
    const pastels = useSelector((state) => state.pastels);



    useEffect(() => {
        dispatch(getPastels())
    }, [dispatch])

    console.log(pastels,"pasteles")


    if (pastels.length > 1) {  
  return (
            <div id="pasteles" className="bg-indigo-50">
                <div className="bg-indigo-50 container px-6 py-10 mx-auto">
                  <h1 className="text-3xl font-bold text-gray-800 capitalize lg:text-4xl dark:text-white">Pasteles</h1>
                            
                      <div className="mt-2">
                             <span className="inline-block w-40 h-1 rounded-full bg-orange-100"></span>
                             <span className="inline-block w-3 h-1 ml-1 rounded-full bg-orange-100"></span>
                            <span className="inline-block w-1 h-1 ml-1 rounded-full bg-orange-100"></span>
                      </div>
                 </div>
    <div className="flex w- p-0 justify-between pl-20 flex-wrap bg-indigo-50">
     {pastels.map((e) => {
      return (
        <Card
          pastelid={e.id}
          name={e.name}
          price={e.price}
          price2={e.price2}
          price3={e.price3}
          longitud={e.longitud}
          longitud2={e.longitud2}
          longitud3={e.longitud3}
          image={e.image}
          description={e.description}
        />
      );
    })}
  </div>
  </div>
  )
  } else {
    return <div class="flex justify-center items-center h-screen bg-indigo-50">
    <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-orange-300 via-orange-200 to-orange-100 ">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-indigo-50 rounded-full border-2 border-white"></div>
    </div>
</div>
  }
};

