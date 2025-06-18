export default function StepThree() {
    return(
        <main className="flex flex-col justify-center gap-2">
            <div className="flex flex-col items-center gap-3">
                <input type="text" placeholder="Senior High School Attended" className="w-[713px] border border-5 rounded-lg"/>
                <input type="text" placeholder="Year Graduated" className="w-[713px] border border-5 rounded-lg"/>
                <input type="text" placeholder="General Average" className="w-[713px] border border-5 rounded-lg"/>
                <input type="text" placeholder="School Address" className="w-[713px] border border-5 rounded-lg"/>
            </div>
        </main>
    );
}