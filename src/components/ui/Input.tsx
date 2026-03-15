interface Props {
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ placeholder, value, onChange }: Props) => {

  return (

    <input
      className="input-field"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />

  )

}

export default Input