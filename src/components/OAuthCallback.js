import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OAuthCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const exchangeCode = async () => {
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');
            if (code) {
                try {
                    const res = await axios.post('https://server-f8g6.onrender.com/me', {
                        code,
                    });

                    const token = res.data.token;
                    localStorage.setItem('app_token', token);
                    navigate('/'); // go to home or dashboard
                } catch (error) {
                    console.error('OAuth token exchange failed', error);
                    navigate('/login');
                }
            } else {
                console.error('No code in URL');
                navigate('/login');
            }
        };

        exchangeCode();
    }, [navigate]);

    return <div>Logging in...</div>;
};

export default OAuthCallback;
