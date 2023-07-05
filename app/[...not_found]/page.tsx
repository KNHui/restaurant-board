"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        // Simulating a delay of 5 seconds before redirecting
        const redirectTimer = setTimeout(() => {
            router.push('/'); // Replace '/' with your desired page URL
        }, 5000);

        return () => clearTimeout(redirectTimer); // Clear the timeout if the component is unmounted before the redirect
    }, []);
    return <div style={{
        height: '80%',
        marginTop: '24px',
        textAlign: 'center'
    }}>
        <h1>404 - Page Not Found</h1>
        <p>Go to the main page after 5 seconds.</p>
    </div >
}
