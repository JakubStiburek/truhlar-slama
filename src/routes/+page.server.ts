import { Cloudinary } from "@cloudinary/url-gen";
import { CLOUDINARY_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET } from "$env/static/private";
import { Delivery } from "@cloudinary/url-gen/actions/delivery";
import { Format } from "@cloudinary/url-gen/qualifiers";
import { scale } from "@cloudinary/url-gen/actions/resize";

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: `${CLOUDINARY_NAME}`,
        apiKey: `${CLOUDINARY_KEY}`,
        apiSecret: `${CLOUDINARY_SECRET}`,
    }
});

const imageCodes = [
    'stool-detail_ckws3b',
    'night-stand-detail_ipwvsh',
    'night-stand_zc4xnb',
    'night-stand-open_zujpif',
    'stool_xgbssq',
    'stool-detail-full_dp9ewk',
    'stool-with-person_jzgaq4',
]

export async function load() {
    try {
        const desktopImagesUrlList = await Promise.all(imageCodes.map(code => {
            return cloudinary.image(`truhlarslama.cz/${code}.jpg`)
                .delivery(Delivery.format(Format.webp()))
                .resize(scale().width(540).height(720))
                .toURL();
        }));

        const mobileImagesUrlList = await Promise.all(imageCodes.map(code => {
            return cloudinary.image(`truhlarslama.cz/${code}.jpg`)
                .delivery(Delivery.format(Format.webp()))
                .resize(scale().width(323).height(430))
                .toURL();
        }));

        return {
            desktopImagesUrlList,
            mobileImagesUrlList,
        };
    } catch {
        console.error('Error while loading images from Cloudinary');
    }
}
