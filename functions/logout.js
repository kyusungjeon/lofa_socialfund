// functions/logout.js

export async function onRequestPost({ request }) {
    // In a real application with server-side sessions (e.g., using cookies),
    // this is where you would clear the session cookie.
    
    // Since our state is client-side (sessionStorage), the server doesn't
    // need to do much. We just return a success response to acknowledge.
    
    return new Response(JSON.stringify({ success: true, message: "Logged out successfully." }), {
        headers: { 
            'Content-Type': 'application/json'
            // In a real app, you might also have a 'Set-Cookie' header
            // here to expire the session cookie.
        },
        status: 200
    });
}
