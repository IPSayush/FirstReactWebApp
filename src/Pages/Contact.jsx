import { FooterContaint, ContactContaint } from '../Database.js';

const Contact = (props) => {
  return (
    <>
      <section className="text-gray-400 font-serif relative ">
        <div className="absolute inset-0 bg-[#141414]">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src={ContactContaint.MapLink}
            style={{
              filter: "grayscale(1) contrast(1.2) opacity(0.4)",
              width: "100%",
              height: "100vh", // height needed for display
            }}
          ></iframe>

        </div>
        <div className="container px-5 py-24 mx-auto flex bg-[#141414]">
          <div className="lg:w-1/3 md:w-1/2 bg-[#222222] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-indigo-500 text-lg mb-1 font-medium title-font">{ContactContaint.Heading}</h2>
            <p className="leading-relaxed mb-5 text-gray-400">{ContactContaint.Description}</p>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">{ContactContaint.ContactType}</label>
              <input type="email" id="email" name="email" className="w-full bg-[#111111] rounded border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-400">{ContactContaint.Massage}</label>
              <textarea id="message" name="message" className="w-full bg-[#111111] rounded border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{ContactContaint.Button}</button>
            <p className="text-xs text-gray-500 mt-3">{ContactContaint.SubDescription}</p>
          </div>
        </div>
      </section>
      <div className='bg-[#B9BC97]'>
      </div>
    </>
  )
}

export default Contact