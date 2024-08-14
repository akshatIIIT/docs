import React from 'react'

function Background() {
  return (
    <>
        <div className="w-full h-screen fixed z-[2]">
            <div className=" absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold">Documents.</div>
            <h1 className="font-semibold text-zinc-900 -translate-y-[50%] -translate-x-[50%] absolute left-1/2 top-1/2 text-[13vw] leading-none tracking-tighter">Docs.</h1>
        </div>
    </>
  )
}

export default Background;