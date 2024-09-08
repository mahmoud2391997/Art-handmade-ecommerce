import { useState, useEffect } from 'react';  
import { useDispatch, useSelector } from 'react-redux';
import { fetchEventsActions } from '../../Redux/actions/EventsActions';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';  
import HoverButton from '../Shared/HoverButton/HoverButton';
import RollUp from '../RollUpButton/RollUp';

export default function EventsCard() { 
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const {events, status, error} = useSelector((state) => state.events)

    useEffect(() => {
        dispatch(fetchEventsActions());
    }, []);

    const handleEventClick = (eventId) => {  
        navigate(`/events/${eventId}`); 
    }; 

    if (status === "loading") return <p>Loading...</p>;
    if (status === "failed") return <p>{error}</p>;

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (  
        <div className="relative pb-[500px] z-40 sm:w-full">  
            <div className="bg-white pb-[50px] w-full">  
                <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-40 p-16">  
                    {events.map((event) => (  
                        <Card   
                            key={event._id}   
                            className="bg-white rounded-none relative flex flex-col"  
                        >  
                            <div className="overflow-hidden">  
                                <img   
                                    src={event.image}   
                                    alt={event.title}   
                                    className="relative w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"  
                                />  
                            </div>  
                            <CardBody className="bg-white bottom-0 w-[100%] md:bottom-[-50px] md:w-[85%] mx-auto my-auto absolute left-0 ">  
                                <Typography variant="h5" color="blue-gray" className="mb-2 font-eb-garamond text-lg text-[#c9ab81] tracking-widest italic font-light">  
                                    On-view collection  
                                </Typography>  
                                <Typography variant="h5" color="blue-gray" className="mb-2 font-eb-garamond text-gray-800 uppercase text-lg md:text-xl lg:text-2xl xl:text-3xl tracking-widest font-light">  
                                    {event.title}  
                                </Typography> 
                                <HoverButton title='view more' onClick={() => handleEventClick(event._id)} />
                            </CardBody>  
                        </Card>  
                    ))}  
                </div>  
            </div>
            <RollUp />
        </div>  
    );  
}