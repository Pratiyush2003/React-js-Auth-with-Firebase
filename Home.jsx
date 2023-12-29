import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
        // Listening for authentication state changes
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                setUser(user);
            } else {
                // No user is signed in.
                setUser(null);
            }
        });

        // Unsubscribe when the component unmounts
        return () => unsubscribe();
    }, []);

    // Render the user details if available
    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.displayName}</h1>
                    <h1>{user.email}</h1>
                    <img src={user.photoURL} alt="User" />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Home;
