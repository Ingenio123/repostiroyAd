import { SingleDatepicker } from "chakra-dayzed-datepicker";

interface DatePickerSingleProps {
  name?: string;
  DatePicker: Date;
  setDatePicker: (date: Date) => void;
}

const DatePickerAtom = ({
  name,
  DatePicker,
  setDatePicker,
}: DatePickerSingleProps) => {
  return (
    <SingleDatepicker
      name={name ? name : "date-input"}
      onDateChange={setDatePicker}
      date={DatePicker}
    />
  );
};
export default DatePickerAtom;
