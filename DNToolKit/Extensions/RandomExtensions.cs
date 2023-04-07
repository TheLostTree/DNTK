namespace DNToolKit.Extensions
{
    /// <summary>
    /// Extensions for <see cref="Random"/>.
    /// </summary>
    static class RandomExtensions
    {
        /// <summary>
        /// Expands <see cref="Random.NextDouble"/> to <see cref="ulong"/>.
        /// </summary>
        /// <param name="rand">The <see cref="Random"/> instance to work with.</param>
        /// <returns>The next expanded random value.</returns>
        public static ulong NextUInt64(this Random rand) => (ulong)(rand.NextDouble() * ulong.MaxValue);
    }
}
