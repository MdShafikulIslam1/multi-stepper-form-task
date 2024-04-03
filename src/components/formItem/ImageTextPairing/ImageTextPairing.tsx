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
    <div className="flex items-center justify-center gap-10">
      <div className="w-64 h-64">
        <img src={image} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="text-start">
        <h1 className="text-xl md:text-2xl mb-4 font-semibold">{title}</h1>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

export default ImageTextPairing;
