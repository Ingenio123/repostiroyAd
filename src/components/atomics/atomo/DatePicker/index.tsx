import { RangeDatepicker } from "chakra-dayzed-datepicker";

type DatePickerProps = {
  name?: string;
  date: Date;
  selectedDates: Date[];
  setSelectedDates: (date: Date[]) => void;
  setDate: (date: Date) => void;
};

const DatePickerAtom = ({
  name,
  date,
  setDate,
  selectedDates,
  setSelectedDates,
}: DatePickerProps): JSX.Element => {
  // const [date, setDate] = useState(new Date());

  return (
    <RangeDatepicker
      selectedDates={selectedDates}
      onDateChange={setSelectedDates}
      propsConfigs={{
        dayOfMonthBtnProps: {
          borderColor: "red.300",
          selectedBg: "blue.200",
          _hover: {
            bg: "blue.400",
          },
        },
        inputProps: {
          borderColor: "inputBorder",
          _hover: {
            borderColor: "gray",
          },
        },
      }}
    />
  );
};

export default DatePickerAtom;
