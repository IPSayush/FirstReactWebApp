import React from 'react'

const Hero = (props) => {
  return (
    <>
      <section className="text-gray-100 font-serif bg-[url('newbgimg2.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded-4xl border-2 border-gray-800" alt="hero" src="https://d248k8q1c80cf8.cloudfront.net/WK_Black_Edition_Gruppe_695adb442d.jpg" />
          </div>
          <div className="lg:grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-500">{props.HeroContaint.Heading}</h1>
            <p className="mb-8 leading-relaxed">{props.HeroContaint.Description}</p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label htmlFor="hero-field" className="leading-7 text-sm text-gray-100">{props.HeroContaint.InputLabel}</label>
                <input type="text" id="hero-field" name="hero-field" className="w-full bg-transparent bg-opacity-50 rounded border border-[#333333] focus:ring-1 focus:ring-gray-100 focus:bg-transparent focus:border-gray-100 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button className="inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg">{props.HeroContaint.Button}</button>
            </div>
            <p className="text-sm mt-2 text-indigo-500 mb-8 w-full">{props.HeroContaint.EndLine}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
