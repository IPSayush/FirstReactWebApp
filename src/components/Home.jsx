import React from 'react'
import Hero from './Home/Hero.jsx';
import Layout from './Home/Layout.jsx';
import Cards from './Home/Cards.jsx';
import Products from './Home/Products.jsx';
import Headings from './Home/Headings.jsx';
import Footer from './Home/Footer.jsx';
import {HeroContaint,LayoutContaint,HeadingsContaint,CardsContaint,ProductsContaint,FooterContaint} from '../Database.js'
// let HeroContaint = {
//   Heading: "Knausgaard typewriter readymade marfa",
//   Description: "Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.",
//   InputLabel: "Email",
//   Button: "Submit",
//   EndLine: "Neutra shabby chic ramps, viral fixie."
// }
// let LayoutContaint = {
//   Heading: "Master Cleanse Reliac Heirloom",
//   Description: "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.",
//   img1: "https://dummyimage.com/500x300",
//   img2: "https://dummyimage.com/501x301",
//   img3: "https://dummyimage.com/600x360",
//   img4: "https://dummyimage.com/601x361",
//   img5: "https://dummyimage.com/502x302",
//   img6: "https://dummyimage.com/503x303"
// }
// let HeadingsContaint = {
//   Heading1:{
//     Title: "Heading-1",
//     Description: "They This is Description for Heading"
//   },
//   Heading2:{
//     Title: "Heading-2",
//     Description: "They This is Description for Heading"
//   },
//   Heading3:{
//     Title: "Heading-3",
//     Description: "They This is Description for Heading"
//   }
// }
// let CardsContaint = {
//   Card1: {
//     Img: "https://dummyimage.com/720x400",
//     Category: "Category",
//     Title: "This is title 1",
//     Description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.1",
//     Button: "Learn more",
//     View: "1k",
//     Comments: 1
//   },
//   Card2: {
//     Img: "https://dummyimage.com/720x400",
//     Category: "Category",
//     Title: "This is title 2",
//     Description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.2",
//     Button: "Learn more",
//     View: "2k",
//     Comments: 2
//   },
//   Card3: {
//     Img: "https://dummyimage.com/720x400",
//     Category: "Category",
//     Title: "This is title 3",
//     Description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.3",
//     Button: "Learn more",
//     View: "3k",
//     Comments: 3
//   },
//   Card4: {
//     Img: "https://dummyimage.com/720x400",
//     Category: "Category",
//     Title: "This is title 4",
//     Description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.4",
//     Button: "Learn more",
//     View: "4k",
//     Comments: 4
//   },
//   Card5: {
//     Img: "https://dummyimage.com/720x400",
//     Category: "Category",
//     Title: "This is title 5",
//     Description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.5",
//     Button: "Learn more",
//     View: "5k",
//     Comments: 5
//   }
// }
// let ProductsContaint = {
//   Product1: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-1",
//     Price: "$1"
//   },
//   Product2: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-2",
//     Price: "$2"
//   },
//   Product3: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-3",
//     Price: "$3"
//   },
//   Product4: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-4",
//     Price: "$4"
//   },
//   Product5: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-5",
//     Price: "$5"
//   },
//   Product6: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-6",
//     Price: "$6"
//   },
//   Product7: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-7",
//     Price: "$7"
//   },
//   Product8: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-8",
//     Price: "$8"
//   },
//   Product9: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-9",
//     Price: "$9"
//   },
//   Product10: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-10",
//     Price: "$10"
//   },
//   Product11: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-11",
//     Price: "$11"
//   },
//   Product12: {
//     Image: "https://dummyimage.com/420x260",
//     Category: "Categrogy",
//     Title: "Title-12",
//     Price: "$12"
//   }
// }
// let FooterContaint = {
//   Cards: {
//     Card1: {
//       Title: "Shooting Stars",
//       Description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
//       Button: "Learn More"
//     },
//     Card2: {
//       Title: "The Catalyzer",
//       Description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
//       Button: "Learn More"
//     },
//     Card3: {
//       Title: "Neptune",
//       Description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.",
//       Button: "Learn More"
//     }
//   },
//   Button: "Button",
//   Description: "Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.",
//   SubHeading:"HOLDEN CAULFIELD",
//   SubDescription: "Senior Product Designer"
// }
const Home = () => {
  return (
    <>
      <div className='bg-[#F9F4FB]'>
        <Hero HeroContaint={HeroContaint} />
      </div>
      <div className='bg-[#B9BC97]'>
        <Layout LayoutContaint={LayoutContaint} />
      </div>
      <div className='bg-[#394024]'>
        <Headings HeadingsContaint={HeadingsContaint.Heading1}/>
      </div>
      <div className='bg-[#B9BC97]'>
        <Cards CardsContaint={CardsContaint} />
      </div>
      <div className='bg-[#394024]'>
        <Headings HeadingsContaint={HeadingsContaint.Heading2}/>
      </div>
      <div className='bg-[#B9BC97]'>
        <Products ProductsContaint={ProductsContaint} />
      </div>
      <div className='bg-[#394024]'>
        <Headings HeadingsContaint={HeadingsContaint.Heading3}/>
      </div>
      <div className='bg-[#B9BC97]'>
        <Footer FooterContaint={FooterContaint}/>
      </div>
    </>
  )
}
// className='bg-linear-to-r from-emerald-500 to-emerald-900' GOOD COLOR
export default Home;
