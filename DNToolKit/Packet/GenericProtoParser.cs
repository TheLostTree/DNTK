using Google.Protobuf;

namespace DNToolKit.Packet;

public class GenericProtoParser
{
    public static T Parse<T>(byte[] data) where T : IMessage<T>, new()
    {
        //todo: cache these maybe?
        return new MessageParser<T>(()=> new T()).ParseFrom(data);
    }
}