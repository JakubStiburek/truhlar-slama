import { cloudinary } from "./+page.server";


export async function load() {
    return {
        logoSrc: cloudinary.image('truhlarslama.cz/logo_lvmkdz.jpg').toURL()
    };
}
