interface Props {
  children: React.ReactNode
}

const ContentFilters = ({ children }: Props) => {

  return (
    <div className="content-filters">
      {children}
    </div>
  )

}

export default ContentFilters