using DNToolKit.Net;

namespace DNToolKit.Protocol;

public class EncryptedPacket
{
    
    
    public byte[] Data;
    public UdpHandler.Sender Sender;
    
    public EncryptedPacket(byte[] incData, UdpHandler.Sender sender)
    {
        Data = incData;
        Sender = sender;
    }
    
    

}