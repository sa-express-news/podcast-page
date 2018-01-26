export const generateWCMPhotoSize = (imgURL: string): string => {

    if (imgURL.indexOf('rawImage') >= 0) {
        const windowWidth = window.innerWidth;

        const replaceRawImageWithSize = (string: string): string => {
            return imgURL.replace('rawImage', string);
        }

        if (windowWidth <= 500) {
            return replaceRawImageWithSize('500x500');
        } else {
            return replaceRawImageWithSize('800x800');
        }
    } else {
        return imgURL;
    }
}