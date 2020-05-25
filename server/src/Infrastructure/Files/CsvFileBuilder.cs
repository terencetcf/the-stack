namespace TheStack.Infrastructure.Files
{
    using System.Collections.Generic;
    using System.Globalization;
    using System.IO;

    using CsvHelper;

    using TheStack.Application.Common.Interfaces;
    using TheStack.Application.TodoLists.Queries.ExportTodos;
    using TheStack.Infrastructure.Files.Maps;

    public class CsvFileBuilder : ICsvFileBuilder
    {
        public byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records)
        {
            using var memoryStream = new MemoryStream();
            using (var streamWriter = new StreamWriter(memoryStream))
            {
                using var csvWriter = new CsvWriter(streamWriter, CultureInfo.InvariantCulture);

                csvWriter.Configuration.RegisterClassMap<TodoItemRecordMap>();
                csvWriter.WriteRecords(records);
            }

            return memoryStream.ToArray();
        }
    }
}
