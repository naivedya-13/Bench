import React, { useState } from 'react';

function ReceiptUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(URL.createObjectURL(file));
        }
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-800">Upload Your Receipt</h3>
            <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg cursor-pointer hover:bg-gray-50">
                {!selectedFile ? (
                    <>
                        <label htmlFor="file-upload" className="cursor-pointer">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/2268/2268926.png" 
                                alt="Upload"
                                className="mx-auto w-16 mb-4"
                            />
                            <p className="text-gray-500">Drag and drop your file here or click to upload</p>
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </>
                ) : (
                    <div className="relative">
                        <img
                            src={selectedFile}
                            alt="Receipt Preview"
                            className="mx-auto w-48 h-48 object-contain border rounded-lg"
                        />
                        <button
                            onClick={handleRemoveFile}
                            className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow-lg hover:bg-red-700"
                        >
                            Remove
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ReceiptUpload;
