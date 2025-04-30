//this component makes the page auto scroll to top
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
        // console.log(pathname)
        /* settimeout makes sure this run after components have rendered. This will help fixing bug for some views where scroll to top not working correctly */
        setTimeout(() => {
            // window.scrollTo({ top: 0, behavior: 'smooth' })
            window.scrollTo(0, 0)
        }, 0)
    }, [pathname])
    return null
}

export default ScrollTop;