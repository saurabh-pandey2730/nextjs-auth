export default function UserProfile({params}:any) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
         <h1>Profile</h1>
         <hr />
         <p className="text-4xl mb-3">Profile page
         </p>
         <span className="bg-orange-500 text-black text-4xl  ">{params.id}</span>
      </div>
    )
  }
  