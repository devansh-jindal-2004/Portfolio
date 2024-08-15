"use client"
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import React, { useRef, useState } from 'react';

function Sound() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }} className='text-forground rounded-full flex items-center justify-center custom-bg fixed top-4 right-2.5 xs:right-4 w-fit self-start z-50'>
            <audio ref={audioRef} loop>
                <source src={"/audio/back.mp3"} type='audio/mpeg' />
                Your browser doesn't support the audio element.
            </audio>
            <span onClick={toggleAudio} className='relative w-14 h-14 p-4 hover:text-accent'>
                {
                    isPlaying ? <Volume2 className='w-full h-auto' strokeWidth={1.5} /> : <VolumeX className='w-full h-auto' strokeWidth={1.5} />
                }
            </span>
        </motion.button>
    );
}

export default Sound;
