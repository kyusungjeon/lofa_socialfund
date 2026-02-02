// In-memory store for this prototype.
// In a real application, you would use a database or Cloudflare KV.
const submissions = [];

export async function onRequestPost({ request }) {
    try {
        const formData = await request.formData();
        const submission = Object.fromEntries(formData);
        submission.date = new Date().toISOString();

        submissions.push(submission);
        console.log("New submission received:", submission);
        console.log("All submissions:", submissions);

        return new Response(JSON.stringify({
            status: 'success',
            message: 'Application submitted successfully.'
        }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });

    } catch (error) {
        console.error("Submission error:", error);
        return new Response(JSON.stringify({
            status: 'error',
            message: 'Failed to submit application.'
        }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}

// This function will be used by the admin endpoint to get the data.
// We are co-locating it here for simplicity of the in-memory store.
export function getSubmissions() {
    return submissions;
}
