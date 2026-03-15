interface Option {
  value: string | number
  label: string
}

interface Props {
  options: Option[]
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({ options, value, onChange }: Props) => {

  return (

    <select
      className="select-field"
      value={value}
      onChange={onChange}
    >

      <option value="">All</option>

      {options.map(option => (

        <option key={option.value} value={option.value}>
          {option.label}
        </option>

      ))}

    </select>

  )

}

export default Select