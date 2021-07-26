import { getStrapiMedia } from "../lib/media";
// import Image from 'next/image';

const Img = ({ image, style, className }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    // <div className={className}>
      <img
        src={imageUrl}
        alt={image?.alternativeText || image?.name || ''}
        // style={{
        //   position: 'relative'
        // }}
        className={className}
        // layout='fill'
      />
    // </div>
  );
};

export default Img;
