function ProductCard({ id, name, img, date }) {
  return (
    <div className="col">
      <div key={id} id="card" className="card  button-border border-1 my-4 p-3">
        <div className="image-box">
          <img src={img} className="card-img-top img" alt="..." />
        </div>
        <div className="card-body text-center">
          <h6 className="card-title text-primary">{name}</h6>
          <p className="card-text fs-6">
            <b>First Brewed In:</b> {date}
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
