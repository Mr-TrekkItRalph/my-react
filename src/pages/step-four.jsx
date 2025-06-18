export default function StepFour() {
    return(
        <main className="flex flex-col items-center gap-5">
            <form className="flex flex-col gap-5">
            <input type="text" placeholder="Academic Year/Semester" className="w-[713px] border border-5 rounded-lg"/>
            <input type="text" placeholder="Program to Enroll(e.g., BS in Nursing, MBA, MA in Education " className="w-[713px] border border-5 rounded-lg"/>
            </form>
            <form className="flex flex-col gap-[3px]"> 
                <p>Type of Applicant:</p>
            <select className="w-[713px] border border-5 rounded-lg">
                <option value="1">New Freshman</option>
                <option value="2">Transferee</option>
                <option value="3">Returning Student</option>
                <option value="3">Second Student</option>
                <option value="3">Graduate Student (Master's/Doctorate)</option>
	        </select>
            <p>Enrollment Status</p>
            <select className="w-[713px] border border-5 rounded-lg">
                <option value="1">Full Time</option>
                <option value="2">Part Time</option>
	        </select>
            <p>Mode of Learning (if applicable)</p>
            <select className="w-[713px] border border-5 rounded-lg">
                <option value="1">Face to Face</option>
                <option value="2">Online</option>
                <option value="2">Blended</option>
	        </select>
            </form>
        </main>
    
    );
}