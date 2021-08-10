import React from 'react';

const PhotosArray = [
    <img src={'https://picsum.photos/200?random=1'} alt={'Random logo'}/>,
    <img src={'https://picsum.photos/200?random=2'} alt={'Random logo'}/>,
    <img src={'https://picsum.photos/200?random=3'} alt={'Random logo'}/>,
    <img src={'https://picsum.photos/200?random=4'} alt={'Random logo'}/>,
    <img src={'https://picsum.photos/200?random=5'} alt={'Random logo'}/>,
    <img src={'https://picsum.photos/200?random=6'} alt={'Random logo'}/>,
    <img src={'https://picsum.photos/200?random=7'} alt={'Random logo'}/>,
    <img src={'https://picsum.photos/200?random=8'} alt={'Random logo'}/>,
    <img src={'https://picsum.photos/200?random=9'} alt={'Random logo'}/>,
    <img src={'https://picsum.photos/200?random=10'} alt={'Random logo'}/>,
    <img src={'https://picsum.photos/200?random=11'} alt={'Random logo'}/>,
    <img src={'https://picsum.photos/200?random=12'} alt={'Random logo'}/>
];

const Photos = () => {
    return(
        <div className="photo_box">
            {PhotosArray.map(photo => photo)}
        </div>
    )
}

export default Photos;