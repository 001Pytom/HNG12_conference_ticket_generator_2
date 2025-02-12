export const uploadImageToCloudinary = async (file) => {
  const cloudName = "dmyd6oq9v"
  const uploadPreset = "ticket_upload";

  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary credentials are missing");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  return data.secure_url; 
};
