import { useUser } from "@clerk/clerk-react";

export default function Profile() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn) {
    return <div>Please sign in to view your profile.</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen" >
      <h2>Welcome, {user.firstName}!</h2>
      <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
      <p>User ID: {user.id}</p>
      <img
        src={user.imageUrl}
        alt="User avatar"
        style={{ width: "80px", borderRadius: "50%" }}
      />
    </div>
  );
}
