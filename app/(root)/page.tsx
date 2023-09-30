import { CreateOrganization, OrganizationList, OrganizationProfile, OrganizationSwitcher, UserButton, UserProfile } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
      <p>user button</p>
      <UserButton afterSignOutUrl="/"/>
      <p>user profile</p>
      <UserProfile />
      <p>organization</p>
      <CreateOrganization />
      <p>organization profile</p>
      <OrganizationProfile />
      <p>organization switcer</p>
      <OrganizationSwitcher />
      <p>organization list</p>
      <OrganizationList />
    </div>
  )
}