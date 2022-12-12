import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

const Details = () => {
    const location = useLocation()
    const { project } = location.state
    console.log(project);
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
    ];
    return (
        <div className='min-h-screen text-center max-w-screen-xl mx-auto mt-10'>
            <h3 className='text-3xl text-center bg-base-300 py-4'>{project.name}</h3>
            {/* <ReactImageGallery items={images}></ReactImageGallery> */}
            {
                class MyGallery extends React.Component {
                    render() {
                        return <ReactImageGallery items={images}></ReactImageGallery>

                    }
                }
            }
            {/* <ImageGallery items={images} /> */}
             </div>
    );
};

export default Details;