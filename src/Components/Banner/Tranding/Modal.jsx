import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
const Modal = ({ open, setOpen,handlClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (open) {
            setTimeout(() => setShow(true), 10); // Slight delay to trigger animation
        } else {
            setShow(false);
        }
    }, [open]);

    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
            <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
                <div className='flex justify-end p-2'>
                    <button onClick={handlClose} className="text-white hover:text-gray-300 transition-colors">
                        <CloseIcon />
                    </button>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe 
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/GDlkCkcIqTs?si=coYE2M93cxyo6Zl4" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Modal;