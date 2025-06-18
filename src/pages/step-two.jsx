export default function StepTwo() {
    return (
        <main className="flex flex-col justify-center gap-2">
            <div className="flex justify-center gap-3">
                <input type="text" placeholder="Father's Name" className="border border-5 rounded-lg"/>
                <input type="text" placeholder="Occupation" className="border border-5 rounded-lg"/>
                <input type="text" placeholder="Contact Number" className="border border-5 rounded-lg"/>
            </div>
            <div className="flex justify-center gap-3">
                <input type="text" placeholder="Mother's Name" className="border border-5 rounded-lg"/>
                <input type="text" placeholder="Occupation" className="border border-5 rounded-lg"/>
                <input type="text" placeholder="Contact Number" className="border border-5 rounded-lg"/>
            </div>
            <div className="flex flex-col items-center gap-3">
                <input type="text" placeholder="Guardian's Name" className="w-[713px] border border-5 rounded-lg"/>
                <input type="text" placeholder="Relationship Student" className="w-[713px] border border-5 rounded-lg"/>
                <input type="text" placeholder="Guardian's Contact Number" className="w-[713px] border border-5 rounded-lg"/>
                <input type="text" placeholder="Home Address" className="w-[713px] border border-5 rounded-lg"/>
            </div>
        </main>
    );
}