import TodoEditForm from "@/features/todos/components/TodoEditForm";
import TodoPageLayout from "@/features/todos/components/TodoPageLayout";
import prisma from "@/utils/prisma";

type EditTaskParams = {
  params: Promise<{ id: string }>;
};

const EditTask = async ({ params }: EditTaskParams) => {
  const { id } = await params;
  const todo = await prisma.todo.findUnique({
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
