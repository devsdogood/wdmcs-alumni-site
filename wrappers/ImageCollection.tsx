import { IImageCollection } from "../@types/generated/contentful";

type ImageCollectionProps = {
    entry: IImageCollection;
};

const ImageCollection: React.FC<ImageCollectionProps> = ({ entry }) => {
    return (
        <div style={{border: 'red 1px solid'}}>
            {entry.fields.content.map((image) => (
                <div key={image.fields.file.url}>image at {`https:${image.fields.file.url}`}</div>
            ))}
        </div>
    );
};

export default ImageCollection;
