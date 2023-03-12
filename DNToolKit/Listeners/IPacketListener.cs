using DNToolKit.Protocol;

namespace DNToolKit.Listeners;

public interface IPacketListener
{
    public void OnPacket(Packet e);
}