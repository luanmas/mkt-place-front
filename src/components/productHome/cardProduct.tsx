const CardProduct = ({ name, desc, price }: any) => {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{desc}</h2>
        <span>{price}</span>
    </div>
  )
}

export default CardProduct;