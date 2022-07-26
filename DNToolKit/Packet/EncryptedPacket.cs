using DNToolKit.Sniffer;

namespace DNToolKit.Packet;

public class EncryptedPacket
{
    
    
    public byte[] Data;
    public long RecvTime;
    public UdpHandler.Sender Sender;
    
    public EncryptedPacket(byte[] incData, UdpHandler.Sender sender)
    {
        Data = incData;
        RecvTime = DateTimeOffset.Now.ToUnixTimeMilliseconds();
        Sender = sender;
    }
    
    

}