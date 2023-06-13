import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import apiUrl from '../apiUrl'
import left from "/img/left.svg";
import right from "/img/right.svg";

export default function Carousel(){
  const [categories,setCategories] = useState([])
  const [counter,setCounter] = useState(0)
  useEffect(
      ()=> {
          axios(apiUrl+'/categories')
              .then(res=> {
                  //console.log(res)
                  setCategories(res.data.response)
              })
              .catch(err=>console.log(err))
      },
      []
  )
  
  const next = () => {
    if (counter == categories.length-1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
      console.log(counter);
    }
  };

  const prev = () => {
    if (counter == 0) {
      setCounter(categories.length-1)
    }else{
      setCounter(counter - 1);
      console.log(counter);
    }
  };


    return(
        <div className="hidden lg:inline-flex lg:mt-[19%] h-[380px] bg-white w-full items-center justify-center">
        <div className="flex w-[90%] h-[265px] items-center justify-between rounded-md" style={{backgroundColor: categories[counter]?.color}}>
          <img src={left} className="ps-3 cursor-pointer" alt="Previous" onClick={prev}/>
          <div className="flex mb-12 mr-8">
            <img
              src={categories[counter]?.character_photo}
              className="w-[276px] h-[306px] mr-16"
              alt=""
            />
            <img src={categories[counter]?.cover_photo} className="w-[180px] h-[270px]" alt="" />
          </div>

          <div className="text-white w-[25%] h-[93px] flex flex-col justify-center">
            <h1 className="font-bold text-2xl font-roboto" style={{ color: categories[counter]?.hover }}>{categories[counter]?.name.toUpperCase()}</h1>
            <p className="font-roboto text-sm color-black" style={{ color: categories[counter]?.hover }}>
              {categories[counter]?.description}
            </p>
          </div>
          <img src={right} className="pr-3 cursor-pointer" alt="Next" onClick={next}/>
        </div>
      </div>
    )
}