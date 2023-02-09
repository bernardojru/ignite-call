import { useState } from "react";
import { CalendarStep } from "./CalendarStep";
import { ConfirmStep } from "./ConfirmStep";

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>();

  function handleClearSelectedDateTime() {
    setSelectedDateTime(null);
  }

  // aqui deves alterar com ! de negação
  if (!selectedDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectedDateTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    );
  }

  return <CalendarStep onSelectedDateTime={setSelectedDateTime} />;
}
