import {Link, Outlet } from "react-router-dom"

export default function CreateStudentPage(){
    return(
        <main className="flex-1 flex flex-col bg-gray-100 overflow-y-auto gap-5">
            <div className="flex flex gap-1 mx-auto">
                <Link to="/create-student" className="bg-gray-600 px-5 py-2 text-white flex flex-col">
                    <p>Step 1. Student Information</p>
                </Link>
                <Link to="step-two"  className="bg-gray-600 px-5 py-2 text-white flex flex-col">
                    <p>Step 2.Guardian Information</p>
                </Link>
                <Link to="step-three" className="bg-gray-600 px-5 py-2 text-white flex flex-col">
                    <p>Step 3. Educational Background</p>
                </Link>
                <Link to="step-four"  className="bg-gray-600 px-5 py-2 text-white flex flex-col">
                    <p>Step 4. Enrollment Information</p>
                </Link>
            </div>
            <section className="flex-1 overflow-y-auto">
                <Outlet />
            </section>
        </main>
    )
}

