import express from 'express';
import cors from 'cors';
import { MercadoPagoConfig, Preference } from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Initialize Mercado Pago
const accessToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
let client;

if (!accessToken || accessToken === 'TEST-YOUR-ACCESS-TOKEN-HERE') {
    console.warn('WARNING: Mercado Pago Access Token is missing or invalid. Payments will fail.');
} else {
    client = new MercadoPagoConfig({ accessToken: accessToken });
}

app.post('/api/create_preference', async (req, res) => {
    try {
        const { items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ error: 'No items provided' });
        }

        if (!client) {
            return res.status(500).json({ error: 'Mercado Pago not configured correctly. Check server logs.' });
        }

        const body = {
            items: items.map(item => ({
                title: item.name,
                quantity: Number(item.quantity),
                unit_price: Number(item.price),
                currency_id: 'ARS',
                picture_url: item.image
            })),
            back_urls: {
                success: 'http://localhost:5173/success', // Replace with prod URL later
                failure: 'http://localhost:5173/failure',
                pending: 'http://localhost:5173/pending'
            },
            auto_return: 'approved',
        };

        const preference = new Preference(client);
        const result = await preference.create({ body });

        res.json({ id: result.id });
    } catch (error) {
        console.error('Error creating preference:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
