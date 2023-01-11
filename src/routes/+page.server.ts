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

export async function load() {
    const stool = cloudinary.image('truhlarslama.cz/stool_xgbssq.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(540).height(720));
    const stoolDetail = cloudinary.image('truhlarslama.cz/stool-detail_ckws3b.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(540).height(720));
    const stoolDetailFull = cloudinary.image('truhlarslama.cz/stool-detail-full_dp9ewk.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(540).height(720));
    const stoolWithPerson = cloudinary.image('truhlarslama.cz/stool-with-person_jzgaq4.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(540).height(720));
    const nightStand = cloudinary.image('truhlarslama.cz/night-stand_zc4xnb.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(540).height(720));
    const nightStandDetail = cloudinary.image('truhlarslama.cz/night-stand-detail_ipwvsh.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(540).height(720));
    const nightStandOpen = cloudinary.image('truhlarslama.cz/night-stand-open_zujpif.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(540).height(720));

    const stoolMobile = cloudinary.image('truhlarslama.cz/stool_xgbssq.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(323).height(430.66));
    const stoolDetailMobile = cloudinary.image('truhlarslama.cz/stool-detail_ckws3b.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(323).height(430.66));
    const stoolDetailFullMobile = cloudinary.image('truhlarslama.cz/stool-detail-full_dp9ewk.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(323).height(430.66));
    const stoolWithPersonMobile = cloudinary.image('truhlarslama.cz/stool-with-person_jzgaq4.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(323).height(430.66));
    const nightStandMobile = cloudinary.image('truhlarslama.cz/night-stand_zc4xnb.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(323).height(430.66));
    const nightStandDetailMobile = cloudinary.image('truhlarslama.cz/night-stand-detail_ipwvsh.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(323).height(430.66));
    const nightStandOpenMobile = cloudinary.image('truhlarslama.cz/night-stand-open_zujpif.jpg')
        .delivery(Delivery.format(Format.webp()))
        .resize(scale().width(323).height(430.66));

    return {
        stool: stool.toURL(),
        stoolDetail: stoolDetail.toURL(),
        stoolDetailFull: stoolDetailFull.toURL(),
        stoolWithPerson: stoolWithPerson.toURL(),
        nightStand: nightStand.toURL(),
        nightStandDetail: nightStandDetail.toURL(),
        nightStandOpen: nightStandOpen.toURL(),

        stoolMobile: stool.toURL(),
        stoolDetailMobile: stoolDetail.toURL(),
        stoolDetailFullMobile: stoolDetailFull.toURL(),
        stoolWithPersonMobile: stoolWithPerson.toURL(),
        nightStandMobile: nightStand.toURL(),
        nightStandDetailMobile: nightStandDetail.toURL(),
        nightStandOpenMobile: nightStandOpen.toURL(),
    };
}
