import { useState, useEffect } from 'react';

export default function QuoteWidget() {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        // Using dummyjson quotes api
        fetch('https://dummyjson.com/quotes/random')
            .then(res => res.json())
            .then(data => setQuote(data))
            .catch(err => console.error("Failed to fetch quote", err));
    }, []);

    if (!quote) return (
        <div className="space-y-3 animate-pulse">
            <div className="h-4 bg-white/20 rounded w-3/4"></div>
            <div className="h-4 bg-white/20 rounded w-1/2"></div>
        </div>
    );

    return (
        <div className="relative">
            <svg className="absolute -top-4 -left-4 w-8 h-8 text-white/10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
            </svg>
            <div className="pl-2">
                <p className="text-xl font-light italic leading-relaxed text-blue-100/90 mb-3">"{quote.quote}"</p>
                <p className="text-right text-sm font-semibold tracking-wide text-white/50 uppercase">— {quote.author}</p>
            </div>
        </div>
    );
}
