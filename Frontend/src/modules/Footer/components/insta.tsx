
const images = [
  "https://images.unsplash.com/photo-1717765960938-58f2d7e2017f?q=80&w=1180&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1770718964312-7c70c2d09603?q=80&w=1170&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1637935401949-590f8014a9dc?q=80&w=687&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606741965326-cb990ae01bb2?q=80&w=687&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501163268664-3fdf329d019f?q=80&w=1170&auto=format&fit=crop",
];

const Insta = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-2xl font-[Jost] tracking-wide">
        SHOP OUR INSTA
      </h1>

      <ul className="flex w-full h-60 justify-between">
        {images.map((src, i) => (
          <li
            key={i}
            className="relative h-full w-65 cursor-pointer overflow-hidden group"
          >
            <img
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              src={src}
              alt="insta image"
            />

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              
              <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M7.75 2C4.575 2 2 4.575 2 7.75v8.5C2 19.425 4.575 22 7.75 22h8.5C19.425 22 22 19.425 22 16.25v-8.5C22 4.575 19.425 2 16.25 2h-8.5zm0 2h8.5C18.545 4 20 5.455 20 7.75v8.5C20 18.545 18.545 20 16.25 20h-8.5C5.455 20 4 18.545 4 16.25v-8.5C4 5.455 5.455 4 7.75 4zm4.25 3.5A4.75 4.75 0 1 0 16.75 12 4.756 4.756 0 0 0 12 7.5zm0 2A2.75 2.75 0 1 1 9.25 12 2.753 2.753 0 0 1 12 9.5zm5.25-.75a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/>
                </svg>
              </div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Insta;