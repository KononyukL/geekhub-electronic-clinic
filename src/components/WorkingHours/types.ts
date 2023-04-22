export type TWorkingHours = {
  showAllHours?: boolean;
  doctorId?: string | number;
  max_date?: number;
};

export type TCalendar = {
  updateCurrentDate: any;
  max_date?: number;
};