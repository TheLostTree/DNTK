namespace DNToolKit.Net;

using System.Diagnostics;
using System.Net;

// ReSharper disable InconsistentNaming
// ReSharper disable IdentifierTypo
// ReSharper disable RedundantDefaultMemberInitializer
// ReSharper disable NotAccessedField.Local
// ReSharper disable ArrangeTypeMemberModifiers


//please use a lock for most of these functions
//its 100% not thread safe i think
#pragma warning disable CS8600
#pragma warning disable CS0414

public class FKCP
{
    public const int IKCP_RTO_NDL = 30;         // no delay min rto
    public const int IKCP_RTO_MIN = 100;        // normal min rto
    public const int IKCP_RTO_DEF = 200;
    public const int IKCP_RTO_MAX = 60000;
    public const int IKCP_CMD_PUSH = 81;        // cmd: push data
    public const int IKCP_CMD_ACK = 82;         // cmd: ack
    public const int IKCP_CMD_WASK = 83;        // cmd: window probe (ask)
    public const int IKCP_CMD_WINS = 84;        // cmd: window size (tell)
    public const int IKCP_ASK_SEND = 1;         // need to send IKCP_CMD_WASK
    public const int IKCP_ASK_TELL = 2;         // need to send IKCP_CMD_WINS
    public const int IKCP_WND_SND = 32;
    public const int IKCP_WND_RCV = 32;
    public const int IKCP_MTU_DEF = 1400;
    public const int IKCP_ACK_FAST = 3;
    public const int IKCP_INTERVAL = 100;
    public const int IKCP_OVERHEAD = 28;
    public const int IKCP_DEADLINK = 20;
    public const int IKCP_THRESH_INIT = 2;
    public const int IKCP_THRESH_MIN = 2;
    public const int IKCP_PROBE_INIT = 7000;    // 7 secs to probe window size
    public const int IKCP_PROBE_LIMIT = 120000; // up to 120 secs to probe window

    public const int IKCP_LOG_OUTPUT = 0x1;
    public const int IKCP_LOG_INPUT = 0x2;
    public const int IKCP_LOG_SEND = 0x4;
    public const int IKCP_LOG_RECV = 0x8;
    public const int IKCP_LOG_IN_DATA = 0x10;
    public const int IKCP_LOG_IN_ACK = 0x20;
    public const int IKCP_LOG_IN_PROBE = 0x40;
    public const int IKCP_LOG_IN_WINS = 0x80;
    public const int IKCP_LOG_OUT_DATA = 0x100;
    public const int IKCP_LOG_OUT_ACK = 0x200;
    public const int IKCP_LOG_OUT_PROBE = 0x400;
    public const int IKCP_LOG_OUT_WINS = 0x800;


    // encode 8 bits unsigned int
    public static void ikcp_encode8u(byte[] p, int offset, byte c)
    {
        p[offset] = c;
    }

    // decode 8 bits unsigned int
    public static byte ikcp_decode8u(byte[] p, ref int offset)
    {
        return p[offset++];
    }

    // encode 16 bits unsigned int (lsb)
    public static void ikcp_encode16u(byte[] p, int offset, UInt16 v)
    {
        p[offset] = (byte)(v & 0xFF);
        p[offset + 1] = (byte)(v >> 8);
    }

    // decode 16 bits unsigned int (lsb)
    public static UInt16 ikcp_decode16u(byte[] p, ref int offset)
    {
        int pos = offset;
        offset += 2;
        return (UInt16)((UInt16)p[pos] | (UInt16)(p[pos + 1] << 8));
    }

    // encode 32 bits unsigned int (lsb)
    public static void ikcp_encode32u(byte[] p, int offset, UInt32 l)
    {
        p[offset] = (byte)(l & 0xFF);
        p[offset + 1] = (byte)(l >> 8);
        p[offset + 2] = (byte)(l >> 16);
        p[offset + 3] = (byte)(l >> 24);
    }
    // decode 32 bits unsigned int (lsb)
    public static UInt32 ikcp_decode32u(byte[] p, ref int offset)
    {
        int pos = offset;
        offset += 4;
        return ((UInt32)p[pos] | (UInt32)(p[pos + 1] << 8)
            | (UInt32)(p[pos + 2] << 16) | (UInt32)(p[pos + 3] << 24));
    }



