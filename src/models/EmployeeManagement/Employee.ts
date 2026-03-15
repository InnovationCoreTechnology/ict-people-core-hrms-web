export interface Employee {
  id: number
  employeeCode: string
  name: string
  email: string
  mobileNumber?: string
  dateOfJoining: string
  departmentId?: number
  designationId?: number
  roleId?: number
  managerId?: number
  salary?: number
  status: number
}