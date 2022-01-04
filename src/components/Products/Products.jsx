import { useEffect, useState } from "react";
import baseURL from "../../api";
import ProductCard from "./ProductCard";


function Products() {
  
  const [data, setData] = useState([])
  console.log(data)
  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((json) => {
        console.log("json",json)
        setData(json);
      });
  }, []);

  return <>
  <div className="container">
  <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-3">
  {data.map ((item,index) => 
    (<ProductCard name={item.name} key={item.id} img={item.image_url} date={item.first_brewed} />)
  
    )}
  </div>
  


  </div>


    
    
  </> 
  
}
export default Products;
