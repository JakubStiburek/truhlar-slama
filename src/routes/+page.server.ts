import { Cloudinary } from "@cloudinary/url-gen";
import { CLOUDINARY_KEY, CLOUDINARY_NAME, CLOUDINARY_SECRET } from "$env/static/private";
import { format } from "@cloudinary/url-gen/actions/delivery";
import { Format } from "@cloudinary/url-gen/qualifiers";

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: `${CLOUDINARY_NAME}`,
        apiKey: `${CLOUDINARY_KEY}`,
        apiSecret: `${CLOUDINARY_SECRET}`,
    }
});

export async function load() {
    const stool = cloudinary.image('truhlarslama.cz/stool_xgbssq.jpg')
        .delivery(format(Format.webp()));
    const stoolDetail = cloudinary.image('truhlarslama.cz/stool-detail_ckws3b.jpg')
        .delivery(format(Format.webp()));
    const stoolDetailFull = cloudinary.image('truhlarslama.cz/stool-detail-full_dp9ewk.jpg')
        .delivery(format(Format.webp()));
    const stoolWithPerson = cloudinary.image('truhlarslama.cz/stool-with-person_jzgaq4.jpg')
        .delivery(format(Format.webp()));
    const nightStand = cloudinary.image('truhlarslama.cz/night-stand_zc4xnb.jpg')
        .delivery(format(Format.webp()));
    const nightStandDetail = cloudinary.image('truhlarslama.cz/night-stand-detail_ipwvsh.jpg')
        .delivery(format(Format.webp()));
    const nightStandOpen = cloudinary.image('truhlarslama.cz/night-stand-open_zujpif.jpg')
        .delivery(format(Format.webp()));

    return {
        stool: stool.toURL(),
        stoolDetail: stoolDetail.toURL(),
        stoolDetailFull: stoolDetailFull.toURL(),
        stoolWithPerson: stoolWithPerson.toURL(),
        nightStand: nightStand.toURL(),
        nightStandDetail: nightStandDetail.toURL(),
        nightStandOpen: nightStandOpen.toURL(),
    };
}
