using Google.Protobuf;
using System.Reflection;
using Common.Protobuf;

namespace Common;

public class ProtobufFactory
{

    private static Dictionary<Opcode, Type> _types = new Dictionary<Opcode, Type>();
    private static Dictionary<Opcode, MessageParser> _parsers = new Dictionary<Opcode, MessageParser>();
    public static void Initialize()
    {
        Assembly assembly = Assembly.GetAssembly(typeof(GetPlayerTokenReq))!;
        var protoClasses = assembly.GetTypes().Where(x => typeof(IMessage).IsAssignableFrom(x));

        var enumerable = protoClasses.ToList();
        // _ = enumerable.Select(type =>
        // {
        //     return type.GetMembers().Where(x => x.Name == "Parser").First();
        // });
        
        
        foreach (var type in enumerable)
        {
            var classInstance = type.GetConstructors().First().Invoke(new object[]{});
            var getparsermethod = type.GetMethod("get_Parser"); 
            if (getparsermethod is not null)
            {
                var Parser = getparsermethod?.Invoke(classInstance, new object[]{});
                // Console.WriteLine("found parser for type:" + type.Name);
                if (Parser is not null)
                {
                    if (Enum.TryParse(type.Name, out Opcode opcode))
                    {
                        _parsers.TryAdd(opcode, (Parser as MessageParser)!);
                        _types.TryAdd(opcode, type);
                    }
                }
                
            }
        }
    }

    public static Type? GetPacketType(Opcode opcode)
    {
        if (_types.TryGetValue(opcode, out var type))
        {
            var constructor = type.GetConstructor(new Type[] {});
            //return constructor.Invoke();
        }
        return null;
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