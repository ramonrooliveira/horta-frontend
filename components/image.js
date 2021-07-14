import { getStrapiMedia } from "../lib/media";

const Image = ({ image, style, className }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <img
      src={imageUrl}
      alt={image?.alternativeText || image?.name || ''}
      style={style}
      class={className}
    />
  );
};

export default Image;
