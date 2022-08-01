using Google.Protobuf;

namespace Common;

public class GenericProtoParser
{
    public static T Parse<T>(byte[] data) where T : IMessage<T>, new()
    {
        //lol i dont even use this
        return new MessageParser<T>(()=> new T()).ParseFrom(data);
    }
    
}