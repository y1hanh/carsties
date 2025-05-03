using System;

namespace AuctionService.DTOs;

public class UpdateAuctionDtos
{
  public string Make { get; set; }
  public string Model { get; set; }
  public int? Year { get; set; }
  public string Color { get; set; }
  public int? Mileage { get; set; }
  public string ImageUrl { get; set; }

}
