
const Contacts = () => {
  return (
    <div className="w-full sm:w-62.5 flex flex-col gap-2">
      <h1 className="font-[Jost] text-xl tracking-wider">CONTACT US</h1>

      <ul className="flex flex-col gap-4 font-[Jost]">
        <li className="leading-5">
          <p className="text-(--grey-text-color) text-[18px] font-[Jost]">
            Do you have any queries or suggestion?
          </p>
          <a className="underline text-[18px]" href="#">yourinfo@gmail.com</a>
        </li>

        <li className="leading-5">
          <p className="text-(--grey-text-color) text-[18px] font-[Jost]">
            If you need support? Just give us a call.
          </p>
          <a className="underline text-[18px]" href="#">+55 111 222 333 44</a>
        </li>
      </ul>
    </div>
  )
}

export default Contacts