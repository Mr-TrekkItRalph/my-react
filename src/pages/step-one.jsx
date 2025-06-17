export default function StepOne() {
    return (
        <section className="flex justify-center gap-2">
            <div>
            <form className="flex flex-col w-[250px] gap-5">
               <input type="text" placeholder="First Name" className="border border-5 rounded-lg"/>
               <input type="text" placeholder="Last Name" className="border border-5 rounded-lg"/>
               <input type="text" placeholder="Middle Name (Optional)" className="border border-5 rounded-lg"/>
               <input type="date" className="border border-5 rounded-lg"/>
                <select name="" id="" className="border border-5 rounded-lg">
		            <option value="1">Male</option>
		            <option value="2">Female</option>
	            </select>
                <input type="text" placeholder="Nationality" className="border border-5 rounded-lg"/>
            </form>
            </div>
            <div className="flex flex-col w-[250px] gap-5">
                <input type="text" placeholder="Religion" className="border border-5 rounded-lg"/>
                <input type="text" placeholder="Contact Number" className="border border-5 rounded-lg"/>
                <input type="text" placeholder="Email Address" className="border border-5 rounded-lg"/>                
                <input type="text" placeholder="Address" className="border border-5 rounded-lg"/>                
                <input type="text" placeholder="Address" className="border border-5 rounded-lg"/>                
            </div>
            </section>
    );
}