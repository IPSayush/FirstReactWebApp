import { FooterContaint, AboutContaint } from '../Database.js'

const About = () => {
  return (
    <>
      <section className="text-gray-400 font-serif bg-[#141414]">
        <div className="container px-5 py-24 mx-auto">

          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-indigo-500">
              {AboutContaint.Heading}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {AboutContaint.Description}
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            <TeamCard
              Profile={AboutContaint.Card1.Image}
              Name={AboutContaint.Card1.Name}
              Position={AboutContaint.Card1.Position}
            />
            <TeamCard
              Profile={AboutContaint.Card2.Image}
              Name={AboutContaint.Card2.Name}
              Position={AboutContaint.Card2.Position}
            />
            <TeamCard
              Profile={AboutContaint.Card3.Image}
              Name={AboutContaint.Card3.Name}
              Position={AboutContaint.Card3.Position}
            />
            <TeamCard
              Profile={AboutContaint.Card4.Image}
              Name={AboutContaint.Card4.Name}
              Position={AboutContaint.Card4.Position}
            />
            <TeamCard
              Profile={AboutContaint.Card5.Image}
              Name={AboutContaint.Card5.Name}
              Position={AboutContaint.Card5.Position}
            />
            <TeamCard
              Profile={AboutContaint.Card6.Image}
              Name={AboutContaint.Card6.Name}
              Position={AboutContaint.Card6.Position}
            />
            <TeamCard
              Profile={AboutContaint.Card7.Image}
              Name={AboutContaint.Card7.Name}
              Position={AboutContaint.Card7.Position}
            />
            <TeamCard
              Profile={AboutContaint.Card8.Image}
              Name={AboutContaint.Card8.Name}
              Position={AboutContaint.Card8.Position}
            />
            <TeamCard
              Profile={AboutContaint.Card9.Image}
              Name={AboutContaint.Card9.Name}
              Position={AboutContaint.Card9.Position}
            />
            
          </div>
        </div>
      </section>
    </>
  )
}
const TeamCard = ({ Profile, Name, Position }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full ">
      <div className="h-full flex items-center border-gray-500 border p-4 rounded-lg bg-[#222222]">

        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4"
          src={Profile}
        />
        <div className="grow">
          <h2 className="text-indigo-500 title-font font-medium">{Name}</h2>
          <p className="text-gray-500">{Position}</p>
        </div>
      </div>
    </div>
  )
}

export default About
