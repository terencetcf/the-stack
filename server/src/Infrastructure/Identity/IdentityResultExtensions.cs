namespace TheStack.Infrastructure.Identity
{
    using System.Linq;

    using Microsoft.AspNetCore.Identity;

    using TheStack.Application.Common.Models;

    public static class IdentityResultExtensions
    {
        public static Result ToApplicationResult(this IdentityResult result)
        {
            return result.Succeeded
                ? Result.Success()
                : Result.Failure(result.Errors.Select(e => e.Description));
        }
    }
}