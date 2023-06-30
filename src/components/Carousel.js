import angleR from '../images/angle-right.svg'
import angleL from '../images/angle-left.svg'
import React from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather';

const Carousel = ({children:slides}) => {
    return ( 
        <div className="overflow-hidden relative">
            <div className="flex opacity-100">{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button className='p-1 rounded-full bg-orange-400 opacity-80 hover:bg-orange-300'>
                    <ChevronLeft size={40}/>

{/* stopped here for the day                   */}
                </button>

               <button className='p-1 rounded-full bg-orange-400 opacity-80 hover:bg-orange-300'>
                    <ChevronRight size={40}/>
                    {/* stopped here for the day */}
                  
                </button>
                  
            </div>
        </div>
     );
}
 
export default Carousel;