"use client";
import React ,{useRef, useState} from "react";
import Icon from "@/components/Icon";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "./utils/cropImage";


export default function UserAvatarSection() {
  const fileInputRef = useRef(null);

  const [avatar, setAvatar] = useState("/alex-morgan.png");
  const [tempImage, setTempImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedPixels, setCroppedPixels] = useState(null);
  const [openCrop, setOpenCrop] = useState(false);
 


  // File Picker
  const handleChangeAvatar = () =>
  {
    if (fileInputRef.current) fileInputRef.current.click();
  };


  // when user selects file, this will open crop model
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

  
 const url = URL.createObjectURL(file);
    setTempImage(url);
    setOpenCrop(true);


 e.target.value="";
  };

    // Save cropped image
  const handleSaveCrop = async () => {
    if (!tempImage || !croppedPixels) return;
    const cropped = await getCroppedImg(tempImage, croppedPixels);
    setAvatar(cropped);
    setOpenCrop(false);
    setTempImage(null);
  };

   // Close modal without saving
  const handleCancelCrop = () => {
    setOpenCrop(false);
    setTempImage(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setCroppedPixels(null);
  };

   // Delete avatar with confirmation (keeps same behavior)
  const handleDeleteAvatar = () => {
    const confirmed = window.confirm(
      "Are you sure you really want to delete your avatar?"
    );
    if (confirmed) {
      setAvatar(""); // delete avatar image
    }
  };
const onCropComplete = (_, pixels) => {
  setCroppedPixels(pixels);
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


{/* Use Avater Section */}
     <div className="flex items-center space-x-6">
        <div className="relative overflow-hidden rounded-full shrink-0 w-[160px] h-[160px] bg-gray-200">
          {avatar ? (
            <img
              src={avatar}
              alt="Alex Morgan"
              className=" absolute inset-0 h-full w-full object-cover"
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

      {/* Buttons */}
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

{/* Crop Model */}
{openCrop && tempImage && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
            <div className="relative h-[360px] bg-black">
              <Cropper
                image={tempImage}
  crop={crop}
  zoom={zoom}
  aspect={1}
  cropShape="round"
  onCropChange={setCrop}
  onZoomChange={setZoom}
  onCropComplete={onCropComplete}
              />
            </div>

            <div className="p-4 space-y-3">
              {/* Zoom Slider */}
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Zoom</span>
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.1}
                  value={zoom}
                  onChange={(e) => setZoom(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleCancelCrop}
                  className="w-full rounded-lg border border-gray-300 bg-white py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSaveCrop}
                  className="w-full rounded-lg bg-gray-900 py-2 text-sm font-medium text-white hover:bg-black"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


    </>
  );
}
