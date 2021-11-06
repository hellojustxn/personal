export const Navbar = () => {
  return (
    <div className="mx-2 sm:mx-0 pb-5 border-divider border-b-2 flex justify-between items-center relative">
      <div>
        <div className="text-2xl font-bold mr-4">Justxn</div>
        <div className="absolute -bottom-1.5 -left-1.5 bg-gradient-to-l w-36 h-2 from-purple-600 to-yellow-500 rounded-xl"></div>
      </div>
      <div className="flex space-x-10 items-center">
        {/* Links */}
        <div className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <button>Medium</button>
            </li>
            <li>
              <button>Github</button>
            </li>
          </ul>
        </div>

        {/* Profile */}
        <div className="font-bold hidden sm:block">hello@justxn.com</div>
        {/* <img
          src="../assets/beach-profile.jpg"
          alt="..."
          className="bg-beach-profile shadow rounded-full w-20 h-20 max-w-full align-middle border-none"
        /> */}

        <div className="bg-beach-profile w-10 h-10 rounded-full"></div>

        {/* <div>
          <img className="w-10 h-10" alt="" src="../assets/beach-profile.jpg"></img>
        </div> */}
      </div>
    </div>
  );
};