    public static UInt32 _imin_(UInt32 a, UInt32 b)
    {
        return a <= b ? a : b;
    }

    public static UInt32 _imax_(UInt32 a, UInt32 b)
    {
        return a >= b ? a : b;
    }

    public static UInt32 _ibound_(UInt32 lower, UInt32 middle, UInt32 upper)
    {
        return _imin_(_imax_(lower, middle), upper);
    }

    public static Int32 _itimediff(UInt32 later, UInt32 earlier)
    {
        return (Int32)(later - earlier);
    }

    internal class Segment
    {
        internal UInt32 conv = 0;
        internal UInt32 token = 0;
        internal UInt32 cmd = 0;
        internal UInt32 frg = 0;
        internal UInt32 wnd = 0;
        internal UInt32 ts = 0;
        internal UInt32 sn = 0;
        internal UInt32 una = 0;
        internal UInt32 resendts = 0;
        internal UInt32 rto = 0;
        internal UInt32 faskack = 0;
        internal UInt32 xmit = 0;
        internal byte[] data;

        internal Segment(int size = 0)
        {
            data = new byte[size];
        }

        internal void Encode(byte[] ptr, ref int offset)
        {
            UInt32 len = (UInt32)data.Length;
            ikcp_encode32u(ptr, offset, conv);
            ikcp_encode32u(ptr, offset, token);
            ikcp_encode8u(ptr, offset + 8, (byte)cmd);
            ikcp_encode8u(ptr, offset + 9, (byte)frg);
            ikcp_encode16u(ptr, offset + 10, (UInt16)wnd);
            ikcp_encode32u(ptr, offset + 12, ts);
            ikcp_encode32u(ptr, offset + 16, sn);
            ikcp_encode32u(ptr, offset + 20, una);
            ikcp_encode32u(ptr, offset + 24, len);
            offset += IKCP_OVERHEAD;
        }

    }

    UInt32 conv_ = 0;
    UInt32 token_ = 0;
    UInt32 mtu_ = 0;
    UInt32 mss_ = 0;
    UInt32 state_ = 0;

    UInt32 snd_una_ = 0;
    UInt32 snd_nxt_ = 0;
    UInt32 rcv_nxt_ = 0;

    UInt32 ts_recent_ = 0;
    UInt32 ts_lastack_ = 0;
    UInt32 ssthresh_ = 0;

    Int32 rx_rttval_ = 0;
    Int32 rx_srtt_ = 0;
    Int32 rx_rto_ = 0;
    Int32 rx_minrto_ = 0;

    UInt32 snd_wnd_ = 0;
    UInt32 rcv_wnd_ = 0;
    UInt32 rmt_wnd_ = 0;
    UInt32 cwnd_ = 0;
    UInt32 probe_ = 0;

    UInt32 current_ = 0;
    UInt32 interval_ = 0;
    UInt32 ts_flush_ = 0;
    UInt32 xmit_ = 0;

    UInt32 nrcv_buf_ = 0;
    UInt32 nsnd_buf_ = 0;
    UInt32 nrcv_que_ = 0;
    UInt32 nsnd_que_ = 0;

    UInt32 nodelay_ = 0;
    UInt32 updated_ = 0;
    UInt32 ts_probe_ = 0;
    UInt32 probe_wait_ = 0;
    UInt32 dead_link_ = 0;
    UInt32 incr_ = 0;

    LinkedList<Segment> snd_queue_;
    LinkedList<Segment> rcv_queue_;
    LinkedList<Segment> snd_buf_;
    LinkedList<Segment> rcv_buf_;

    UInt32[] acklist_;
    UInt32 ackcount_ = 0;
    UInt32 ackblock_ = 0;

    byte[] buffer_;
    object user_;

    Int32 fastresend_ = 0;
    Int32 nocwnd_ = 0;
    

