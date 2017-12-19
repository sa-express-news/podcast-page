import { Podcast } from './types';
import { generateWCMPhotoSize } from './util';

const podcasts: Podcast[] = [
    {
        image: 'http://ww4.hdnux.com/photos/70/11/47/14719431/5/rawImage.jpg',
        title: 'Express Briefing',
        description: 'The daily briefing from the San Antonio Express-News.',
        links: [
            {
                url: 'https://itunes.apple.com/us/podcast/express-briefing/id1296731191?mt=2',
                name: 'Apple Podcasts'
            },
            {
                url: 'https://www.stitcher.com/podcast/san-antonio-expressnews/express-briefing',
                name: 'Stitcher'
            }
        ]
    },
    {
        image: 'http://ww4.hdnux.com/photos/70/11/47/14719435/4/rawImage.jpg',
        title: 'EN Depth',
        description: 'A weekly interview podcast from the San Antonio Express-News.',
        links: [
            {
                url: 'https://itunes.apple.com/us/podcast/en-depth/id1325721282?mt=2',
                name: 'Apple Podcasts'
            },
            {
                url: 'https://www.stitcher.com/s?fid=161142',
                name: 'Stitcher'
            }
        ]
    }
];

const podcastImageSet = podcasts.map((podcast) => {
    return Object.assign({}, podcast, { image: generateWCMPhotoSize(podcast.image) });
})

export default podcastImageSet;