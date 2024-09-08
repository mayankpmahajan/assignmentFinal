import Business from './Business'
import Contact from './Contact'
import Overview from './Overview'
import PastEvents from './PastEvents'
import Gallery from './Gallery'
import Files from './Files'
import Members from './Members'
//import GalleryGrid from './Gallery'


  return (
    // <main className='bg-brand-secondary px-2 w-[99.1vw] h-screen flex flex-col'>
    //     <section className='flex flex-row space-x-4'>
    //         <Business></Business>
    //         <Contact></Contact>
            

    //     </section>

    //     <section className='flex flex-row space-x-4'>
    //         <Overview></Overview>
    //         <PastEvents></PastEvents>
    //     </section>

    //     <section className='flex flex-row space-x-4'>
            
    //     </section>
        
        
    // </main>


    <main className='bg-brandSecondary px-2 lg:px-16 xl:px-32 overflow-x-clip max-w-[99.1vw] h-full flex flex-col sm:flex-row md:space-x-4'>
        <section className='flex flex-col space-y-4 md:basis-2/3'>
            <Business></Business>
            <Overview></Overview>
            <Gallery></Gallery>
            {/* <GalleryGrid images = {images}></GalleryGrid> */}
            <Files></Files>
        </section>

        <section className='flex flex-col space-y-4 md:basis-1/3'>
            <Contact></Contact>
            <PastEvents></PastEvents>
            <Members></Members>
        </section>

        
        
    </main>
  )
}

export default Info