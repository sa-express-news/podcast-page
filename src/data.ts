import { Podcast } from './types';
import { generateWCMPhotoSize } from './util';

const podcasts: Podcast[] = [
    {
        image: 'https://s.hdnux.com/photos/71/01/11/14946933/4/rawImage.jpg',
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
        image: 'https://s.hdnux.com/photos/71/01/11/14946936/4/rawImage.jpg',
        title: 'EN-Depth',
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
    },
    // {
    //     image: 'https://s.hdnux.com/photos/71/01/11/14946938/3/rawImage.jpg',
    //     title: 'The Docket',
    //     description: 'Write me',
    //     links: [
    //         {
    //             url: 'Paste link',
    //             name: 'Apple Podcasts'
    //         },
    //         {
    //             url: 'Paste link',
    //             name: 'Stitcher'
    //         }
    //     ]
    // }
];

const podcastImageSet = podcasts.map((podcast) => {
    return Object.assign({}, podcast, { image: generateWCMPhotoSize(podcast.image) });
})

export default podcastImageSet;