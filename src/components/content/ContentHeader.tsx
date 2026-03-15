interface Props {
  title: string
  children?: React.ReactNode
}

const ContentHeader = ({ title, children }: Props) => {

  return (
    <div className="content-header">

      <div className="content-title">
        {title}
      </div>

      <div className="content-header-actions">
        {children}
      </div>

    </div>
  )

}

export default ContentHeader