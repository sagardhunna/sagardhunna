const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;
const { createClient } = require("pexels");

app.use(cors());

const PEXELS_API_KEY = "VHPvMqTtlEgdotvIpQzDNmkv8iWk4brlClpNacMp3M98fbZ5bwhVFyC1";

const client = createClient(PEXELS_API_KEY);

const query = 'Ocean';




app.get("/api/home", async (req, res) => {
    try {
        
        const photos = await client.photos.search({ query, per_page: 80 }); /* max 80 images */
        const randomNumber1 = Math.floor(Math.random() * 79) + 1;
        const image1 = photos.photos[randomNumber1].src.original;
        const randomNumber2 = Math.floor(Math.random() * 79) + 1;
        const image2 = photos.photos[randomNumber2].src.original;

        res.json({ image1, image2 }); 

    } catch (error) {
        res.status(500).json({ error: "Unable to fetch image from pexels!" });
    }
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});