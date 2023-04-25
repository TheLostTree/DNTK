using DNToolKit.Configuration.Models;
using Newtonsoft.Json;

namespace DNToolKit.Configuration
{
    /// <summary>
    /// The provider for configurations of type <see cref="Config"/>.
    /// </summary>
    public static class ConfigurationProvider
    {
        /// <summary>
        /// Load a configuration from <paramref name="configPath"/>.
        /// </summary>
        /// <typeparam name="TConfig">The type of configuration to parse. Has to be or derive from <see cref="Config"/>.</typeparam>
        /// <param name="configPath">The path to load the configuration from.</param>
        /// <returns>The loaded <typeparamref name="TConfig"/> or its empty implementation.</returns>
        public static TConfig LoadConfig<TConfig>(string? configPath = null)
            where TConfig : new()
        {
            if (string.IsNullOrEmpty(configPath))
                return new TConfig();

            if (!File.Exists(configPath))
                return new TConfig();

            var text = File.ReadAllText(configPath);
            return JsonConvert.DeserializeObject<TConfig>(text) ?? new TConfig();
        }
    }
}
