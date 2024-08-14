import React,{useRef} from 'react'
import Card from './Card'
function Foreground() {
    const ref=useRef(null);
    const data=[
        {
            desc:"this is the background color of the will be displayed .",
            fileSize:".9mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },
        {
            desc:"this is the background color of the will be displayed .",
            fileSize:".9mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"sky"},
        },
        {
            desc:"this is the background color of the will be displayed .",
            fileSize:".9mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
        },

    ];
  return (
    <>
        <div ref={ref} className=" fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flexwrap-wrap p-10">
           {data.map((item,index)=>(
            <Card data={item} reference={ref} />
           ))}
        </div>
    </>
  )
}

export default Foreground