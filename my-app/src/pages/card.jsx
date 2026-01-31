import React, { useEffect } from 'react'
import { Minus ,Plus , Trash} from 'lucide-react';

import { delelte , increase, discrease} from '../feature/getProductData/getData';

import { useDispatch, useSelector } from 'react-redux';

const Card = () => {
  const [total, SetTotal] = React.useState(0)

  const dispatch = useDispatch()
  const CardList = useSelector((state)=>{return state.productDate.card})||[]

  useEffect(()=>{
    const handeletotal = CardList.map(
      (item)=>{
        const x = item.price * item.quantity
        SetTotal(prev => prev+x)

      }
    )
  },[CardList])
  

  return (
    <div className=' container relative mb-24 mt-16 pt-4 md:px-24  m-auto bg-neutral-content'>
      <div className="flex gap-14 w-full flex-col-reverse md:flex-row   justify-between">
        <div className="md:w-2/3 w-full flex flex-col gap-5 ">
          {CardList.map((item) => {
            return (
              <div key={item.id} className='md:h-48  p-4 relative flex md:flex-row flex-col gap-4 rounded-2xl bg-white text-neutral w-full'>

                {/* delete div */}
                <div onClick={()=>{dispatch(delelte(item.id))}} className="btn btn-error btn-ghost text-4xl absolute p-2 top-2 right-2"><Trash/></div>
                {/* -------------- */}

                {/* Image div */}

                <div className=" md:w-1/4 md:h-full w-full h-1/2 shadow-sm rounded-3xl">
                <img src={item.image} alt={item.title} className='m-auto h-full' /></div>
                {/* -------------- */}

                {/* Text Div */}
                <div className="flex flex-col h-full justify-between">
                  <h5 className='text-2xl'>{item.title}</h5>
                  <div className="flex gap-4">
                    <p>${item.price}*{item.quantity}</p>
                    <p>${(item.price)*(item.quantity)} </p>
                  </div>
                </div>
                {/* -------------- */}

                {/* Actions Div */}
                <div className="flex  h-full items-end gap-5 ">
                  <div onClick={()=>{dispatch(discrease(item))}} className="btn btn-error btn-ghost"><Minus/></div>
                  <div className="text-lg mb-2">{item.quantity}</div>
                  <div onClick={()=>{dispatch(increase(item))}} className="btn btn-success btn-ghost"><Plus/></div>
                </div>
                {/* ---------------- */}



              </div>
            )
          })}
        </div>
        <div className="md:w-3/12 w-full p-4 h-48 rounded-2xl bg-white text-neutral">
          <h4 className='text-lg'>Card Summary</h4>
          <div className="divider divider-neutral " />
          <p className="text-shadow-md text-sm text-base-100">total price :</p>
          <p>{total.toFixed(2)}$</p>
        </div>
      </div>
    </div>
  )
}

export default Card