using DNToolKit.Net;
using DNToolKit.PacketProcessors;

namespace DNToolKit.Protocol.KCP;

// add more wrapper methods as necessary
 public class Kcp
 {
     private readonly IKCP _ikcp;
     private readonly object _lockObj = new();
     
     private readonly Action<byte[], UdpHandler.Sender> _onKcpPacket;
     private readonly UdpHandler.Sender _user;
     
     public Kcp(uint conv, uint token, UdpHandler.Sender user, Action<byte[], UdpHandler.Sender> onKcpPacket)
     {
         
         _ikcp = new IKCP(conv, token, user);
         _user = user;
         _ikcp.NoDelay(1, 10, 2, 0);
         _ikcp.WndSize(256, 256);
         _ikcp.SetOutput((_, _, _) =>
         {
         });
         _onKcpPacket = onKcpPacket;
     }


     public void ReceiveAll()
     {

         byte[]? recv;
         do
         {
             recv = Recv();
             if (recv == null)
             {
                 break;
             }
             _onKcpPacket(recv,_user);
         } while (true);
         
     }

     public void Update()
     {
         lock (_lockObj)
         {
             _ikcp.Update(Program.Now());
         }
     }

     private byte[]? Recv()
     {
         if (_ikcp == null)
         {
             throw new Exception("KCP not initialized yet...");
         }

         lock (_lockObj)
         {
             int size = _ikcp.PeekSize();
             if (size < 0) return null;
             
             var buffer = new byte[size];
             _ikcp.Recv(buffer, 0, buffer.Length);
             //uh what happens if buffer is null tho?
             return buffer.ToArray();
         }

     }

     public int Input(byte[] buff)
     {
         if (_ikcp == null)
         {
             throw new Exception("KCP not initialized yet...");
         }

         int retVal;
         lock (_lockObj)
         {
             retVal =  _ikcp.Input(buff, 0, buff.Length);
         }

         ReceiveAll();
         return retVal;
     }
 }
