import {useRef} from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";

export default function StepThree() {
    
    const seniorHSAttendedRef = useRef(null);
    const strandSHSRef = useRef(null);
    const yearGraduatedRef = useRef(null);
    const generalAverageRef = useRef(null);
    const schoolAddressRef = useRef(null);
    
       
    const persistentFields = {
        seniorHSAttendedRef,
        strandSHSRef,
        yearGraduatedRef, 
        generalAverageRef,
        schoolAddressRef, 
    };
        
    usePersistentForm({ refs: persistentFields });
    
    return(
        <main className="flex flex-col justify-center gap-2">
            <div className="flex flex-col items-center gap-3">
                <form className="flex flex-col border-white border-1 gap-5 items-center p-5 rounded-xl">
                <p className="text-white self-start">Senior High School Attended:</p>
                <input ref={seniorHSAttendedRef} type="text" className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl"/>
                <p className="text-white self-start">Strand SHS:</p>
                <input ref={strandSHSRef} type="text" className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl"/>
                <p className="text-white self-start">Year Graduated:</p>
                <input ref={yearGraduatedRef} type="text" className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl"/>
                <p className="text-white self-start">General Average:</p>
                <input ref={generalAverageRef} type="text" className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl"/>
                <p className="text-white self-start">School Address:</p>
                <input ref={schoolAddressRef} type="text" className="text-center text-white border-1 border-white w-[900px] h-[80px] rounded-xl"/>
                </form>
            </div>
        </main>
    );
}