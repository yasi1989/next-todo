import TodoEditForm from "@/features/todos/components/TodoEditForm";
import TodoPageLayout from "@/features/todos/components/TodoPageLayout";
import prisma from "@/utils/prisma";

type EditTaskProps = {
  params: { id: string };
};

const EditTask = async ({ params }: EditTaskProps) => {
  const { id } = await params;
  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  if (!todo) {
    return <div>データが見つかりませんでした。</div>;
  }

  return (
    <TodoPageLayout title="Create Todo">
      <TodoEditForm todo={todo} />
    </TodoPageLayout>
  );
};

export default EditTask;