    // create a new kcp control object, 'conv' must equal in two endpoint
    // from the same connection. 'user' will be passed to the output callback
    // output callback can be setup like this: 'kcp->output = my_udp_output'
    public FKCP(object user)
    {
        Debug.Assert(BitConverter.IsLittleEndian); // we only support little endian device
        snd_wnd_ = IKCP_WND_SND;
        rcv_wnd_ = IKCP_WND_RCV;
        rmt_wnd_ = IKCP_WND_RCV;
        mtu_ = IKCP_MTU_DEF;
        mss_ = mtu_ - IKCP_OVERHEAD;
        rx_rto_ = IKCP_RTO_DEF;
        rx_minrto_ = IKCP_RTO_MIN;
        interval_ = IKCP_INTERVAL;
        ts_flush_ = IKCP_INTERVAL;
        ssthresh_ = IKCP_THRESH_INIT;
        dead_link_ = IKCP_DEADLINK;
        buffer_ = new byte[(mtu_ + IKCP_OVERHEAD) * 3];
        snd_queue_ = new LinkedList<Segment>();
        rcv_queue_ = new LinkedList<Segment>();
        snd_buf_ = new LinkedList<Segment>();
        rcv_buf_ = new LinkedList<Segment>();
    }
    

    // user/upper level recv: returns size, returns below zero for EAGAIN
    public int Recv(byte[] buffer, int offset, int len)
    {
        int ispeek = (len < 0 ? 1 : 0);
        int recover = 0;

        if (rcv_queue_.Count == 0)
            return -1;

        if (len < 0)
            len = -len;

        int peeksize = PeekSize();
        if (peeksize < 0)
            return -2;

        if (peeksize > len)
            return -3;

        if (nrcv_que_ >= rcv_wnd_)
            recover = 1;

        // merge fragment
        len = 0;
        LinkedListNode<Segment> next = null;
        for (var node = rcv_queue_.First; node != null; node = next)
        {
            int fragment = 0;
            var seg = node.Value;
            next = node.Next;

            if (buffer != null)
            {
                Buffer.BlockCopy(seg.data, 0, buffer, offset, seg.data.Length);
                offset += seg.data.Length;
            }
            len += seg.data.Length;
            fragment = (int)seg.frg;

            

            if (ispeek == 0)
            {
                rcv_queue_.Remove(node);
                nrcv_que_--;
            }

            if (fragment == 0)
                break;
        }

        Debug.Assert(len == peeksize);

        // move available data from rcv_buf -> rcv_queue
        while (rcv_buf_.Count > 0)
        {
            var node = rcv_buf_.First;
            var seg = node.Value;
            if (seg.sn == rcv_nxt_ && nrcv_que_ < rcv_wnd_)
            {
                rcv_buf_.Remove(node);
                nrcv_buf_--;
                rcv_queue_.AddLast(node);
                nrcv_que_++;
                rcv_nxt_++;
            }
            else
            {
                break;
            }
        }

        // fast recover
        if (nrcv_que_ < rcv_wnd_ && recover != 0)
        {
            // ready to send back IKCP_CMD_WINS in ikcp_flush
            // tell remote my window size
            probe_ |= IKCP_ASK_TELL;
        }

        return len;
    }

    // check the size of next message in the recv queue
    public int PeekSize()
    {
        if (rcv_queue_.Count == 0)
            return -1;

        var node = rcv_queue_.First;
        var seg = node.Value;
        if (seg.frg == 0)
            return seg.data.Length;

        if (nrcv_que_ < seg.frg + 1)
            return -1;

        int length = 0;
        for (node = rcv_queue_.First; node != null; node = node.Next)
        {
            seg = node.Value;
            length += seg.data.Length;
            if (seg.frg == 0)
                break;
        }
        return length;
    }




    void ShrinkBuf()
    {
        var node = snd_buf_.First;
        if (node != null)
        {
            var seg = node.Value;
            snd_una_ = seg.sn;
        }
        else
        {
            snd_una_ = snd_nxt_;
        }
    }
    

    // parse data
    void ParseData(Segment newseg)
    {
        UInt32 sn = newseg.sn;
        int repeat = 0;

        if (_itimediff(sn, rcv_nxt_ + rcv_wnd_) >= 0 ||
            _itimediff(sn, rcv_nxt_) < 0)
        {
            return;
        }

        LinkedListNode<Segment> node = null;
        LinkedListNode<Segment> prev = null;
        for (node = rcv_buf_.Last; node != null; node = prev)
        {
            var seg = node.Value;
            prev = node.Previous;
            if (seg.sn == sn)
            {
                repeat = 1;
                break;
            }
            if (_itimediff(sn, seg.sn) > 0)
            {
                break;
            }
        }
        if (repeat == 0)
        {
            if (node != null)
            {
                rcv_buf_.AddAfter(node, newseg);
            }
            else
            {
                rcv_buf_.AddFirst(newseg);
            }
            nrcv_buf_++;
        }

        // move available data from rcv_buf -> rcv_queue
        MoveData();
    }

