import { ReactNode } from "react";

type TodoPageLayoutProps = {
  children: ReactNode;
  title: string;
  btn?: ReactNode;
};

const TodoPageLayout = ({ btn, children, title }: TodoPageLayoutProps) => {
  return (
    <div className="flex flex-col justify-center items-center p-8 rounded-lg bg-white gap-6 w-full mx-8 md:mx-16 lg:mx-24 max-w-3xl shadow-lg">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-3xl font-bold">{title}</h2>
        {btn}
      </div>
      {children}
    </div>
  );
};

export default TodoPageLayout;
