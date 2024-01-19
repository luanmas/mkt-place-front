import { Eye } from "lucide-react";

const CardProduct = ({ name, price }: any) => {
  return (
    <div className="bg-zinc-200 px-2 py-2 flex flex-col justify-between rounded shadow-sm">
        <div className="bg-zinc-500 h-[200px] rounded">
          <span className="text-zinc-500">aaaa</span>
        </div>
        <div className="flex justify-between py-2">
          <div>
            <h2>{name}</h2>
            <span>Price: {price}</span>
          </div>
          <div>
            <button>
              <Eye />
            </button>
          </div>
        </div>
    </div>
  )
}

export default CardProduct;