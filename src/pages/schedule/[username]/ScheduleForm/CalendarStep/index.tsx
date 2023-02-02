import { Calendar } from "../../../../../components/Calendar";
import {
  Container,
  TimePicker,
  TimePickerHeader,
  TimePickerList,
  TimePickerItem,
} from "./styles";

export function CalendarStep() {
  const isDateSelected = true;
  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />

      {isDateSelected && (
        <TimePicker>
          <TimePickerHeader>
            quinta-feira <span>02 de fevereiro</span>
          </TimePickerHeader>

          <TimePickerList>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
            <TimePickerItem>
              08:00h
            </TimePickerItem>
          </TimePickerList>
        </TimePicker>
      )}
    </Container>
  );
}
