import axios from "axios"
import type { Employee } from "../../models/EmployeeManagement/Employee"
import type { ApiResponse } from "../../models/Common/ApiResponse"

const API_URL = "https://localhost:7017/api/v1/EmployeeManagement/get-all/1"

export const getEmployees = async (): Promise<Employee[]> => {

  const response = await axios.get<ApiResponse<Employee[]>>(API_URL)

  return response.data.data
}