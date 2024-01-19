const CardProduct = ({ name, desc, price }: any) => {
  return (
    <div className="bg-zinc-200 px-2 py-1 flex flex-col justify-between">
        <div className="bg-zinc-500 h-[200px]">
          <span className="text-zinc-500">aaaa</span>
        </div>
        <h2>{name}</h2>
        {/* <h2>{desc}</h2> */}
        <span>{price}</span>
    </div>
  )
}

export default CardProduct;