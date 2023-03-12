using PacketDotNet;
using SharpPcap;

namespace DNToolKit.Listeners;

public interface IPcapListener
{
    public void OnPcap(RawCapture e, LinkLayers l);
    
}