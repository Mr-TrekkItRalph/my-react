import {useEffect, useRef, useState} from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";
import { useNavigate } from "react-router-dom";
import { courseTypesAPI, enrollmentStatus, modeOfLearningAPI, programToEnroll, typesOfApplicant } from "../api";

export default function StepFour() {
    
    const navigate = useNavigate(); //added
    const academicYearSemesterRef = useRef(null);
    const programToEnrollRef = useRef(null);
    const typeofApplicantRef = useRef(null);
    const courseTypesRef = useRef(null);
    const enrollmentStatusRef = useRef(null);
    const modeOfLearningRef = useRef(null);
       
    const persistentFields = {
        academicYearSemesterRef,
        programToEnrollRef,
        courseTypesRef,
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

        const [courseTypes, setCourseTypes] = useState([])
        console.log(courseTypes);
        useEffect(() => {
            courseTypesAPI().then((response) =>{
                setCourseTypes(response);
            });
        },[]);
        
    usePersistentForm({ refs: persistentFields });
    
    const handlesubmit = () => {
        const postData= {
        //step-one
        student: {
        first_name: localStorage.getItem("firstNameRef"),
        last_name: localStorage.getItem("lastNameRef"),
        middle_name: localStorage.getItem("middleNameRef"),
        birth_date: localStorage.getItem("dateRef"),
        gender: localStorage.getItem("genderRef"),
        nationality: localStorage.getItem("nationalityRef"),
        religion: localStorage.getItem("religionRef"),
        contact_number: localStorage.getItem("contactNumberRef"),
        email: localStorage.getItem("emailAddressRef"),
        address: localStorage.getItem("AddressRef"),
        birth_place: localStorage.getItem("placeOfBirthRef"),
        lrn_number: localStorage.getItem("lrnNumberRef"),
        },
       
        //step-two
        guardian_information:{
        full_name: localStorage.getItem("guardiansNameRef"),
        relationship: localStorage.getItem("relationshipToStudRef"),
        contact_number: localStorage.getItem("guardiansContactNumRef"), 
        address: localStorage.getItem("guardianHomeAddressRef"),
        },

        //step-three
        educational_background: {
        highschool_name: localStorage.getItem("seniorHSAttendedRef"),
        strand: localStorage.getItem("strandSHSRef"),
        year_graduated: localStorage.getItem("yearGraduatedRef"), 
        general_average: localStorage.getItem("generalAverageRef"),
        school_address: localStorage.getItem("schoolAddressRef"), 
        },
        
       
        //step-four
        enrollment: {
        academic_year: localStorage.getItem("academicYearSemesterRef"),
        course: 2,
        type: localStorage.getItem("typeofApplicantRef"),
        status: localStorage.getItem("enrollmentStatusRef"),
        mode_of_learning: localStorage.getItem("modeOfLearningRef"),
        },
        
       
       
       
       
       };
       console.log('awdawdaw',postData);
        // alert("You are enrolled");
        // academicYearSemesterRef.current.value = "";
        // programToEnrollRef.current.value = "";
        // typeofApplicantRef.current.value = "1";
        // enrollmentStatusRef.current.value = "1";
        // modeOfLearningRef.current.value = "1";

        // navigate("/create-student"); // redirect to /create-student
        // localStorage.clear(); //clear local storage
    };
    
    return(
        <main className="flex flex-col items-center">
            <form className="bg-gray-800 rounded-xl p-5">
                <form className="flex flex-col gap-5">
                <p className="text-white">Academic Year/Semester:</p>
                <input ref={academicYearSemesterRef} type="text" className="indent-2 text-white bg-black w-[600px] h-[40px] rounded-xl"/>
                <p className="text-white">Courses:</p>
                <select ref={programToEnrollRef} className="indent-2 text-white bg-black w-[600px] h-[40px] rounded-xl">
                    {courses?.map((courses) => {
                                    return (<option key={courses.id} value={courses.id}>{courses.name}</option>)
                                })}
                </select>
                <p className="text-white">Course Types:</p>
                <select ref={courseTypesRef} className="indent-2 text-white bg-black w-[600px] h-[40px] rounded-xl">
                    {courseTypes?.map((courseTypes) => {
                                    return (<option key={courseTypes.id} value={courseTypes.id}>{courseTypes.name}</option>)
                                })}
                </select>
                </form>
                <form className="flex flex-col gap-3"> 
                <p className="text-white mt-5">Type of Applicant:</p>
                <select ref={typeofApplicantRef} className="indent-2 text-white bg-black w-[600px] h-[40px] rounded-xl">
                    {typeOfApplicant?.map((typeOfApplicant) => {
                                    return (<option key={typeOfApplicant.id} value={typeOfApplicant.id}>{typeOfApplicant.name}</option>)
                                })}
                </select>
                <p className="text-white">Enrollment Status:</p>
                <select ref={enrollmentStatusRef} className="indent-2 text-white bg-black w-[600px] h-[40px] rounded-xl">
                    {enrollmentStatuss?.map((enrollmentStatuss) => {
                                    return (<option key={enrollmentStatuss.id} value={enrollmentStatuss.id}>{enrollmentStatuss.name}</option>)
                                })}
                </select>
                <p className="text-white">Mode of Learning (if applicable):</p>
                <select ref={modeOfLearningRef} className="indent-2 text-white bg-black w-[600px] h-[40px] rounded-xl">
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