const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (

    <div className="app-layout">

      <header className="app-header">
        ICT PeopleCore HRMS
      </header>

      <div className="app-body">

        <aside className="sidebar">

          <h3>HRMS</h3>

          <ul>
            <li>Dashboard</li>
            <li>Employees</li>
            <li>Departments</li>
            <li>Designations</li>
          </ul>

        </aside>

        <main className="main-content">

          <div className="page-container">
            {children}
          </div>

        </main>

      </div>

      <footer className="app-footer">
        © 2026 ICT PeopleCore HRMS
      </footer>

    </div>

  )

}

export default MainLayout