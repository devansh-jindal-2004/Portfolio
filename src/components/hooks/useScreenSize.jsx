"use clien"

import { useEffect, useState } from "react";

const useScreenSize = () => {

    const [screenSize, setScreenSize] = useState()

    useEffect(() => {
        function getScreenSize(){
            return window.innerWidth;
        }

        function handelResize(){
            setScreenSize(getScreenSize())
        }

        handelResize()

        window.addEventListener("resize", handelResize)

        return () => window.removeEventListener("resize", handelResize)

    }, [])

    return screenSize
}

export default useScreenSize;