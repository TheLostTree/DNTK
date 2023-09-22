using System.Reflection;
using Google.Protobuf;

namespace Common;

public class ProtobufParser
{
    private static Dictionary<Opcode, Type> _types = new();
    private static Dictionary<Opcode, MessageParser> _parsers = new();
    
    public static int ParserCount => _parsers.Count;
    static ProtobufParser()
    {
        Assembly assembly = Assembly.GetAssembly(typeof(ProtobufParser))!;
        var protoClasses = assembly.GetTypes().Where(x => typeof(IMessage).IsAssignableFrom(x));

        // _ = enumerable.Select(type =>
        // {
        //     return type.GetMembers().Where(x => x.Name == "Parser").First();
        // });
        
        
        foreach (var type in protoClasses)
        {
            var classInstance = type.GetConstructors().First().Invoke(new object[]{});
            var getParserMethod = type.GetMethod("get_Parser"); 
            if (getParserMethod is not null)
            {
                var parser = getParserMethod?.Invoke(classInstance, new object[]{});
                // Console.WriteLine("found parser for type:" + type.Name);
                if (parser is null) continue;
                if (!Enum.TryParse(type.Name, out Opcode opcode)) continue;
                _parsers.TryAdd(opcode, (parser as MessageParser)!);
                _types.TryAdd(opcode, type);

            }
        }
        
    }
    
    public static MessageParser? GetPacketTypeParser(Opcode opcode)
    {
        if (_parsers.TryGetValue(opcode, out var parser))
        {
            return parser;
        }
        return null;
    }
}