    private void MoveData()
    {
        LinkedListNode<Segment> node;
        while (rcv_buf_.Count > 0)
        {
            node = rcv_buf_.First;
            var seg = node.Value;
            if (seg.sn == rcv_nxt_ && nrcv_que_ < rcv_wnd_)
            {
                rcv_buf_.Remove(node);
                nrcv_buf_--;
                rcv_queue_.AddLast(node);
                nrcv_que_++;
                rcv_nxt_++;
            }
            else
            {
                break;
            }
        }
    }

    // when you received a low level packet (eg. UDP packet), call it
    public int Input(byte[] data, int offset, int size)
    {
        UInt32 maxack = 0;
        int flag = 0;
        

        if (data == null || size < IKCP_OVERHEAD)
            return -1;
        //Console.WriteLine(Convert.ToHexString(data));

        while (true)
        {
            if (size < IKCP_OVERHEAD)
                break;

            UInt32 conv = ikcp_decode32u(data, ref offset);
            if (conv_ != conv)
            {
                return -7;
            }
            UInt32 token = ikcp_decode32u(data, ref offset);

            if (token_ != token)
            {
                return -8;
            }
            UInt32 cmd = ikcp_decode8u(data, ref offset);
            UInt32 frg = ikcp_decode8u(data, ref offset);
            UInt32 wnd = ikcp_decode16u(data, ref offset);
            UInt32 ts = ikcp_decode32u(data, ref offset);
            UInt32 sn = ikcp_decode32u(data, ref offset);
            UInt32 una = ikcp_decode32u(data, ref offset);
            UInt32 len = ikcp_decode32u(data, ref offset);

            size -= IKCP_OVERHEAD;
            if (size < len)
                return -2;

            if (cmd != IKCP_CMD_PUSH && cmd != IKCP_CMD_ACK &&
                cmd != IKCP_CMD_WASK && cmd != IKCP_CMD_WINS)
                return -3;

            rmt_wnd_ = wnd;
            ShrinkBuf();

            if (cmd == IKCP_CMD_ACK)
            {
            }
            else if (cmd == IKCP_CMD_PUSH)
            {
                if (_itimediff(sn, rcv_nxt_ + rcv_wnd_) < 0)
                {
                    if (_itimediff(sn, rcv_nxt_) >= 0)
                    {
                        var seg = new Segment((int)len);
                        seg.conv = conv;
                        seg.token = token;
                        seg.cmd = cmd;
                        seg.frg = frg;
                        seg.wnd = wnd;
                        seg.ts = ts;
                        seg.sn = sn;
                        seg.una = una;
                        if (len > 0)
                        {
                            Buffer.BlockCopy(data, offset, seg.data, 0, (int)len);
                        }
                        ParseData(seg);
                    }
                }
            }
            else if (cmd == IKCP_CMD_WASK)
            {
            }
            else if (cmd == IKCP_CMD_WINS)
            {
            }
            else
            {
                return -3;
            }

            offset += (int)len;
            size -= (int)len;
        }


        UInt32 unack = snd_una_;
        if (_itimediff(snd_una_, unack) > 0)
        {
            if (cwnd_ < rmt_wnd_)
            {
                if (cwnd_ < ssthresh_)
                {
                    cwnd_++;
                    incr_ += mss_;
                }
                else
                {
                    if (incr_ < mss_)
                        incr_ = mss_;
                    incr_ += (mss_ * mss_) / incr_ + (mss_ / 16);
                    if ((cwnd_ + 1) * mss_ <= incr_)
                        cwnd_++;
                }
                if (cwnd_ > rmt_wnd_)
                {
                    cwnd_ = rmt_wnd_;
                    incr_ = rmt_wnd_ * mss_;
                }
            }
        }

        return 0;
    }

}
