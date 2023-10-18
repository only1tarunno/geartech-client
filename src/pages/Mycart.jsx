import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provides/AuthProvider";
import Swal from "sweetalert2";

const Mycart = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);
  const email = user.email;

  useEffect(() => {
    fetch(
      `https://assingment-10-server-qofmekhcb-only1tarunnos-projects.vercel.app/cart/${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assingment-10-server-qofmekhcb-only1tarunnos-projects.vercel.app/cartDel/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then(() => {
            const remaining = products.filter((product) => product._id !== id);
            setProducts(remaining);
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className=" bg-[#eff4ff] py-10">
      <h2 className="text-center text-3xl font-bold mb-10">My Cart</h2>
      {products.length > 0 ? (
        <div className="container mx-auto px-5  lg:px-0 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex items-center w-full gap-5 lg:gap-10 bg-base-100 p-5 rounded-lg"
            >
              <div>
                <img src={product.photo} className="w-28 object-cover" alt="" />
              </div>
              <div>
                <h2 className="font-bold text-2xl">{product.name}</h2>
                <p className="font-medium">Price: ${product.price}</p>
                <div className="mt-4 ">
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn body-btn bg-transparent text-[#0a0b09] hover:text-white border-[#54595f] text-base md:text-xl"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-center col-span-2 font-bold text-3xl">
            You Have Added 0 Product
          </h2>
        </div>
      )}
    </div>
  );
};

export default Mycart;
