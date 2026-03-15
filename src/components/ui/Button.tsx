interface Props {
  text: string
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "outline"
  onClick?: () => void
}

const Button = ({ text, variant = "primary", onClick }: Props) => {

  const className = `btn btn-${variant}`

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button