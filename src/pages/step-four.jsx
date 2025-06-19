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
        <main className="flex flex-col items-center gap-5">
            <form className="flex flex-col gap-5">
            <input ref={academicYearSemesterRef} type="text" placeholder="Academic Year/Semester" className="w-[713px] border-5 rounded-lg"/>
            <input ref={programToEnrollRef} type="text" placeholder="Program to Enroll(e.g., BS in Nursing, MBA, MA in Education " className="w-[713px] border-5 rounded-lg"/>
            </form>
            <form className="flex flex-col gap-[3px]"> 
                <p>Type of Applicant:</p>
            <select ref={typeofApplicantRef} className="w-[713px] border-5 rounded-lg">
                <option value="1">New Freshman</option>
                <option value="2">Transferee</option>
                <option value="3">Returning Student</option>
                <option value="4">Second Student</option>
                <option value="5">Graduate Student (Master's/Doctorate)</option>
	        </select>
            <p>Enrollment Status</p>
            <select ref={enrollmentStatusRef} className="w-[713px] border-5 rounded-lg">
                <option value="1">Full Time</option>
                <option value="2">Part Time</option>
	        </select>
            <p>Mode of Learning (if applicable)</p>
            <select ref={modeOfLearningRef} className="w-[713px] border-5 rounded-lg">
                <option value="1">Face to Face</option>
                <option value="2">Online</option>
                <option value="3">Blended</option>
	        </select>
            <button onClick={handlesubmit}>Submit</button>
            </form>
        </main>
    
    );
}