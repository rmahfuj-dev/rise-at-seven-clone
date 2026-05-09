const Test = () => {
  return (
    <nav className="relative bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold">Brand</div>
          
          <ul className="flex space-x-8 h-full">
            <li className="flex items-center"><a href="#">Home</a></li>
            
            {/* Mega Menu Trigger */}
            <li className="group flex items-center h-full">
              <button className="hover:text-blue-400 py-4 cursor-default">
                Solutions ▾
              </button>

              {/* Mega Menu Container */}
              <div className="absolute left-0 top-16 w-full bg-white text-slate-800 shadow-xl border-t border-slate-200 
                              opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="max-w-7xl mx-auto grid grid-cols-4 gap-8 p-8">
                  
                  {/* Column 1 */}
                  <div>
                    <h3 className="font-bold text-blue-600 mb-4 uppercase text-sm tracking-wider">Development</h3>
                    <ul className="space-y-2">
                      <li className="hover:text-blue-500 cursor-pointer">Web Applications</li>
                      <li className="hover:text-blue-500 cursor-pointer">Mobile Apps</li>
                      <li className="hover:text-blue-500 cursor-pointer">Cloud Services</li>
                    </ul>
                  </div>

                  {/* Column 2 */}
                  <div>
                    <h3 className="font-bold text-blue-600 mb-4 uppercase text-sm tracking-wider">Design</h3>
                    <ul className="space-y-2">
                      <li className="hover:text-blue-500 cursor-pointer">UI/UX Design</li>
                      <li className="hover:text-blue-500 cursor-pointer">Graphic Design</li>
                      <li className="hover:text-blue-500 cursor-pointer">Branding</li>
                    </ul>
                  </div>

                  {/* Column 3 - Featured Content */}
                  <div className="col-span-2 bg-slate-50 p-6 rounded-lg border border-slate-100">
                    <h3 className="font-bold mb-2">New: AI Integration</h3>
                    <p className="text-sm text-slate-500 mb-4">
                      Explore our latest suite of tools designed to scale your backend automatically.
                    </p>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                      Learn More
                    </button>
                  </div>

                </div>
              </div>
            </li>

            <li className="flex items-center"><a href="#">Pricing</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Test ;