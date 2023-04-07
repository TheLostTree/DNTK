using DNToolKit.Configuration.Models;

namespace IridiumBackend.Configuration
{
    class FrontendConfig:Config
    {
        public string FrontendUrl { get; set; } = "ws://127.0.0.1:40510";
    }
}
