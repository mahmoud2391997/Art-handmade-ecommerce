import React, { useEffect } from "react";
import { Navbar, Collapse, Button, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

export default function NavBar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <Navbar color="transparent" fullWidth>
      <div className="container mx-auto my-6 flex items-center justify-between text-blue-gray-900">
        <div className="flex justify-center items-center gap-8">
          {/* //*| Logo component | */}
          <Logo />
          <div className="hidden lg:block">
            {/* //*| Nav Links component in lg| */}
            <NavLinks />
          </div>
        </div>
        <Button color="gray" className="hidden lg:inline-block">
          Sign in
        </Button>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          {open ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="mt-2 rounded-xl bg-white py-2">
          //*| Nav Links component in mobile and tablet |
          <NavLinks />
          <Button className="mb-2" fullWidth>
            Sign in
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}

// function NavItem({ label }) {
//   return (
//     <a href="#">
//       <Typography as="li" color="blue-gray" className="p-1 font-medium">
//         {label}
//       </Typography>
//     </a>
//   );
// }

// function NavList() {
//   return (
//     <ul className="mb-4 mt-2 flex flex-col gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
//       <NavItem label="About Us" />
//       <NavItem label="Pricing" />
//       <NavItem label="Contact Us" />
//     </ul>
//   );
// }

// import React from "react";
// import Logo from "./Logo";
// import NavLinks from "./NavLinks";

// export default function NavBar() {
//   return (
//     <div>
//       <nav class="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
//         <div class="flex items-center justify-between text-blue-gray-900 mx-20">
//           <a
//             href="#"
//             class="block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased"
//           >
//             <Logo />
//           </a>
//           <NavLinks />
//           <div class="flex items-center gap-4">
//             <div class="hidden mr-4 lg:block"></div>
//             <div class="flex items-center gap-x-1">
//               <button
//                 class="hidden px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
//                 type="button"
//               >
//                 <span>Log In</span>
//               </button>
//               <button
//                 class="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
//                 type="button"
//               >
//                 <span>Sign in</span>
//               </button>
//             </div>
//             <button
//               class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
//               type="button"
//             >
//               <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   class="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   stroke-width="2"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   ></path>
//                 </svg>
//               </span>
//             </button>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
