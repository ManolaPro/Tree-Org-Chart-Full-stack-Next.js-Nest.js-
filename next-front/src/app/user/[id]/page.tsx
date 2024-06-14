import { getUserInfoAndManagers } from "@/actions"
import ChangeManagerForm from "@/components/ChangeManagerForm/ChangeManagerForm"
import { IUserInfoAndManagers } from "@/interface/userInfoAndManagers"
import { notFound } from "next/navigation"

export default async function UserPage({ params }: {params: {id: string}}) {
    const id = parseInt(params.id)
    if (!id) {
        notFound()
    }
    const {userInfo, managers}: IUserInfoAndManagers = await getUserInfoAndManagers(id)

    return (
        <ChangeManagerForm 
            id={userInfo.id}
            first={userInfo.firstName}
            last={userInfo.lastName}
            managers={managers}
        /> 
    )
}