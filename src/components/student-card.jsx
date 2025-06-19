export default function StudentCard({ data: student }) {
  return (
    <div className="flex flex-col w-[340px] h-[220px] min-h-[220px] border border-black">
      <div className="flex gap-2 items-center bg-blue-400 px-3">
        <img
          src="https://i0.wp.com/www.mfi.edu.ph/wp-content/uploads/2024/09/MFI-Logo_lr-2.png?resize=450%2C450&ssl=1"
          alt=""
          className="h-[30px]"
        />
        <div className="flex flex-col text-white">
          <h1 className="text-sm font-bold">MFI Polytechnic</h1>
          <p className="text-xs">Institute of technology Inc.</p>
        </div>
      </div>
      <section className="flex items-center flex-1 px-5 gap-3 bg-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiqP58jH6BklGhqSjacoISaIMdU7T26mvR7w&s"
          alt=""
          className="border border-gray-600 rounded-md h-[150px] shadow-md"
        />
        <div className="flex flex-col gap-2 flex-1 ">
          <h1 className="font-bold text-center">STUDENT ID CARD</h1>
          <div className="flex-1 flex gap-4">
            <div className="flex flex-col text-xs">
              <p>Name </p>
              <p>Student ID </p>
              <p>Grade/Year </p>
              <p>Issued On </p>
            </div>
            <div className="flex flex-col text-xs">
              <p>: {student.first_name} </p>
              <p>: {student.lrn_number} </p>
              <p>: 11/2025 </p>
              <p>: {student.birth_date} </p>
            </div>
          </div>
          <img
            src="https://www.labelsandlabeling.com/sites/labels/lnl/files/Books/figure_2.1_-_barcodes_consist_of_alternating_thick_and_thin_vertical_dark_and_light_bars.png"
            alt=""
            className="h-[50px]"
          />
        </div>
      </section>
    </div>
  );
}
