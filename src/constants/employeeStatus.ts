export const EmployeeStatus = {
  Active: 1,
  OnLeave: 2,
  Resigned: 3,
  Terminated: 4,
  Retired: 5
} as const

export const EmployeeStatusLabel: Record<number, string> = {
  1: "Active",
  2: "On Leave",
  3: "Resigned",
  4: "Terminated",
  5: "Retired"
}