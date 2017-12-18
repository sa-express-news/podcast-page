export const generateWCMPhotoSize = (imgURL: string): string => {

    if (imgURL.indexOf('rawImage') >= 0) {
        const windowWidth = window.innerWidth;

        const replaceRawImageWithSize = (string: string): string => {
            return imgURL.replace('rawImage', string);
        }

        if (windowWidth <= 500) {
            return replaceRawImageWithSize('500x500');
        } else if (windowWidth > 500 && windowWidth <= 800) {
            return replaceRawImageWithSize('800x800');
        } else if (windowWidth > 800 && windowWidth <= 1200) {
            return replaceRawImageWithSize('1200x1200');
        } else {
            return replaceRawImageWithSize('1600x1600');
        }
    } else {
        return imgURL;
    }
}