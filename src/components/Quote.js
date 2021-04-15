import React from 'react';
import useFetchQuote from '../Hooks/useFetchQuote';
import '../styles/Quote.css';

function Quote() {

    const {isLoading, quote} = useFetchQuote();

    return (
        <div className="quote">

            {
                isLoading ?
                    <h2 className="quote__desc">
                        Fetching The Quote of The Day...
                    </h2>
                    :
                    <div>
                        <h2 className="quote__desc">
                             {quote.text} 
                        </h2>
                        <h4 className="quote__author">
                            {
                                quote.author !== " " ?
                                `" ${quote.author} "`
                                :
                                ""
                            }
                        </h4>
                    </div>
            }

        </div>
    )
}

export default Quote
