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
        <main className="flex flex-col justify-center gap-2">
            <div className="flex flex-col items-center gap-3">
                <input ref={guardiansNameRef} type="text" placeholder="Guardian's Name" className="w-[713px] border-5 rounded-lg"/>
                <input ref={relationshipToStudRef} type="text" placeholder="Relationship To Student" className="w-[713px] border-5 rounded-lg"/>
                <input ref={guardiansContactNumRef} type="text" placeholder="Guardian's Contact Number" className="w-[713px] border-5 rounded-lg"/>
                <input ref={guardianHomeAddressRef} type="text" placeholder="Home Address" className="w-[713px] border-5 rounded-lg"/>
            </div>
        </main>
    );
}