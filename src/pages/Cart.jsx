import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
 
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div >
  {
    cart.length > 0  ? 
    (<div className="flex flex-col md:flex-row gap-5 justify-center items-center md:items-start  mx-auto">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="md:w-[400px] w-[300px] flex flex-col justify-between   " >

        <div className="flex flex-col gap-5" > 
          <div className="text-3xl font-bold w-full flex justify-center mt-10 border-b-2 border-black">Your Cart</div>
          <div className="w-full text-2xl font-semibold flex justify-start px-5">Summary :</div>
          <p className="w-full text-xl text-green-600 font-semibold flex justify-start px-5">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col gap-5 pb-10">
          <p className="text-xl px-5  font-semibold">Total Amount: <span className="text-green-600"> ${totalAmount}</span></p>
          <button className="px-5 bg-black text-white text-xl font-semibold py-3 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-black">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex flex-col h-screen justify-center items-center gap-5">
      <h1 className="text-3xl font-semibold ">Cart Empty</h1>
      <Link to={"/Shopping-cart"}>
        <button className="bg-black text-2xl text-white rounded-md py-3 px-5 ">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
