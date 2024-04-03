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
        <h1 className="text-2xl font-semibold mb-4">{title}</h1>
        <p className="text-slate-600">{description}</p>
      </div>
      <div className="space-y-2">
        {data?.map((item, index) => (
          <div
            key={index}
            className={`h-16 border rounded-md flex justify-start items-center cursor-pointer ${
              selectedItem === index
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
            onClick={() => handleItemClick(index, item.title)}
          >
            <div className="w-12">
              <img src={item?.image} alt="avatar" className="w-full h-full" />
            </div>
            <p className="text-slate-600">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormItem;
