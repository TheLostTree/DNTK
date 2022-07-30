using Common.Protobuf;

namespace DNToolKit.PacketProcessors;

public class AbilityInvokeProcessor
{
    public static void ProcessAbilityInvoke(Packet.Packet packet)
    {
        
        Program.FrontendManager.AddGamePacket(packet);
    }
}