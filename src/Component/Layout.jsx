import React from 'react'

const Layout = (props) => {
  return (
    <>
        <section className="text-gray-400 font-serif bg-[#141414]">
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="flex w-full mb-8 flex-wrap ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-indigo-500 lg:w-1/3 lg:mb-0 mb-4">{props.LayoutContaint.Heading}</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">{props.LayoutContaint.Description}</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={props.LayoutContaint.img1} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={props.LayoutContaint.img2}/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={props.LayoutContaint.img3} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src={props.LayoutContaint.img4}/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={props.LayoutContaint.img5}/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src={props.LayoutContaint.img6}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Layout
