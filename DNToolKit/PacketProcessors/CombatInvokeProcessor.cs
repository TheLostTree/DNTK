namespace DNToolKit.PacketProcessors;

public class CombatInvokeProcessor
{
    public static void ProcessCombatInvoke(Packet.Packet packet)
    {
        Program.FrontendManager.AddGamePacket(packet);
    }
}