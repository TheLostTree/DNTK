using Common.Protobuf;

namespace DNToolKit.PacketProcessors;

public class ClientAbilityProcessor
{
    public static ClintAbilityInFin HandleClientAbilityInitFinish(byte[] data)
    {
        var protob = ClientAbilityInitFinishNotify.Parser.ParseFrom(data);
        var invokes = AbilityInvokeProcessor.ProcessEntries(protob!.Invokes);

        return new ClintAbilityInFin()
        {
            EntityId = protob.EntityId,
            Invokes = invokes
        };
    }
    
    public static ClintAbilityChaeg HandleClientAbilityChange(byte[] data)
    {
        var protob = ClientAbilityChangeNotify.Parser.ParseFrom(data);
        var invokes = AbilityInvokeProcessor.ProcessEntries(protob!.Invokes);

        return new ClintAbilityChaeg()
        {
            EntityId = protob.EntityId,
            Invokes = invokes,
            IsInitHash = protob.IsInitHash
        };

    }

    public class ClintAbilityInFin
    {
        public uint EntityId;
        public List<AbilityInvokeProcessor.ObilityInvokeAntree> Invokes;
    }
    
    //i realise these are the same but oh well its for the same of easier reading
    public class ClintAbilityChaeg
    {
        public uint EntityId;
        public List<AbilityInvokeProcessor.ObilityInvokeAntree> Invokes;
        public bool IsInitHash;

    }
}