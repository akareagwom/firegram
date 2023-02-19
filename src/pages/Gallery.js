import Carousel from "../components/Carousel";
import Nav from "../components/Nav"

const slides = [
    "https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
];

const Gallery = () => {
    return (  
        <div className="bg-hero h-screen bg-cover bg-center bg-no-repeat brightness-75 pt-0">
            <div>
                <Nav/>
            </div>
            <div className="max-w-lg">
                <Carousel>
                    {slides.map((slide) =>(
                        <img src={slide} alt=""/>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
 
export default Gallery;