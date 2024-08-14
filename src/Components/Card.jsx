import React from 'react'
import { IoMdDownload } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaRegFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={3} className=" relative flex-shrink-0 w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden">
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0 ">
            <div className="flex items-center justify-between mb-3 px-8 py-1.5">
                <h5>{data.fileSize}</h5>
                <span className="w-6 h-6 flex items-center rounded-full justify-center bg-zinc-800">
                    {data.close ? <IoClose />: <IoMdDownload />}
                </span>
            </div>
            {
            data.tag.isOpen && (            
                <div className={`w-full py-3 ${data.tag.tagColor==="green" ? "bg-green-600":"bg-sky-600"} flex items-center justify-center`}>
                <h3 className=" text-md font-semibold">{data.tag.tagTitle}</h3>
            </div>)
            }
        </div>
            
    </motion.div>
  );
}

export default Card