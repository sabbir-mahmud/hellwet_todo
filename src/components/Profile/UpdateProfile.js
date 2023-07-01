import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../app/endpoints/profileEndpoints";

const UpdateProfile = () => {
  const { email } = useParams();
  const { data: profile, isLoading } = useGetProfileQuery(email);
  const [updateProfile, resInfo] = useUpdateProfileMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.image.files[0]);
    const id = profile[0]?._id;
    const formData = new FormData();
    formData.append("email", profile[0]?.email);
    formData.append("firstName", e.target.firstName.value);
    formData.append("lastName", e.target.lastName.value);
    formData.append("bio", e.target.bio.value);
    formData.append("address", e.target.address.value);
    formData.append("education", e.target.education.value);
    formData.append("certification", e.target.certification.value);
    formData.append("completedProjects", e.target.completedProjects.value);
    formData.append("yearOfExperience", e.target.yearOfExperience.value);
    formData.append("link", e.target.link.value);
    if (e.target.image.files[0]) {
      formData.append("img", e.target.image.files[0]);
    }
    formData.append("about", e.target.about.value);

    const data = {
      id: id,
      body: formData,
    };
    const res = await updateProfile(data);
    console.log(res);
    navigate("/profile");
  };

  if (isLoading) {
    return;
  }
  return (
    <div className="container mx-auto mt-5">
      <form onSubmit={handleSubmit} className="px-12">
        <input
          type="text"
          placeholder="First Name"
          defaultValue={profile[0]?.firstName}
          name="firstName"
          className="input input-bordered w-full mt-1"
        />
        <input
          type="text"
          placeholder="Last Name"
          defaultValue={profile[0]?.lastName}
          name="lastName"
          className="input input-bordered w-full mt-1"
        />
        <input
          type="text"
          placeholder="Bio"
          defaultValue={profile[0]?.bio}
          name="bio"
          className="input input-bordered w-full mt-1"
        />
        <input
          type="text"
          placeholder="Address"
          defaultValue={profile[0]?.address}
          name="address"
          className="input input-bordered w-full mt-1"
        />
        <input
          type="text"
          placeholder="Education"
          defaultValue={profile[0]?.education}
          name="education"
          className="input input-bordered w-full mt-1"
        />
        <input
          type="text"
          placeholder="Certification"
          defaultValue={profile[0]?.certification}
          name="certification"
          className="input input-bordered w-full mt-1"
        />
        <input
          type="text"
          placeholder="completed projects"
          defaultValue={profile[0]?.completedProjects}
          name="completedProjects"
          className="input input-bordered w-full mt-1"
        />
        <input
          type="text"
          placeholder="years of experience"
          defaultValue={profile[0]?.yearOfExperience}
          name="yearOfExperience"
          className="input input-bordered w-full  mt-1"
        />
        <input
          type="text"
          placeholder="url"
          defaultValue={profile[0]?.link}
          name="link"
          className="input input-bordered w-full mt-1"
        />
        <input
          type="file"
          placeholder="Image"
          name="image"
          className="file-input w-full mt-1"
        />
        <input
          type="text"
          placeholder="About"
          defaultValue={profile[0]?.about}
          name="about"
          className="input input-bordered w-full mt-1"
        />

        <button className="btn btn-primary mt-1 w-full" type="submit">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
