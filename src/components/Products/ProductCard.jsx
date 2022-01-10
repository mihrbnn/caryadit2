function ProductCard({ id, name, img, date }) {
  return (
    <>
      <div key={id} className="card border-1 my-5">
        <div className="image-box">
          <img src={img} className="card-img-top img" alt="..." />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">First Brewed In: {date}</p>
        </div>
      </div>
    </>
  );
}
export default ProductCard;
