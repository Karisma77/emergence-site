import React from 'react'
import Heading from '../components/Heading'
import Articles from '../components/Articles'

function Blog() {

  const pageTitle = "actualités"

  return (
    <div>
      <Heading title={pageTitle} />
      <div className='max-w-7xl px-2 xl:px-[60px] py-8 xl:py-[170px] gap-6 xl:gap-[80px] mx-auto'>
        <Articles />
        <Articles />
      </div>
    </div>
  )
}

export default Blog