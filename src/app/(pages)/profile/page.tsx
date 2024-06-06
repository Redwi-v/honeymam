import ProfileView from "@/views/profile.view"
import { FC, Suspense } from "react"

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
