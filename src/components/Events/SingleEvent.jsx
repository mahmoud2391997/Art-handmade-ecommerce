import React, { useState } from 'react';  
import Title from "../Title";  
import { useParams } from "react-router-dom";  
import { eventsData } from "./eventsData";  
import MainButton from "../Shared/MainButton";  
import { Dialog } from '@material-tailwind/react';  
import TicketForm from './TicketForm'; 

export default function SingleEvent() {  
    const { eventId } = useParams();  
    const event = eventsData.find((event) => event.id === parseInt(eventId));  
    const [open, setOpen] = useState(false); 

    if (!event) {  
        return <div>Event not found</div>;  
    }  

    return (  
        <div className="relative z-40 sm:w-full">  
            <div className="bg-white w-full">  
                <div className="uppercase">  
                    <Title title={event.title} subTitle={event.date} />  
                </div>  
                <div className="flex justify-center mt-20">  
                    <img src={event.image} alt={event.title} className="w-[85%] h-auto max-h-[700px] object-cover" />  
                </div>  
                <div className="flex flex-col lg:flex-row px-8 lg:px-32 py-20 gap-10">  
                    <div className="flex flex-col items-start gap-16 w-full lg:w-2/3">  
                        <div>  
                            <h3 className="text-gray-800 text-4xl font-eb-garamond uppercase">About</h3>  
                            <p className="font-eb-garamond text-gray-700 text-2xl mt-6">{event.about}</p>  
                        </div>  
                        <div>  
                            <h3 className="text-gray-800 text-4xl font-eb-garamond uppercase">Curator's Word</h3>  
                            <p className="font-eb-garamond text-gray-700 text-2xl mt-6">{event.curatorWord}</p>  
                        </div>  
                        <div>  
                            <h3 className="text-gray-800 text-4xl font-eb-garamond uppercase">Media Awards</h3>  
                            <p className="font-eb-garamond text-gray-700 text-2xl mt-6">{event.mediaAwards}</p>  
                        </div>  
                    </div>  
                    <div className="flex flex-col gap-2 w-full lg:w-1/3">  
                        <div className="p-4">  
                            <h4 className="text-gray-800 font-eb-garamond text-2xl uppercase mb-2">Date</h4>  
                            <p className="text-gray-700 text-xl font-eb-garamond">{event.date}</p>  
                        </div>  
                        <div className="h-[2px] bg-[#c9ab81] my-4" />  
                        <div className="p-4">  
                            <h4 className="text-gray-800 font-eb-garamond text-2xl uppercase mb-2">Location</h4>  
                            <p className="text-gray-700 text-xl font-eb-garamond">{event.location}</p>  
                        </div>  
                        <div className="h-[2px] bg-[#c9ab81] my-4" />  
                        <div className="p-4">  
                            <h4 className="text-gray-800 font-eb-garamond text-2xl uppercase mb-2">Curator</h4>  
                            <p className="text-gray-700 text-xl font-eb-garamond">{event.curator}</p>  
                        </div>  
                        <div className="flex justify-center">  
                            <MainButton title="Get Ticket" onClick={() => setOpen(true)} />  
                        </div>  
                    </div>  
                </div>  
            </div>  

            {/* Dialog for Ticket Form */}  
            <Dialog open={open} handler={() => setOpen(false)} className="relative z-40 bg-white max-w-xl mx-auto shadow-xl">  
                <TicketForm onClose={() => setOpen(false)} />  
            </Dialog>  
        </div>  
    );  
}