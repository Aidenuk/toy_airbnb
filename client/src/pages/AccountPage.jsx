import { useContext } from "react"
import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../UserContext"

export default function AccountPage() {
  const {ready, user} = useContext(UserContext)

  if(!ready){
    return 'Loading ....';
  }

  if(ready && !user){
    return <Navigate to={'/login'} />
  }


  return(
    <div>
      <nav className="w-full flex justify-center mt-8 gap-2">
        <Link className="py-2 px-6 bg-primary text-white rounded-full">My profile</Link>
        <Link className="py-2 px-6" to={'/account/bookings'}>My bookings</Link>
        <Link className="py-2 px-6" to={'/account/places'}>My accommodations</Link>
      </nav>
    </div>
  )
}