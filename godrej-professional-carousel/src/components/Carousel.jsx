import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loaderbox-shadow:;
import { Carousel } from 'react-responsive-carousel';


const CarouselComponent = ({imageData}) => {
  return (
    <div style={{width:"100%", margin:"auto", boxShadow:" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
        <Carousel
           ariaLabel="Image Carousel" // Define the aria-label attribute for accessibility
           axis="horizontal" // Set the direction of the slider, 'horizontal' is default
           autoFocus={true} // Automatically focus on the carousel when it renders
           autoPlay={true} // Automatically change the slide based on the interval prop
           interval={3000} // Set the interval for autoPlay in milliseconds
           infiniteLoop={true} // Optional: Enables infinite looping of slides
           showThumbs={false} // Optional: Hide the thumbnail indicators
           showStatus={false} // Optional: Hide the status indicators   
      >
          {imageData.map((el)=>(
            <div key={el.id} >
                <img style={{width:"100%", height:"420px", margin:"auto"}} src={el.url} alt='img2' />
            </div>
          ))}

      </Carousel>
    </div>
  )
}

export default CarouselComponent