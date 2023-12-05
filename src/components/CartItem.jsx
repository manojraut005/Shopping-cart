
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="max-w-[700px] mt-10 border-b-2 border-black mx-5" >

      <div className="flex gap-10 mb-5">

        <div className="flex justify-center w-1/4 items-center">
          <img  className="" src={item.image} />
        </div>
        <div className="flex flex-col w-3/4 items-start justify-between ">
          <h1 className="text-xl font-semibold mb-3">{item.title}</h1>
          <h1 className="text-md ">{item.description}</h1>
          <div className="flex justify-between items-center w-full pr-10">
            <div>
            <p className="text-xl text-green-600">$ {item.price}</p>
            </div>
            
            <div
            className="text-xl bg-red-500 rounded-full p-3"
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
