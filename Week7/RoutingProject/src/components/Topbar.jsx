import { useNavigate } from "react-router-dom"

export function Topbar(){
    const navigate = useNavigate();
    return <div >
        <button onClick={() => {
            // window.location.href = '/'
            navigate('/')
        }}>Landing Page</button>
        <button onClick={ () => {
            // window.location.href = '/dashboard'
            navigate('/dashboard')
        }}>Dashboard</button>
    </div>
}