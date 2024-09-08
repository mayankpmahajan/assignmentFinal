import ShimmerButton from '../components/magicui/shimmer-button'

const Contact = () => {
  return (
    <main className='bg-white w-full relative z-10 mt-2 md:mt-[-4rem] rounded-xl p-4'>

        <h1 className='text-xl font-semibold' >Exhibhitor Contact</h1>

        <section className='mt-4 grid grid-cols-3 gap-4 text-xs'>
            
                <div className=''>Name</div>
                <div className='col-span-2 font-medium'>Rajesh Kumar</div>
        

            
                <div className=''>Email</div>
                <div className='col-span-2 font-medium'>RajeshKumar@gmail.com</div>
            

            
                <div className=''>Phone</div>
                <div className='col-span-2 font-medium'>+91 6230126530</div>
            

            
                <div className=''>Address</div>
                <div className='col-span-2 font-medium'>B702, Pramukh Plaza, Cardinal Gracious Rd, near Western Express Metro Station, Andheri East, Mumbai, Maharashtra 40059</div>
            

        
                <div className=''>Website</div>
                <div className='col-span-2 font-medium flex flex-row space-x-2 items-center'>
                    <img src="./icons/link.png" alt="link icon" className='h-4' />
                    <a href="/" className='text-blue-800'>www.zolonihere.com</a>
                </div>

                <div>Social</div>

            <section className='flex flex-row gap-2'>
                <img src="./icons/facebook.png" alt="facebook logo" className='h-8'/>
                <img src="./icons/instagram.png" alt="instagram logo" className='h-8'/>
                <img src="./icons/linkedin.png" alt="linkedin logo" className='h-8'/>
                <img src="./icons/x.png" alt="x logo" className='h-8'/>
            </section>

            <section className='col-span-3'>
            <ShimmerButton 
            background="rgba(123,14,240,1)"
            type="button"
            className="h-10 w-full flex rounded-md border-black border-[1px] items-center justify-center"
          >
            <h1 className="">Contact Us</h1>
          </ShimmerButton>
            </section>

            
        </section>
    </main>
  )
}

export default Contact