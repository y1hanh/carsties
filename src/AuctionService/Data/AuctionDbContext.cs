using System;
using MassTransit;
using Microsoft.EntityFrameworkCore;

namespace AuctionService.Data;

public class AuctionDbContext : DbContext
{
  public AuctionDbContext(DbContextOptions options) : base(options)
  {
  }

  public DbSet<Entities.Auction> Auctions { get; set; }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    base.OnModelCreating(modelBuilder);

    modelBuilder.AddInboxStateEntity();
    modelBuilder.AddOutboxMessageEntity();
    modelBuilder.AddOutboxStateEntity();
  }
}
