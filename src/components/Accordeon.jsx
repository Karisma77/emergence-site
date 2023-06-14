import React, { useState } from 'react'

function Accordeon(props) {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }

  return (
    <div className='max-w-[350px] w-full'>
        <p className='px-[15px] py-[5px] flex items-center justify-between capitalize border-b border-primary text-base cursor-pointer' onClick={toggle}>
            {props.title}
            { open === false ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
): (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
</svg>
) }
        </p>
            <p className={`px-3 py-[6px] text-xs font-light transition-all duration-200 ${open ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`} dangerouslySetInnerHTML={{ __html: props.content }} />
    </div>
  )
}

export default Accordeon