import {useEffect, useRef, useState} from "react";
import { usePersistentForm } from "../hooks/usePersistentForm";
import { getGenders } from "../api";


export default function StepOne() {
    
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const middleNameRef = useRef(null);
    const civilStatusRef = useRef(null);
    const dateRef = useRef(null);
    const genderRef = useRef(null);
    const nationalityRef = useRef(null);
    const religionRef = useRef(null);
    const contactNumberRef = useRef(null);
    const emailAddressRef = useRef(null);
    const AddressRef = useRef(null);
    const placeOfBirthRef = useRef(null);
    const lrnNumberRef = useRef(null);

    const persistentFields = {
        firstNameRef,
        lastNameRef,
        middleNameRef,
        civilStatusRef,
        dateRef,
        genderRef,
        nationalityRef,
        religionRef,
        contactNumberRef,
        emailAddressRef,
        AddressRef,
        placeOfBirthRef,
        lrnNumberRef,
    };

    const [gender, setGender] = useState([])
    console.log(gender);
    useEffect(() => {
        getGenders().then((response) =>{
            setGender(response);
        });
    },[]);

    usePersistentForm({ refs: persistentFields });
    
    return (
            <main className="flex">
                <div className="w-100 h-auto"></div>
            <form className="flex flex-1 flex-col items-center gap-5 bg-gray-800 rounded-xl p-5"> 
                <section className="flex justify-center gap-5">
                        <div className="flex flex-col gap-1">
                            <p className="text-white">First Name:</p>
                            <input ref={firstNameRef} type="text" className="indent-2 text-white border-b-1 border-white  w-[330px] h-[50px]"/>
                        </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-white">Last Name:</p>
                        <input ref={lastNameRef} type="text" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-white">Middle Name:</p>
                        <input ref={middleNameRef} type="text" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]"/>
                    </div>
                </section>

                <section className="flex justify-center gap-5">
                    <div className="flex flex-col gap-1">
                        <p className="text-white">Civil Status:</p>
                        <input ref={civilStatusRef} type="text" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-white">Birth Date:</p>
                        <input ref={dateRef} type="date" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-white">Gender:</p>
                        <form>
                            <select ref={genderRef} name="" id="" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]">
		                        {gender?.map((gender) => {
                                    return (<option key={gender.id} value={gender.id}>{gender.name}</option>)
                                })}
                                    
                                

	                        </select>
                        </form>
                    </div>
                </section>

                <section className="flex justify-center gap-5">
                    <div className="flex flex-col gap-1">
                        <p className="text-white">Nationality:</p>
                        <input ref={nationalityRef} type="text" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-white">Religion:</p>
                        <input ref={religionRef} type="text" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-white">Contact Number:</p>
                        <input ref={contactNumberRef} type="text" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]"/>
                    </div>
                </section>
                        
                <section className="flex justify-center gap-5">
                    <div className="flex flex-col gap-1">
                        <p className="text-white">Email Address:</p>
                        <input ref={emailAddressRef} type="text" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]"/>                
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-white">Address:</p>
                        <input ref={AddressRef} type="text" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]"/>                
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-white">Place of Birth:</p>
                        <input ref={placeOfBirthRef} type="text" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]"/>                
                    </div>
                </section>
                
                <section className="flex self-start mr-auto gap-5">
                    <div className="flex flex-col gap-1">
                        <p className="text-white">LRN Number:</p>
                        <input ref={lrnNumberRef} type="text" className="indent-2 text-white border-b-1 border-white w-[330px] h-[50px]"/>                
                    </div>
                </section>
            </form>
            <div className="w-100 h-auto"></div>
            </main>
    );
}