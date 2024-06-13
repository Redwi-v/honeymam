import ProfileView from "@/views/profile.view"
import { FC, Suspense } from "react"
import { ReactNotifications } from "react-notifications-component"

interface ProfilePageProps {

}

const ProfilePage: FC<ProfilePageProps> = props => {


  return ( 
    <Suspense fallback='' >
      <ProfileView />
    </Suspense>
   )
  
}


export default ProfilePage
