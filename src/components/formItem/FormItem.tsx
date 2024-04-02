/* eslint-disable @typescript-eslint/no-explicit-any */

interface IFormItemProps {
  title: string;
  description: string;
  data: { title: string; image: string }[];
  setSelectedItem: any;
  selectedItem: any;
  handleItemClick: (index: number, title: string) => void;
}

const FormItem = ({
  title,
  description,
  data,
  selectedItem,
  handleItemClick,
}: IFormItemProps) => {
  return (
    <div>
      <div className="my-6">
        <h1 className="text-4xl font-semibold mb-4">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="space-y-2">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`h-14 border rounded-md flex justify-start items-center cursor-pointer ${
              selectedItem === index ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => handleItemClick(index, item.title)}
          >
            <div className="w-20">
              <img src={item?.image} alt="avatar" />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormItem;
