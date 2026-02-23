
const FooterBottom = () => {
  return (
    <div className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        
        <div className="flex items-center gap-3">
          <span>We ship with:</span>
          <span className="font-semibold text-gray-400">DHL</span>
        </div>

        <div className="flex items-center gap-3">
          <span>Payment options:</span>
          <span className="bg-gray-200 px-2 py-1 text-xs rounded">VISA</span>
          <span className="bg-gray-200 px-2 py-1 text-xs rounded">MasterCard</span>
          <span className="bg-gray-200 px-2 py-1 text-xs rounded">PayPal</span>
        </div>

        <div className="text-center md:text-right">
          © Copyright 2023 MiniStore. Design by{" "}
          <span className="underline cursor-pointer hover:text-gray-700 transition">
            TemplatesJungle
          </span>
        </div>

      </div>
    </div>
  );
};

export default FooterBottom;