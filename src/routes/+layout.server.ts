import { Cloudinary } from "@cloudinary/url-gen";
import { CLOUDINARY_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET } from "$env/static/private";

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: `${CLOUDINARY_NAME}`,
        apiKey: `${CLOUDINARY_KEY}`,
        apiSecret: `${CLOUDINARY_SECRET}`,
    }
});

export async function load() {
    return {
        logoSrc: cloudinary.image('truhlarslama.cz/logo_lvmkdz.jpg').toURL()
    };
}
