import dryfruitsData from "./../../config/dryfruits.json"
import Navbar from "../Navbar/Navbar";
import DryFruitsCard from "./DryFruitsCard";
import Footer from "../Footer/Footer";
function DryFruitsc() {
  return (
    <div>
        <Navbar/>
        <h1 className="text-4xl py-4 font-bold ml-10">Dry Fruits</h1>
        <div className="flex flex-wrap justify-center">
        {dryfruitsData.map((blogsDetailsObjects)=> {
            const{ id, 
                name,  
                pimage, 
                price,
                newprice,
                description 
            } = blogsDetailsObjects;
            

            return (
                <DryFruitsCard 
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
        <Footer/>
    </div>
  )
}

export default DryFruitsc