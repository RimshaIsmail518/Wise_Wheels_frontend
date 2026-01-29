"use client";
import React from "react";
import Icon from "@/components/Icon";
import { useState,useRef } from "react";

export default function UserAvatarSection() {
  const fileInputRef = useRef(null);
  const [avatar, setAvatar] = useState("/alex-morgan.png");

  // A modale of file picker will display to choose new file(Image)
   const handleChangeAvatar = () => {
    fileInputRef.current.click();
  };

   // When user selects image, it will replace existing by default image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setAvatar(imageUrl);
     e.target.value = "";
  };
  // Delete avatar with confirmation
  const handleDeleteAvatar = () => {
    const confirmed = window.confirm(
      "Are you sure you really want to delete your avatar?"
    );

    if (confirmed) {
      setAvatar(""); // remove image
    }
  };


  return (
    <>
    <input
  type="file"
  ref={fileInputRef}
  accept="image/*"
  hidden
  onChange={handleFileChange}
/>
{/* Input fields required to change files */}
     <div className="flex items-center space-x-6">
        <div className="overflow-hidden rounded-full shrink-0 w-[160px] h-[160px] bg-gray-200">
          {avatar ? (
            <Icon
              src={avatar}
              alt="Alex Morgan"
              className="h-full w-full object-cover"
            />
          ) : (
            <button
              type="button"
              onClick={handleChangeAvatar}
              className="h-full w-full rounded-full border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 text-sm hover:bg-gray-50 transition"
            >
              <span className="flex flex-col items-center gap-1">
                <span className="text-xl leading-none">+</span>
                <span>Upload Image</span>
              </span>
            </button>
          )}
        </div>



        <div>
          <h2 className="text-xl font-bold text-gray-900">Alex Morgan</h2>
          <p className="text-sm text-gray-500 mt-1">Premium Member</p>
        </div>
      </div>
      <div className="flex items-center mt-4 space-x-3">
        <button onClick={handleChangeAvatar}
        className="rounded-lg border border-gray-300 bg-white px-8 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Change Avatar
        </button>

        <button  onClick={handleDeleteAvatar} 
        className="px-6 py-2.5 text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
          Delete Account
        </button>
      </div>
    </>
  );
}
