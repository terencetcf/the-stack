namespace TheStack.Application.TodoLists.Queries.ExportTodos
{
    using TheStack.Application.Common.Mappings;
    using TheStack.Domain.Entities;

    public class TodoItemRecord : IMapFrom<TodoItem>
    {
        public string Title { get; set; }

        public bool Done { get; set; }
    }
}
