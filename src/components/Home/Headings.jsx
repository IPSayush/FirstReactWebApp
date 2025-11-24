import React from 'react'

export default function Headings(props) {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container p-5 mx-auto">
                    <div className="text-center">
                        <h1 className="sm:text-3x1 text-2xl font-medium title-font text-[#e6ffe6] mb-4">{props.HeadingsContaint.Title}</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300">
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
