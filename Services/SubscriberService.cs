using Crito.Contexts;
using Crito.Models;
using Microsoft.EntityFrameworkCore;
using Polly;

namespace Crito.Services;

public class SubscriberService
{
    private readonly DataContext _context;

    public SubscriberService(DataContext context)
    {
        _context = context;
    }

    public async Task<bool> AddSubscriberAsync(NewsLetterForm form)
    {
        try
        {
            var alreadySubscriber = await _context.Subscribers.FirstOrDefaultAsync(x => x.Email == form.Email);

            if (alreadySubscriber != null)
            {
                return false;
            }
            else
            {
                _context.Subscribers.Add(new SubscriberEntity
                {
                    Email = form.Email,
                });

                await _context.SaveChangesAsync();

                return true;
            }
        }
        catch
        {
            return false;
        }
    }

}


