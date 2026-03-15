import type { Column } from "./TableTypes"
import "../../styles/table.css"

interface Props<T> {
  data: T[]
  columns: Column<T>[]
}

function DataTable<T extends { id: number }>({ data, columns }: Props<T>) {

  return (

    <div className="table-container">

      <table className="data-table">

        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.header}</th>
            ))}
          </tr>
        </thead>

        <tbody>

          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="empty">
                No Data Available
              </td>
            </tr>
          ) : (

            data.map((row) => (

              <tr key={row.id}>

                {columns.map((col, index) => (

                  <td key={index}>

                    {col.render
                      ? col.render(row)
                      : (row[col.field as keyof T] as React.ReactNode)}

                  </td>

                ))}

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  )
}

export default DataTable