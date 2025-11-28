import React from 'react'

export default function Headings(props) {
    return (
        <>
            <section className="text-gray-400 font-serif bg-[#222222]">
                <div className="container p-3 mx-auto">
                    <div className="text-center">
                        <h1 className="sm:text-3x1 text-5xl font-medium title-font text-indigo-500 mb-4">{props.HeadingsContaint.Title}</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-blue-200">
                        {props.HeadingsContaint.Description}
                        </p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
