import {useRef} from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";

export default function StepTwo() {
    
    const guardiansNameRef = useRef(null);
    const relationshipToStudRef = useRef(null);
    const guardiansContactNumRef = useRef(null);
    const guardianHomeAddressRef = useRef(null);
   
    const persistentFields = {
            guardiansNameRef,
            relationshipToStudRef,
            guardiansContactNumRef, 
            guardianHomeAddressRef,
        };
    
        usePersistentForm({ refs: persistentFields });
    
    return (
        // <main className="flex flex-col justify-center gap-2">
        //     <div className="flex flex-col items-center gap-3">
        //         <input ref={guardiansNameRef} type="text" placeholder="Guardian's Name" className="text-center text-white border-1 border-white w-[330px] h-[50px] rounded-xl"/>
        //         <input ref={relationshipToStudRef} type="text" placeholder="Relationship To Student" className="text-center text-white border-1 border-white w-[330px] h-[50px] rounded-xl"/>
        //         <input ref={guardiansContactNumRef} type="text" placeholder="Guardian's Contact Number" className="text-center text-white border-1 border-white w-[330px] h-[50px] rounded-xl"/>
        //         <input ref={guardianHomeAddressRef} type="text" placeholder="Home Address" className="text-center text-white border-1 border-white w-[330px] h-[50px] rounded-xl"/>
        //     </div>
        // </main>

        <div className="flex justify-center">
            <form className="flex items-center flex-col gap-5 bg-gray-800 rounded-xl w-auto h-auto p-5">
                <p className="text-white items self-start">Guardian's Name:</p>
                <input ref={guardiansNameRef} type="text" className="indent-2 text-white bg-black w-[500px] h-[40px] rounded-xl"/>
                <p className="text-white self-start">Relationship To Student:</p>
                <input ref={relationshipToStudRef} type="text" className="indent-2 text-white bg-black w-[500px] h-[40px] rounded-xl"/>
                <p className="text-white self-start">Guardian's Contact Number:</p>
                <input ref={guardiansContactNumRef} type="text" className="indent-2 text-white bg-black w-[500px] h-[40px] rounded-xl"/>
                <p className="text-white self-start">Home Address:</p>
                <input ref={guardianHomeAddressRef} type="text" className="indent-2 text-white bg-black w-[500px] h-[40px] rounded-xl"/>
            </form>
        </div>
    );
}