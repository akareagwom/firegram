// import Navbar from "../components/Navbar";
import Nav from "../components/Nav"



const LandingPage = () => {
    

    return ( 
        <div className="bg-hero h-screen bg-cover bg-center bg-no-repeat brightness-75 pt-0">
           <div>
            {/* <Navbar/> */}
            <Nav/>
           </div>
            <section className="brightness-90 w-80  rounded justify-center mt-80  ml-7 text-center  lg:w-sized lg:h-72 lg:mt-44 ">
                <h1 className="text-3xl lg:text-6xl text-orange-400">ZAMYEN STUDIOS</h1>
                <p className="text-white">A photograph is a gift of science which is always close to heart. Because it contains memories of people near &far. Every photo simple or complex has a story to stay after Becomes fresh in our mind. It is a creation very small but is full of details, movement &emotions of a person.</p>
                <button className=" bg-orange-400 h-8 w-32 rounded mt-6 text-slate-50">BOOK NOW</button>
            </section>
        </div>
     );
}
 
export default LandingPage;