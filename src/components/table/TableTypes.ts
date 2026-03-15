export interface Column<T> {
  header: string
  field?: keyof T
  render?: (row: T) => React.ReactNode
}