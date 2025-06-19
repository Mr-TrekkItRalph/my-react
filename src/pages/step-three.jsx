import {useRef} from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";

export default function StepThree() {
    
    const seniorHSAttendedRef = useRef(null);
    const yearGraduatedRef = useRef(null);
    const generalAverageRef = useRef(null);
    const schoolAddressRef = useRef(null);
    
       
    const persistentFields = {
        seniorHSAttendedRef,
        yearGraduatedRef, 
        generalAverageRef,
        schoolAddressRef, 
    };
        
    usePersistentForm({ refs: persistentFields });
    
    return(
        <main className="flex flex-col justify-center gap-2">
            <div className="flex flex-col items-center gap-3">
                <input ref={seniorHSAttendedRef} type="text" placeholder="Senior High School Attended" className="w-[713px] border-5 rounded-lg"/>
                <input ref={yearGraduatedRef} type="text" placeholder="Year Graduated" className="w-[713px] border-5 rounded-lg"/>
                <input ref={generalAverageRef} type="text" placeholder="General Average" className="w-[713px] border-5 rounded-lg"/>
                <input ref={schoolAddressRef} type="text" placeholder="School Address" className="w-[713px] border-5 rounded-lg"/>
            </div>
        </main>
    );
}