import { Link } from "react-router-dom"

const VisitDashboard = () => {
  return (
    <div>

        <Link to="/admin/dashboard" className="visitDashboard">
          <button>Visit Dashboard</button>
          </Link>
    </div>
  )
}

export default VisitDashboard;