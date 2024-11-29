import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: -1,
            left: -1,
            behavior: 'smooth' // Enables smooth scroll
        });
    }, [pathname]);

    return null;
};

export default ScrollToTop;
