using DNToolKit.PacketProcessors;

namespace DNToolKit.Net;

    //add more wrapper methods as necessary
public class KCP
{

    private IKCP _ikcp;

    private object lockObj = new();
    private PacketProcessor _processor;


    private bool _running = false;
    public KCP(uint conv, uint token, object user, PacketProcessor processor)
    {
        
        _ikcp = new IKCP(conv, token, user);
        _ikcp.NoDelay(1, 10, 2, 0);
        _ikcp.WndSize(256, 256);
        _ikcp.SetOutput((data, size, userObj) =>
        {
            //we dont do shit
            return;
        });
        _running = true;
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

    public void Update(uint current)
    {
        lock (lockObj)
        {
            _ikcp.Update(current);
        }
    }

    public uint Check(uint current)
    {
        lock (lockObj)
        {
            return _ikcp.Check(current);
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
            Update((uint)DateTime.Now.Ticks);
            var recvArr = RecieveAll();
            foreach (var packets in recvArr)
            {
                
            }
            var delay = (int)Check((uint)DateTime.Now.Ticks);
            await Task.Delay(delay);
            _ = Loop();
        }
    }

}
