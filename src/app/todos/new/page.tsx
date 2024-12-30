import TodoNewForm from "@/features/todos/components/TodoNewForm";
import TodoPageLayout from "@/features/todos/components/TodoPageLayout";

const NewTask = () => {
  return (
    <TodoPageLayout title="Create Todo">
      <TodoNewForm />
    </TodoPageLayout>
  );
};

export default NewTask;
