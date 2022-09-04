 using DNToolKit.PacketProcessors;
 using DNToolKit.Sniffer;
 using Serilog;

 namespace DNToolKit.Net;

    // add more wrapper methods as necessary
 public class KCP
 {

     private IKCP _ikcp;

     private object lockObj = new();
     private PacketProcessor _processor;


     private bool _running = false;
     private UdpHandler.Sender user;
     
     public KCP(uint conv, uint token, UdpHandler.Sender user, PacketProcessor processor)
     {
         
         _ikcp = new IKCP(conv, token, user);
         this.user = user;
         _ikcp.NoDelay(1, 10, 2, 0);
         _ikcp.WndSize(256, 256);
         _ikcp.SetOutput((data, size, userObj) =>
         {
             //we dont do shit
             return;
         });
         _processor = processor;
         _running = true;

         Task.Run(Loop);
     }


     public byte[][] RecieveAll()
     {
         List<byte[]> recvList = new();

         byte[]? recv;
         do
         {
             recv = Recv();
             if (recv == null)
             {
                 break;
             }

             recvList.Add(recv);

         } while (recv != null);
         
         //not sure if i need this to copy it but im going to be safe
         return recvList.ToArray();
     }


     private byte[]? Recv()
     {
         if (_ikcp == null)
         {
             throw new Exception("KCP not initialized yet...");
         }

         lock (lockObj)
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

         lock (lockObj)
         {
             return _ikcp.Input(buff, 0, buff.Length);
         }

     }
     
     public void Stop()
     {
         _running = false;
     }
     public async Task Loop()
     {
         while (_running)
         {
             var recvArr = RecieveAll();
             foreach (var packets in recvArr)
             {
                 _processor.AddPacket(packets, this.user);
             }
             await Task.Delay(1);

         }
     }

 }

/*
using DNToolKit.PacketProcessors;
using DNToolKit.Sniffer;
using Serilog;

namespace DNToolKit.Net;

    //add more wrapper methods as necessary
public class KCP
{

    private Gcp _ikcp;

    private object lockObj = new();
    private PacketProcessor _processor;


    private bool _running = false;
    private UdpHandler.Sender user;
    
    public KCP(uint conv, uint token, UdpHandler.Sender user, PacketProcessor processor)
    {
        
        _ikcp = new Gcp();
        this.user = user;
        _processor = processor;
        _running = true;

        Task.Run(Loop);
    }


    private Task<byte[]> Recv()
    {
        if (_ikcp == null)
        {
            throw new Exception("KCP not initialized yet...");
        }
    
        lock (lockObj)
        {
            return _ikcp.Recv();
        }
    
    }

    public int Input(byte[] buff)
    {
        if (_ikcp == null)
        {
            throw new Exception("KCP not initialized yet...");
        }

        lock (lockObj)
        {
            _ikcp.Input(buff);
        }

        return 0;
    }
    
    


    public void Stop()
    {
        _running = false;
    }
    public async Task Loop()
    {
        while (_running)
        {
            var packet = await Recv();
            if(packet is not null)
                _processor.AddPacket(packet, this.user);
        }
    }

}


*/