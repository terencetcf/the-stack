namespace TheStack.Infrastructure.Files.Maps
{
    using System.Globalization;

    using CsvHelper.Configuration;

    using TheStack.Application.TodoLists.Queries.ExportTodos;

    public class TodoItemRecordMap : ClassMap<TodoItemRecord>
    {
        public TodoItemRecordMap()
        {
            AutoMap(CultureInfo.InvariantCulture);
            Map(m => m.Done).ConvertUsing(c => c.Done ? "Yes" : "No");
        }
    }
}
