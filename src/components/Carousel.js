const Carousel = ({children:slides}) => {
    return ( 
        <div className="overflow-hidden relative">
            <div className="flex ">{slides}</div>
        </div>
     );
}
 
export default Carousel;