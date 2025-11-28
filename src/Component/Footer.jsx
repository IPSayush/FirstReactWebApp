import React from 'react';

/**
 * Safe Footer: uses optional chaining and defaults so it won't crash
 * if footerContaint is undefined or missing fields.
 */
export default function Footer({ FooterContaint }) {
  // Provide safe defaults
  // i was pass props nornamly but is was throwing error while clicking on navlink so i use Defauld Objects code is copied from chatgpt 
  // const cards = footerContaint?.Cards ?? {};
  // const card1 = cards?.Card1 ?? { Title: '', Description: '', Button: '' };
  // const card2 = cards?.Card2 ?? { Title: '', Description: '', Button: '' };
  // const card3 = cards?.Card3 ?? { Title: '', Description: '', Button: '' };

  // const mainButton = footerContaint?.Button ?? '';
  // const description = footerContaint?.Description ?? '';
  // const subHeading = footerContaint?.SubHeading ?? '';
  // const subDescription = footerContaint?.SubDescription ?? '';

  return (
    <>
      <section className="text-gray-400 font-serif bg-[#141414]">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {/* Card 1 */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-[#222222]">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="grow">
                <h2 className="text-indigo-500 text-lg title-font font-medium mb-3">{FooterContaint.Cards.Card1.Title}</h2>
                <p className="leading-relaxed text-base">{FooterContaint.Cards.Card1.Description}</p>
                <a href="#" className="mt-3 text-indigo-500 inline-flex items-center">{FooterContaint.Cards.Card1.Button}
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-[#222222]">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="grow">
                <h2 className="text-indigo-500 text-lg title-font font-medium mb-3">{FooterContaint.Cards.Card2.Title}</h2>
                <p className="leading-relaxed text-base">{FooterContaint.Cards.Card2.Description}</p>
                <a href="#" className="mt-3 text-indigo-500 inline-flex items-center">{FooterContaint.Cards.Card2.Button}
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center bg-[#222222]">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="grow">
                <h2 className="text-indigo-500 text-lg title-font font-medium mb-3">{FooterContaint.Cards.Card3.Title}</h2>
                <p className="leading-relaxed text-base">{FooterContaint.Cards.Card3.Description}</p>
                <a href="#" className="mt-3 text-indigo-500 inline-flex items-center">{FooterContaint.Cards.Card3.Button}
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">{FooterContaint.Button}</button>
        </div>
      </section>

      {/* ...rest of your footer sections unchanged but using safe values */}
      <section className="text-gray-400 font-serif bg-[#141414]">
        <div className="container px-5 py-0 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            {/* SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>

            <p className="leading-relaxed text-lg">{FooterContaint.Description}</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6" />

            <h2 className="text-indigo-500 font-medium title-font tracking-wider text-sm">{FooterContaint.subHeading}</h2>
            <p className="text-gray-500">{FooterContaint.subDescription}</p>
          </div>
        </div>
      </section>

      <footer className="text-gray-400 font-serif bg-[#141414]">
        <div className="container px-5 py-12 mx-auto">

          {/* ALL ROWS (3 categories + subscribe) */}
          <div className="flex flex-wrap justify-between gap-y-10">

            <CategoryLinks />
            <CategoryLinks />
            <CategoryLinks />

            {/* SUBSCRIBE BOX */}
            <div className="w-full sm:w-1/4 px-2">
              <h2 className="font-medium text-indigo-500 tracking-widest text-xs mb-3">SUBSCRIBE</h2>

              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#111111] rounded border border-[#333333] focus:ring-2 focus:ring-amber-950 focus:border-gray-500 py-2 px-3 text-sm outline-none"
                />
                <button className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition">
                  Subscribe
                </button>
              </div>

              <p className="text-gray-500 text-xs mt-3">
                Bitters chicharrones fanny pack
                <br className="hidden lg:block" />
                waistcoat green juice
              </p>
            </div>

          </div>
        </div>


        <div className="bg-[#141414] border-t-1">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-indigo-500" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Tailblocks</span>
            </a>

            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Tailblocks —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank" >@knyttneve</a>
            </p>

            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500" href="#">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500" href="#">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500" href="#">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500" href="#">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>

    </>
  );
}
const CategoryLinks = () => {
  return (
    <div className="w-1/3 sm:w-1/4 px-2 border-l-2">
      <h2 className="font-medium text-indigo-500 tracking-widest text-xs mb-3">
        CATEGORIES
      </h2>
      <nav className="list-none space-y-2" >
        <li><a className="text-gray-400 text-sm hover:text-gray-800" href="#">First Linky</a></li>
        <li><a className="text-gray-400 text-sm hover:text-gray-800" href="#">Second Link</a></li>
        <li><a className="text-gray-400 text-sm hover:text-gray-800" href="#">Third Link</a></li>
        <li><a className="text-gray-400 text-sm hover:text-gray-800" href="#">Fourth Link</a></li>
      </nav>
    </div>
  )
}