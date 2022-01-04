function ProductCard({id,name,img,date}) {
  return <>

<div key={id} className="card border-0 my-5">
  <img src={img} className="card-img-top img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">First Brewed in: {date}</p>
  </div>
</div>

  
  </>
 

    
  





}
export default ProductCard;
