import {useEffect, useRef, useState} from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";
import { useNavigate } from "react-router-dom";
import { enrollmentStatus, modeOfLearningAPI, programToEnroll, typesOfApplicant } from "../api";

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

    const [courses, setCourses] = useState([])
        console.log(courses);
        useEffect(() => {
            programToEnroll().then((response) =>{
                setCourses(response);
            });
        },[]);


    const [typeOfApplicant, setTypeOfApplicant] = useState([])
        console.log(typeOfApplicant);
        useEffect(() => {
            typesOfApplicant().then((response) =>{
                setTypeOfApplicant(response);
            });
        },[]);

        const [enrollmentStatuss, setenrollmentStatuss] = useState([])
        console.log(enrollmentStatuss);
        useEffect(() => {
            enrollmentStatus().then((response) =>{
                setenrollmentStatuss(response);
            });
        },[]);

        const [modeOfLearning, setModeOfLearning] = useState([])
        console.log(modeOfLearning);
        useEffect(() => {
            modeOfLearningAPI().then((response) =>{
                setModeOfLearning(response);
            });
        },[]);
        
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
                <select ref={programToEnrollRef} className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl">
                    {courses?.map((courses) => {
                                    return (<option key={courses.id} value={courses.id}>{courses.name}</option>)
                                })}
                </select>
                </form>
                <form className="flex flex-col gap-3"> 
                <p className="text-white mt-5">Type of Applicant:</p>
                <select ref={typeofApplicantRef} className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl">
                    {typeOfApplicant?.map((typeOfApplicant) => {
                                    return (<option key={typeOfApplicant.id} value={typeOfApplicant.id}>{typeOfApplicant.name}</option>)
                                })}
                </select>
                <p className="text-white">Enrollment Status</p>
                <select ref={enrollmentStatusRef} className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl">
                    {enrollmentStatuss?.map((enrollmentStatuss) => {
                                    return (<option key={enrollmentStatuss.id} value={enrollmentStatuss.id}>{enrollmentStatuss.name}</option>)
                                })}
                </select>
                <p className="text-white">Mode of Learning (if applicable)</p>
                <select ref={modeOfLearningRef} className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl">
                    {modeOfLearning?.map((modeOfLearning) => {
                                    return (<option key={modeOfLearning.id} value={modeOfLearning.id}>{modeOfLearning.name}</option>)
                                })}
                </select>
                <button onClick={handlesubmit} className="bg-white rounded-xl h-10">Submit</button>
                </form>
            </form>
        </main>
    
    );
}