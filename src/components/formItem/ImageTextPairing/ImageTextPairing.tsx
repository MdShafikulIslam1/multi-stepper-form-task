/* eslint-disable @typescript-eslint/no-explicit-any */
interface IImageTextPairingProps {
  image: string;
  title: string;
  description: string;
}

const ImageTextPairing = ({
  image,
  title,
  description,
}: IImageTextPairingProps) => {
  return (
    <div className="flex gap-10 items-center justify-center">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageTextPairing;
