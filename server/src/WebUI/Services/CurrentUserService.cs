﻿namespace TheStack.WebUI.Services
{
    using System.Security.Claims;

    using Microsoft.AspNetCore.Http;

    using TheStack.Application.Common.Interfaces;

    public class CurrentUserService : ICurrentUserService
    {
        public CurrentUserService(IHttpContextAccessor httpContextAccessor)
        {
            UserId = httpContextAccessor.HttpContext?.User?.FindFirstValue(ClaimTypes.NameIdentifier);
        }

        public string UserId { get; }
    }
}
