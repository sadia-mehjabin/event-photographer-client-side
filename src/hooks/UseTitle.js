import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - event photographer`;
    }, [title] )
};

export default useTitle;