using System.Net;
using MassTransit;
using AutoMapper;
using Polly;
using Polly.Extensions.Http;
using SearchService.Data;
using SearchService.Services;
using SearchService.Consumers;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddHttpClient<AuctionSvcHttpClient>().AddPolicyHandler(GetPolicy());

builder.Services.AddMassTransit(x =>
{
  // add consumer
  x.AddConsumersFromNamespaceContaining<AuctionCreatedConsumer>();
  x.AddConsumersFromNamespaceContaining<AuctionDeletedConsumer>();
  x.AddConsumersFromNamespaceContaining<AuctionUpdatedConsumer>();

  x.SetEndpointNameFormatter(new KebabCaseEndpointNameFormatter("search", false));

  x.UsingRabbitMq((context, cfg) =>
  {
    cfg.ReceiveEndpoint("search-auction-created", (e) =>
    {
      e.UseMessageRetry(r => r.Interval(5, 5));
      e.ConfigureConsumer<AuctionCreatedConsumer>(context);
    });
    cfg.ConfigureEndpoints(context);
  });
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();

app.Lifetime.ApplicationStarted.Register(async () =>
{
  try
  {
    await Dbinitializer.InitDb(app);
  }
  catch (Exception e)
  {
    Console.WriteLine(e);
  }
}
);


app.Run();


// http pollying will keep request , if auction service fail
static IAsyncPolicy<HttpResponseMessage> GetPolicy()
=> HttpPolicyExtensions
    .HandleTransientHttpError()
    .OrResult(msg => msg.StatusCode == HttpStatusCode.NotFound)
    .WaitAndRetryForeverAsync(_ => TimeSpan.FromSeconds(3));

