import { IImageCollection } from "../@types/generated/contentful";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
type ImageCollectionProps = {
    entry: IImageCollection;
};

const ImageCollection: React.FC<ImageCollectionProps> = ({ entry }) => {
    return (
        <div>
            <div className="slide-container">
                <Slide>
                {entry.fields.content.map((image, index) => (
                    <div className="each-slide" key={index}>
                        <div style={{ 'height': '400px', 'margin': 'auto', 'maxWidth': '500px', 'backgroundSize': 'cover', 'backgroundImage': `url(${image.fields.file.url})` }}>
                        </div>
                        <div style={{textAlign: 'center',}}>{image.fields.description}</div>
                    </div>
                ))}
                </Slide>
            </div>
        </div>
        // <div style={{border: 'red 1px solid'}}>
        //     {entry.fields.content.map((image) => (
        //         <img src={image.fields.file.url} key={image.fields.file.url}></img>
        //     ))}
        // </div>
    );
};

export default ImageCollection;
