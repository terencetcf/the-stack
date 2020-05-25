namespace TheStack.Application.IntegrationTests.TodoLists.Commands
{
    using System.Threading.Tasks;

    using FluentAssertions;

    using NUnit.Framework;

    using TheStack.Application.Common.Exceptions;
    using TheStack.Application.TodoLists.Commands.CreateTodoList;
    using TheStack.Application.TodoLists.Commands.DeleteTodoList;
    using TheStack.Domain.Entities;

    using static Testing;

    public class DeleteTodoListTests : TestBase
    {
        [Test]
        public void ShouldRequireValidTodoListId()
        {
            var command = new DeleteTodoListCommand { Id = 99 };

            FluentActions.Invoking(() =>
                SendAsync(command)).Should().Throw<NotFoundException>();
        }

        [Test]
        public async Task ShouldDeleteTodoList()
        {
            var listId = await SendAsync(new CreateTodoListCommand
            {
                Title = "New List"
            });

            await SendAsync(new DeleteTodoListCommand
            {
                Id = listId
            });

            var list = await FindAsync<TodoList>(listId);

            list.Should().BeNull();
        }
    }
}
