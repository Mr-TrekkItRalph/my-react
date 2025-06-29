import {Link, Outlet } from "react-router-dom"

export default function EnrollmentPage(){
    return(
        <main className="flex-1 flex flex-col bg-black overflow-y-auto">
            <div className="flex gap-5 mx-auto">
                <Link to="/create-student" className="bg-gray-400 px-5 py-2 text-white flex flex-col rounded-xl">
                    <p className="font-serif">Step 1. Student Information</p>
                </Link>
                <Link to="step-two"  className="bg-gray-400 px-5 py-2 text-white flex flex-col rounded-xl">
                    <p className="font-serif">Step 2.Guardian Information</p>
                </Link>
                <Link to="step-three" className="bg-gray-400 px-5 py-2 text-white flex flex-col rounded-xl">
                    <p className="font-serif">Step 3. Educational Background</p>
                </Link>
                <Link to="step-four"  className="bg-gray-400 px-5 py-2 text-white flex flex-col rounded-xl">
                    <p className="font-serif">Step 4. Enrollment Information</p>
                </Link>
            </div>
            <section className="flex-1 m-5 overflow-y-auto">
                <Outlet />
            </section>
        </main>
    )
}

