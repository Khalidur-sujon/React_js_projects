import { useState } from "react";

//icon
// import { BsCalender } from "react-icons/bs";
// datepicker
import DatePicker from "react-datepicker";

//calender icon
import { BsCalendar } from "react-icons/bs";
// datepicker css
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";

export default function CheckIn() {
	const [startDate, setstartDate] = useState(false);
	return (
		<div className="bg-white relative w-full h-full  flex  justify-end items-center">
			<div className="absolute z-10 pr-10">
				<div>
					<BsCalendar className="text-base cursor-pointer" />
				</div>
			</div>

			<DatePicker
				className="w-full h-full pr-32 "
				placeholderText="CheckIn"
				selected={startDate}
				onChange={(date) => setstartDate(date)}
			/>
		</div>
	);
}
