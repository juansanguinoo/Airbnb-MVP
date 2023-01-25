import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import '../../assets/styles/HostPhotosStyles/PropertyPhotos.css';
import ClipLoader from 'react-spinners/ClipLoader';

import hostContext from '../../context/host/hostContext';

const PropertyPhotos = () => {
  const HostContext = useContext(hostContext);
  const { addPhotos } = HostContext;

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleChange = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const handleImageUpload = async () => {
    const cloudName = 'juandavidsanguino';
    const unsignedUploadPreset = 'airbnb-preset';

    const imagePromise = images.map(async (image) => {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', unsignedUploadPreset);
      formData.append('cloud_name', cloudName);

      return axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
    });

    const response = await Promise.all(imagePromise);
    setUploadedImages(response.map((res) => res.data.secure_url));

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleDelete = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newUploadedImages = [...uploadedImages];
    newUploadedImages.splice(index, 1);
    setUploadedImages(newUploadedImages);
  };

  useEffect(() => {
    addPhotos(uploadedImages);
    // eslint-disable-next-line
  }, [uploadedImages]);

  useEffect(() => {
    const localPhotos = JSON.parse(localStorage.getItem('host'));
    if (localPhotos.photos) {
      setImages(localPhotos.photos);
    }
  }, []);

  return (
    <div className="propertyphotos__container">
      <div className="propertyphotos__title">
        <h1>Photos of your place</h1>
      </div>
      <div className="propertyphotos__photos">
        <div className="photos__container">
          <div className="photos">
            <p>Add Photos</p>
            <input type="file" onChange={handleChange} name="file" />
          </div>
          <div className="photos__button-validate">
            {images.length > 0 ? (
              <button onClick={handleImageUpload}>Upload</button>
            ) : null}
          </div>
          {loading ? (
            <div className="loading__container">
              <ClipLoader color={'#123abc'} loading={loading} size={150} />
            </div>
          ) : null}
        </div>
        <div className="photos__list__container">
          {images.map((image, index) => (
            <div key={index} className="photos__list">
              <button onClick={() => handleDelete(index)}>X</button>
              {image.name ? (
                <img src={URL.createObjectURL(image)} alt={image.name} />
              ) : (
                <img src={image} alt={image} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyPhotos;
