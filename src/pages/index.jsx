import { Link , Outlet} from "react-router-dom";

export default function IndexPage(){
return(
    <main className="w-screen h-screen bg-gray-100 flex flex-col gap-3"> 
        <nav className="flex bg-red-200 h-[30px]">
            <div className="bg-green-300 w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <input type="Search" placeholder="Search"></input>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className=" w-[50px]"></div>
            <div className="flex justify-evenly items-center bg-blue-300 w-[400px]">
                <Link to="/">Home</Link>
                <Link to="/create-student">Create Student</Link>
                <Link to="/students">Students</Link>
            </div>
        </nav>
        <section className="flex-1 overflow-y-auto">
        <Outlet />
        </section>
    </main>
);  
}
