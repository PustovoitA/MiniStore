
const SkeletonCard = () => {
    return (
        <div className="spinning-border flex flex-col items-center bg-gray-200 gap-2 w-full">
            <div className="image_block group flex flex-col items-center w-full aspect-3/4 relative overflow-hidden">
              <div className="object-cover h-full w-full cursor-pointer animate-pulse"/>
            </div>
            <div className="inf0_block flex items-center justify-between font-[Jost] w-full text-[18px]"></div>
        </div>
    )
}
export default SkeletonCard