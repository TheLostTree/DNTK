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
     }


     public void RecieveAll()
     {

         byte[]? recv;
         do
         {
             recv = Recv();
             if (recv == null)
             {
                 break;
             }

             _processor.AddPacket(recv,user);

         } while (recv != null);
         
     }

     public void Update()
     {
         lock (lockObj)
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

         int retval;
         lock (lockObj)
         {
             retval =  _ikcp.Input(buff, 0, buff.Length);
         }

         RecieveAll();
         return retval;

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