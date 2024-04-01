import { useState } from "react";
import { bestOptions } from "../../constant";

interface IFormItemProps {
  title: string;
  description: string;
}

const FormItem = ({ title, description }: IFormItemProps) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setSelectedItem(index); // Update the selected item when clicked
  };

  return (
    <div>
      <div className="my-6">
        <h1 className="text-4xl font-semibold mb-4">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="space-y-2">
        {bestOptions?.map((item, index) => (
          <div
            key={index}
            className={`h-14 border rounded-md flex justify-start items-center cursor-pointer ${
              selectedItem === index ? "border-blue-500" : "border-gray-300"
            }`}
            onClick={() => handleItemClick(index)}
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
