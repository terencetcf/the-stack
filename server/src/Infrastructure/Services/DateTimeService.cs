using TheStack.Application.Common.Interfaces;
using System;

namespace TheStack.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
