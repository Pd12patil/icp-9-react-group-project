import StaplesData from "../../config/staples.json";
import Navbar from "../Navbar/Navbar";
import StaplesCard from "./StaplesCard";
function Blogs() {
  return (
    <div>
        <Navbar/>
        <h1 className="text-4xl py-4 font-bold ml-10">Staples</h1>
        <div className="flex flex-wrap justify-center">
        {StaplesData.map((blogsDetailsObjects)=> {
            const{ id, 
                name,  
                pimage, 
                price,
                newprice,
                description 
            } = blogsDetailsObjects;
            

            return (
                <StaplesCard 
                key={id} 
                id={id}
                pimage={pimage}
                name={name} 
                newprice={newprice} 
                price={price}
                description={description}/>
            )
        })}
        </div>
    </div>
  )
}

export default Blogs