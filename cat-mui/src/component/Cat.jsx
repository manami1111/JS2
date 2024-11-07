import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { Typography, Button, CircularProgress, Card, CardContent } from '@mui/material';

export const Cat = () => {
    const [catData, setCatData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCat();
    }, []);

    const fetchCat = async () => {
        setLoading(true);
        setError(null);

        try {
            const url = "https://aws.random.cat/meow"

            const response = await axios.get(url);
            console.log(response.data);
            setCatData(response.data);
        } catch (err) {
            setError('データの取得に失敗しました');
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = () => {
        fetchCat();
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleSearch}>
                画像を表示
            </Button>

            {loading && <CircularProgress style={{ marginTop: '1rem' }} />}
            {error && <Typography color="error" style={{ marginTop: '1rem' }}>{error}</Typography>}

            {catData && (
                <Card style={{ marginTop: '2rem' }}>
                    <CardContent>
                        <img src="{catData.file}" alt="猫の画像" />
                    </CardContent>
                </Card>
            )}
        </>
    );
} 