import oilsData from "../../config/oilsc.json"
import Navbar from "../Navbar/Navbar";
import OilsCard from "./OilsCard";
function OilsC() {
  return (
    <div>
        <Navbar/>
        <h1 className="text-4xl py-4 font-bold ml-10">Oils</h1>
        <div className="flex flex-wrap justify-center">
        {oilsData.map((blogsDetailsObjects)=> {
            const{ id, 
                name,  
                pimage, 
                price,
                newprice,
                description 
            } = blogsDetailsObjects;
            

            return (
                <OilsCard 
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

export default OilsC