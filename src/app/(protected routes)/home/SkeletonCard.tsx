
const SkeletonCard = () => {
  return (
    <div className="bg-zinc-200 px-2 py-2 flex flex-col justify-between rounded shadow-sm">
    <div className="bg-zinc-500 h-[200px] rounded animate-pulse">
      <span className="text-zinc-500"></span>
    </div>
    <div className="flex justify-between py-2">
      <div className="animate-pulse">
        <h2 className="animate-pulse"></h2>
        <span className="animate-pulse"></span>
      </div>
      <div className="animate-pulse">
        <button>
        </button>
      </div>
    </div>
</div>
  )
}

export default SkeletonCard;