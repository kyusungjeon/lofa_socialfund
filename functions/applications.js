// functions/applications.js
import { getSubmissions } from './submit.js';

export async function onRequestGet({ request }) {
    // SECURITY NOTE: In a real application, this endpoint should be protected.
    // It should verify a session cookie or a token to ensure the user is an
    // authenticated administrator before returning data.
    // For this prototype, we are relying on the client-side to guard this page.

    try {
        const submissions = getSubmissions();
        return new Response(JSON.stringify(submissions), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (error) {
        console.error("Error fetching submissions:", error);
        return new Response(JSON.stringify([]), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
