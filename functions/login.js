// functions/login.js

export async function onRequestPost({ request }) {
    try {
        const { username, password } = await request.json();

        // Mock users - in a real app, you'd check a database
        const users = {
            user: '1234',
            admin: 'admin'
        };

        if (users[username] && users[username] === password) {
            const responseBody = {
                success: true,
                message: "Login successful",
                role: username
            };
            // In a real app, you would set a secure, HTTP-only cookie here
            // For this example, we'll just return the role in the body
            return new Response(JSON.stringify(responseBody), {
                headers: { 'Content-Type': 'application/json' },
                status: 200
            });
        } else {
            return new Response(JSON.stringify({ success: false, message: "Invalid username or password" }), {
                headers: { 'Content-Type': 'application/json' },
                status: 401
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ success: false, message: "An error occurred" }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}