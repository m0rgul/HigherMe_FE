import { useMemo } from "react";
import { capitalizeString } from "core/helpers/capitalize";

const DefaultProfilePicture = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-32 stroke-slate-800"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);

const UserProfile = () => {
  const user = {};
  const { profile: userProfile } = user;

  const getUserLocation = useMemo(() => {
    const {
      location: { city, state, country } = { city: "", state: "", country: "" },
    } = userProfile || {};

    console.log({ city, state, country });
    return "";
  }, [userProfile]);

  return (
    <div className="w-full h-full">
      <div className="profileHeader">
        <div className="profilePicture h-32 w-32 rounded-full">
          {userProfile && userProfile.profilePicture ? (
            <img src={userProfile.profilePicture} className="" />
          ) : (
            <DefaultProfilePicture />
          )}
        </div>
        <div className="userDetails px-4">
          <h3 className="font-semibold text-2xl">
            {`${capitalizeString(userProfile?.firstName || "")} 
            ${capitalizeString(userProfile?.lastName || "")}`}
          </h3>
          <h6 className="italic font-light text-slate-500">{user.email}</h6>
          <p className="userLocation">{getUserLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
