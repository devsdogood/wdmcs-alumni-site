import { IImageCollection } from "../@types/generated/contentful";
import 'react-slideshow-image/dist/styles.css'
// @ts-ignore
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
    );
};

export default ImageCollection;
