import React from 'react';

interface InputProps {
    type: string;
    placeholder: string;
    label: string;
    helperText?: string;
    error: boolean;
}

const input = ({ label, placeholder, type, helperText, error } : InputProps) => {
    return(
        <>
            <label className="flex flex-col mb-5 text-gray-500 font-semibold"> 
                {label}
                <input type={type} placeholder={placeholder} className="outline-none p-2 rounded-sm"/>

                {error && <span className="text-red-500">{helperText}</span>}
            </label>
        </>
    );
};

export default input;