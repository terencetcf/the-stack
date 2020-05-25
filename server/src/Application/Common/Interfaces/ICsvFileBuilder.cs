namespace TheStack.Application.Common.Interfaces
{
    using System.Collections.Generic;

    using TheStack.Application.TodoLists.Queries.ExportTodos;

    public interface ICsvFileBuilder
    {
        byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
    }
}
