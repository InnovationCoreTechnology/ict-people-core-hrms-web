import type { Employee } from "../../models/EmployeeManagement/Employee"
import { getEmployees } from "../../api/EmployeeManagement/employeeApi"
import ContentFilters from "../../components/content/ContentFilters"
import { EmployeeStatusLabel } from "../../constants/employeeStatus"
import ContentHeader from "../../components/content/ContentHeader"
import type { Column } from "../../components/table/TableTypes"
import ContentBody from "../../components/content/ContentBody"
import MainLayout from "../../components/layout/MainLayout"
import DataTable from "../../components/table/DataTable"
import Select from "../../components/ui/Select"
import Button from "../../components/ui/Button"
import Input from "../../components/ui/Input"
import { useEffect, useState } from "react"
import "../../styles/page.css"
import "../../styles/status.css"

const EmployeePage = () => {

  const [employees, setEmployees] = useState<Employee[]>([])
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")

  useEffect(() => {

    const fetchEmployees = async () => {
      const data = await getEmployees()
      setEmployees(data)
    }

    fetchEmployees()

  }, [])


  const columns: Column<Employee>[] = [

    { header: "Code", field: "employeeCode" },
    { header: "Name", field: "name" },
    { header: "Email", field: "email" },

    {
      header: "Status",
      render: (emp) => (
        <select defaultValue={emp.status}>
          {Object.entries(EmployeeStatusLabel).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      )
    }

  ]


  return (
    <MainLayout>
    
      <ContentHeader title="Employees">
        <Button text="+ Employee" variant="success" />
      </ContentHeader>

      <ContentFilters>
        <Input
          placeholder="Search Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Select
          value={status}
          options={Object.entries(EmployeeStatusLabel).map(([k, v]) => ({
            value: k,
            label: v
          }))}
          onChange={(e) => setStatus(e.target.value)}
        />

        <Button text="Search" variant="primary" />

        <Button text="Reset" variant="danger" />
      </ContentFilters>

      <ContentBody>

        <DataTable
          data={employees}
          columns={columns}
        />
      </ContentBody>

    </MainLayout>

  )

}

export default EmployeePage