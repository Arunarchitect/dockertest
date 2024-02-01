import { useEffect } from "react";
const usePageSEO = ({
    title,
    description,
    keywords = [],
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl
}) => {
    useEffect(() => {
        document.title = title;
        setMetaTag('name', 'description', description);
        setMetaTag('name', 'keywords', keywords);
        setMetaTag('property', 'og:title', ogTitle || title);
        setMetaTag('property', 'description', ogDescription || description);

        // Explicitly provide 'og:image' if available
        if (typeof ogImage === 'string') {
            setMetaTag('property', 'og:image', ogImage);
        } else if (ogImage && ogImage.url) {
            setMetaTag('property', 'og:image', ogImage.url);
        }

        setMetaTag('property', 'og:url', ogUrl || window.location.href);

        // Include the date and method of scraping in a comment
        // For example: <!-- Last scraped on: 2024-02-01, Method: Manual -->
        
        return () => {
            // Do any kind of cleanup here
        };
    }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl]);

    const setMetaTag = (attr, key, content) => {
        if (content) {
            let element = document.querySelector(`meta[${attr}="${key}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attr, key);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        }
    };
};

export default usePageSEO