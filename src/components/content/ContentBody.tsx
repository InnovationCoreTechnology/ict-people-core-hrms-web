interface Props {
  children: React.ReactNode
}

const ContentBody = ({ children }: Props) => {

  return (

    <div className="content-body">
      {children}
    </div>

  )

}

export default ContentBody