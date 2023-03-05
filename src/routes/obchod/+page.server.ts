import { Delivery } from '@cloudinary/url-gen/actions/delivery';
import { Format } from '@cloudinary/url-gen/qualifiers';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { Cloudinary } from '@cloudinary/url-gen';
import { CLOUDINARY_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET } from '$env/static/private';

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: `${CLOUDINARY_NAME}`,
        apiKey: `${CLOUDINARY_KEY}`,
        apiSecret: `${CLOUDINARY_SECRET}`,
    }
});

export async function load() {
    const stool = cloudinary.image('truhlarslama.cz/stool_xgbssq.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(540).height(720));

    const stoolMobile = cloudinary.image('truhlarslama.cz/stool_xgbssq.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(323).height(430.66));

    return {
        stool: stool.toURL(),
        stoolMobile: stoolMobile.toURL(),
    }
}