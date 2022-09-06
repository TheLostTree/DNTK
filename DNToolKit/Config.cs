using Newtonsoft.Json;

namespace DNToolKit;

public class Config
{
    public string CaptureFolder;
    public string FrontendUrl;
    public string ClientPrivateRSA;

    public Config() { }
    
    [JsonIgnore]
    public static Config Default = new Config()
    {
        CaptureFolder = "./Captures",
        FrontendUrl = "ws://127.0.0.1:40510",
        ClientPrivateRSA = "<RSAKeyValue><Modulus>02M1I1V/YvxANOvLFX8R7D8At40IlT7HDWpAW3t+tAgQ7sqjCeYOxiXqOaaw2kJhM3HT5nZll48UmykVq45Q05J57nhdSsGXLJshtLcTg9liMEoW61BjVZi9EPPRSnE05tBJc57iqZw+aEcaSU0awfzBc8IkRd6+pJ5iIgEVfuTluanizhHWvRli3EkAF4VNhaTfP3EkYfr4NE899aUeScbbdLFI6u1XQudlJCPTxaISx5ZcwM+nP3v242ABcjgUcfCbz0AY547WazK4bWP3qicyxo4MoLOoe9WBq6EuG4CuZQrzKnq8ltSxud/6chdg8Mqp/IasEQ2TpvY78tEXDQ==</Modulus><Exponent>AQAB</Exponent><P>9ci4i5gUVSGo3PkIpTTXiNm7pCXTPlkDTxXzhxMlx8sgrh7auoLwMVOV0DQW1V84a3RXTwf/HalEKEY69TAYbmef0OqqHoGMHJStbjPaGdfNPdm5IOHp5qmIIHWOX2Z4nSyeEXY+z+GpYYvZvdKQIJ73SpVPM5U54s7phQIg6r0=</P><Q>3Cx9CQCr/THDyd5EY1OudeKa9tL5Vc8gXfzCJ2WO5s03sNjlwgVNAmudMFYpu7P+31onxBfpMUvRyL/2+E8mhOF8vXa8vaRYZiBaRZE+apoFbfLPsezmu37G4ff/sDnDm+aQSDU1kmCewnSsxRO7VDo8zkIGDo6nIdjhOEFvypE=</Q><DP>ML8ciuMgtTm1yg3CPzHZxZSZeJbf7K+uzlKmOBX+GkAZPS91ZiRuCvpu7hpGpQ77m6Q5ZL1LRdC6adpz+wkM72ix87d3AhHjfg+mzgKOsS1x0WCLLRBhWZQqIXXvRNCH/3RH7WKsVoKFG4mnJ9TJLQ8aMLqoOKzSDD/JZM3lRWk=</DP><DQ>PIZ+WNs2bIQhrnzLkAKRExcYQoH8yPoHi87QEMR6ZDhF9vepMY0DfobWz1LgZhk1F3FRPTbVhBezs9wRqHEZxa22/N6HRBrJsklyh21GG0f79h2put/FDgXr5nKmd2tpupHHWBJIh9THz+0DEao69QyNaqX7xESy7TsRrsVOVgE=</DQ><InverseQ>mlWr8mOkpY92UUO4ipPXx5IHv2xZfs4QDcUX1lTmDAvJg9oBw7KvQiHQqdTINLSaVi2hoMgzNZIAoWWLH3+I0cRwuHM7wLaD0pcVlxdpy99aid75Nmc83GuBkhwCJ6HVwayrLWr+UiCqLFik9mMrMYB5QPUptn+J9PRoxW7JRB4=</InverseQ><D>uLj7GJOALEnu+dALug8+5EnyIHQ4SeOAIrL05ny2rjBWS7X8X4wQ4QsE8bg+15wmQMR5ve08vgKkqSpv62kELL7VmpTIQamGp84w2DEb9p4idbxo5t1q0MQWhBfsjrb62bCuX0E7JaiJyKpJyEB+34I2sye2dvA9fLGDY9+6nxVkkspoBaPkqEvwShK9tNJaUQP6Ghl4h3MiDoyYnT+m+1BnrO7oTF1Ly636M5grEqrJcVzuVJOVzf31peC8Qhl+5qTXz2SE+WAUox5YhZDZcSI8iYPDkSxovNjNnLssad/a/dxermgoy7W/q3cJRrq+56YF1JCn1kCX/VhO7mq+gQ==</D></RSAKeyValue>"
    };
}