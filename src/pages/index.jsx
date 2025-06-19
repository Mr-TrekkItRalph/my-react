import { Link , Outlet} from "react-router-dom";

export default function IndexPage(){
return(
    <main className="w-screen h-screen bg-black flex flex-col gap-3"> 
        <div className="relative">
        <nav className="absolute flex bg-white h-auto p-[5px] blur rounded-lg inset-0"></nav>
        <nav className="relative flex bg-black h-auto p-[5px]">
            <div className=" w-[50px]">
                <img src="https://i0.wp.com/www.mfi.edu.ph/wp-content/uploads/2024/09/MFI-Logo_lr-2.png?resize=450%2C450&ssl=1" alt="Logo"/>
            </div>
            <div className=" w-[5px]"></div>
            <input type="Search" placeholder="Search" className="border-2 rounded-md w-[800px] text-white"/>
            <div className=" w-[400px]"></div>
            <div className="flex justify-evenly items-center w-[400px] divide-x divide-gray-100">
                <Link className="font-serif text-gray-100 pr-6" to="/">Home</Link>
                <Link className="font-serif text-gray-100 pr-6" to="/create-student">Enrollment</Link>
                <Link className="font-serif text-gray-100" to="/students">Students</Link>
            </div>
        </nav>
        </div>
        <section className="flex-1 overflow-y-auto">
        <Outlet />
        </section>
    </main>
);  
}
