const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

const generateimage = async (req, res) => {
    try {
        const res = await openai.createImage({
            prompt: 'Kreuzfahrtschiff auf dem Meer, realistisch',
            size: '512x512',
            n: 1
        })

        const imageUrl = res.data.images[0];

        return res.status(200).json({
            success: true,
            data: imageUrl
        });
    } catch(error) {
        if(error.response) {
            console.error(error.response.status);
            console.error(error.response.data);
        } else {
            console.error(error.message);
        }
        return res.status(400).send({
            success: false,
            error: 'Bild konnte nicht generiert werden.'
        });
    }
};

module.exports = generateimage;