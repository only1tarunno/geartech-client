import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddproduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const productType = form.productType.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const product = {
      photo,
      name,
      brand,
      productType,
      price,
      rating,
      description,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
        Swal.fire({
          title: "Product is Added",
          text: "Please add more",
          icon: "success",
        });
      });
  };
  return (
    <div className="container mx-auto px-5 lg:px-0 py-12">
      <h2 className="text-center text-[#0a0b09] text-3xl lg:text-6xl font-bold">
        Add product
      </h2>
      <div className="card mx-auto w-full pt-10 max-w-2xl shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleAddproduct}>
          <div className="form-control">
            <label className="label" htmlFor="photo">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              id="photo"
              placeholder="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="form-control flex-1">
              <label className="label" htmlFor="brand">
                <span className="label-text">Brand name</span>
              </label>
              <select
                required
                className="input input-bordered"
                name="brand"
                id="brand"
              >
                <option value="apple">Apple</option>
                <option value="sony">Sony</option>
                <option value="samsung">Samsung</option>
                <option value="google">Google</option>
                <option value="intel">Intel</option>
                <option value="xiaomi">xiaomi</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label" htmlFor="prType">
                <span className="label-text">Type</span>
              </label>
              <select
                required
                className="input input-bordered"
                name="productType"
                id="prType"
              >
                <option value="phone">phone</option>
                <option value="computer">computer</option>
                <option value="headphone">headphone</option>
                <option value="watch">watch</option>
                <option value="pad">pad</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div className="form-control flex-1">
              <label className="label" htmlFor="price">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                id="price"
                placeholder="price"
                className="input input-bordered"
                name="price"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label" htmlFor="rating">
                <span className="label-text">Rating</span>
              </label>
              <input
                placeholder="input rating"
                className="input input-bordered"
                type="number"
                id="rating"
                name="rating"
                min="1"
                max="5"
                required
              />
            </div>
          </div>
          <div className="form-control flex-1">
            <label className="label" htmlFor="description">
              <span className="label-text">Description</span>
            </label>

            <textarea
              className="border rounded-md pt-4 pl-4"
              name="description"
              id=" description"
              placeholder="Description"
              rows="4"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn  bg-[#54595f] hover:bg-[#323538] border-[#54595f] hover:text-white text-white text-base md:text-xl">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
