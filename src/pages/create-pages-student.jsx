import {Link, Outlet } from "react-router-dom"

export default function EnrollmentPage(){
    return(
        <main className="flex-1 flex flex-col bg-black overflow-y-auto gap-5">
            <div className="flex gap-5 mx-auto">
                <Link to="/create-student" className="bg-black px-5 py-2 text-white flex flex-col border-white border-1 rounded-xl">
                    <p className="font-serif">Step 1. Student Information</p>
                </Link>
                <Link to="step-two"  className="bg-black px-5 py-2 text-white flex flex-col border-white border-1 rounded-xl">
                    <p className="font-serif">Step 2.Guardian Information</p>
                </Link>
                <Link to="step-three" className="bg-black px-5 py-2 text-white flex flex-col border-white border-1 rounded-xl">
                    <p className="font-serif">Step 3. Educational Background</p>
                </Link>
                <Link to="step-four"  className="bg-black px-5 py-2 text-white flex flex-col border-white border-1 rounded-xl">
                    <p className="font-serif">Step 4. Enrollment Information</p>
                </Link>
            </div>
            <section className="flex-1 overflow-y-auto">
                <Outlet />
            </section>
        </main>
    )
}

