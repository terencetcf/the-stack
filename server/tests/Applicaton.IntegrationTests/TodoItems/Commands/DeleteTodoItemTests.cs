namespace TheStack.Application.IntegrationTests.TodoItems.Commands
{
    using System.Threading.Tasks;

    using FluentAssertions;

    using NUnit.Framework;

    using TheStack.Application.Common.Exceptions;
    using TheStack.Application.TodoItems.Commands.CreateTodoItem;
    using TheStack.Application.TodoItems.Commands.DeleteTodoItem;
    using TheStack.Application.TodoLists.Commands.CreateTodoList;
    using TheStack.Domain.Entities;

    using static Testing;

    public class DeleteTodoItemTests : TestBase
    {
        [Test]
        public void ShouldRequireValidTodoItemId()
        {
            var command = new DeleteTodoItemCommand { Id = 99 };

            FluentActions.Invoking(() =>
                SendAsync(command)).Should().Throw<NotFoundException>();
        }

        [Test]
        public async Task ShouldDeleteTodoItem()
        {
            var listId = await SendAsync(new CreateTodoListCommand
            {
                Title = "New List"
            });

            var itemId = await SendAsync(new CreateTodoItemCommand
            {
                ListId = listId,
                Title = "New Item"
            });

            await SendAsync(new DeleteTodoItemCommand
            {
                Id = itemId
            });

            var list = await FindAsync<TodoItem>(listId);

            list.Should().BeNull();
        }
    }
}
