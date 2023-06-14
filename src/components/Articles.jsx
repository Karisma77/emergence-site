import React from 'react'
import { articles } from '../data/articles'

function Articles() {

  return (
    <div className='flex flex-row flex-wrap gap-[52px] justify-center'>
        { articles.map((article, index) => (
            <div className='relative w-[350px] bg-white'>
                <img src={article.image} alt="" className='w-full' />
                <div className='px-[10px] pt-[10px] pb-3 bg-primary text-white text-xs w-fit absolute top-[270px] translate-y-[-50%] left-[35px]'>{article.tag}</div>
                <div className='px-9 py-7 flex flex-col gap-2'>
                    <p className='text-[10px] font-medium text-grayed italic'>{article.date}</p>
                    <h4 className='text-base font-bold text-black'>{article.title}</h4>
                    <p className='text-[13px] font-extralight text-black'>{article.preview}</p>
                </div>
            </div>
        )) }
    </div>
  )
}

export default Articles