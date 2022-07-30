namespace DNToolKit.PacketProcessors;

public class CombatInvokeProcessor
{
    public static void ProcessAbilityInvoke(Packet.Packet packet)
    {
        Program.FrontendManager.AddGamePacket(packet);
    }
}