import {useRef} from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";
import { useNavigate } from "react-router-dom";

export default function StepFour() {
    
    const navigate = useNavigate(); //added
    const academicYearSemesterRef = useRef(null);
    const programToEnrollRef = useRef(null);
    const typeofApplicantRef = useRef(null);
    const enrollmentStatusRef = useRef(null);
    const modeOfLearningRef = useRef(null);
       
    const persistentFields = {
        academicYearSemesterRef,
        programToEnrollRef,
        typeofApplicantRef,
        enrollmentStatusRef,
        modeOfLearningRef,
    };
        
    usePersistentForm({ refs: persistentFields });
    
    const handlesubmit = () => {
        alert("You are enrolled");
        academicYearSemesterRef.current.value = "";
        programToEnrollRef.current.value = "";
        typeofApplicantRef.current.value = "1";
        enrollmentStatusRef.current.value = "1";
        modeOfLearningRef.current.value = "1";

        navigate("/create-student"); // redirect to /create-student
        localStorage.clear(); //clear local storage
    }

    return(
        <main className="flex flex-col items-center">
            <form className="border-white border-1 rounded-xl p-5">
                <form className="flex flex-col gap-5 border-1">
                <p className="text-white">Academic Year/Semester:</p>
                <input ref={academicYearSemesterRef} type="text" className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl"/>
                <p className="text-white">Program to Enroll(e.g., BS in Nursing, MBA, MA in Education:</p>
                <input ref={programToEnrollRef} type="text" className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl"/>
                </form>
                <form className="flex flex-col gap-3"> 
                <p className="text-white mt-5">Type of Applicant:</p>
                <select ref={typeofApplicantRef} className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl">
                    <option value="1">New Freshman</option>
                    <option value="2">Transferee</option>
                    <option value="3">Returning Student</option>
                    <option value="4">Second Student</option>
                    <option value="5">Graduate Student (Master's/Doctorate)</option>
                </select>
                <p className="text-white">Enrollment Status</p>
                <select ref={enrollmentStatusRef} className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl">
                    <option value="1">Full Time</option>
                    <option value="2">Part Time</option>
                </select>
                <p className="text-white">Mode of Learning (if applicable)</p>
                <select ref={modeOfLearningRef} className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl">
                    <option value="1">Face to Face</option>
                    <option value="2">Online</option>
                    <option value="3">Blended</option>
                </select>
                <button onClick={handlesubmit} className="bg-white rounded-xl h-10">Submit</button>
                </form>
            </form>
        </main>
    
    );
}