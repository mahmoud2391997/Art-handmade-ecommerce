import React, { useState } from 'react';  
import { Button, Input, DialogBody, DialogHeader } from '@material-tailwind/react';  

const TicketForm = ({ onClose }) => {  
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });  
    const [isSubmitting, setIsSubmitting] = useState(false); 

    const handleInputChange = (e) => {  
        const { name, value } = e.target;  
        setFormData({ ...formData, [name]: value });  
    };  

    const handleSubmit = async () => {  
        if (isSubmitting) return; 
        setIsSubmitting(true);  

        try {  
            await new Promise(resolve => setTimeout(resolve, 2000));  
            console.log(formData); 
        } catch (error) {  
            console.error("Error submitting form:", error);  
        } finally {  
            setIsSubmitting(false); 
            onClose(); 
            setFormData({ name: '', phone: '', email: '' });  
        }  
    };  

    return (  
        <div className='p-3'>  
            <DialogHeader className="text-2xl font-semibold uppercase font-eb-garamond">Ticket Form</DialogHeader>  
            <DialogBody>  
                <input  
                    type="text"  
                    name="name"  
                    placeholder="Name"  
                    value={formData.name}  
                    onChange={handleInputChange}  
                    className="w-full border-b border-gray-400 p-2 placeholder-gray-500 mb-4 font-eb-garamond"  
                />  
                <input  
                    type="tel"  
                    name="phone"  
                    placeholder="Phone Number"  
                    value={formData.phone}  
                    onChange={handleInputChange}  
                    className="w-full border-b border-gray-400 p-2 placeholder-gray-500 mb-4 font-eb-garamond"  
                />  
                <input  
                    type="email"  
                    name="email"  
                    placeholder="Email Address"  
                    value={formData.email}  
                    onChange={handleInputChange}  
                    className="w-full border-b border-gray-400 p-2 placeholder-gray-500 mb-8 font-eb-garamond"  
                />  
                <div className="flex justify-end">  
                    <button onClick={onClose} className="mr-4 font-eb-garamond">Cancel</button>  
                    <button   
                        onClick={handleSubmit}   
                        className="text-main font-bold font-eb-garamond"   
                        disabled={isSubmitting} 
                    >  
                        {isSubmitting ? 'Submitting...' : 'Submit'} 
                    </button>  
                </div>  
            </DialogBody>  
        </div>  
    );  
};  

export default TicketForm;