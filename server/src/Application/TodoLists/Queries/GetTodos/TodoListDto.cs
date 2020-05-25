namespace TheStack.Application.TodoLists.Queries.GetTodos
{
    using System.Collections.Generic;

    using TheStack.Application.Common.Mappings;
    using TheStack.Domain.Entities;

    public class TodoListDto : IMapFrom<TodoList>
    {
        public TodoListDto()
        {
            Items = new List<TodoItemDto>();
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public IList<TodoItemDto> Items { get; set; }
    }
}
