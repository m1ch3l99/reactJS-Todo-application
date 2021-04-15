import { useEffect, useState } from "react";


function useFetchQuote() {
    const [quote, setQuote] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        const fetchQuote = async() =>{
            setIsLoading(true);
            await fetch("https://type.fit/api/quotes")
            .then(response=> response.json())
            .then(data=>{
                setQuote(
                    data[Math.floor(Math.random()*data.length)]
                )
                setIsLoading(false);
            })
        }
        fetchQuote();
    },[]);

    return { isLoading, quote }
}

export default useFetchQuote
